/*
** Author : Dinesh Guleria
** Date : 17/10/2014
** Note : This library is designed taking into refrence Ake Hedman, vscpws.js lib
*/


///////////////////////////////////////////////////////////////////////////////
// dummy_Device_vscpws_variableButton
//

function dummy_Device_vscpws_variableButton( username,           // Username for websocket serever
                               passwordhash,    // Password hash for websocket
                               url             // url to VSCP websocket i/f
                                  )
{
    // First set default parameter

    // Websocket for VSCP daemon communication
    this.socket_vscp = null;

    // Flag for connected or unconnected state.
    this.bConnected = false;

    // Receive events to confirm Turn ON
    this.receive_vscpclass = VSCP_CLASS1_CONTROL;     // Default class is CLASS1.CONTROL
    this.receive_vscptype = VSCP_TYPE_CONTROL_DIM_LAMPS; // Default type is TurnOn
    this.receive_data = new Array(0,0,0); // Dimvalue=0, zone=0, subzone=0
    this.receive_guid = "";        // Default GUID is GUID of interface.


    // Events to send to turn ON
    this.tansmitt_vscpclass = VSCP_CLASS1_INFORMATION;   // Default class is CLASS1.INFORMATION
    this.tansmitt_vscptype = VSCP_TYPE_INFORMATION_LEVEL_CHANGED;   // Default type is On
    this.tansmitt_data = new Array(0,0,0); // Dimvalue = 0, zone=0, subzone=0
    this.tansmitt_guid = "";          // Default GUID (empty is any).

    this.sliderRemoteValue = 0;

    this.user = username;
    this.password = "";
    this.domain = "";
    this.passwordhash = passwordhash;

    // Open the socket
    this.socket_vscp = vscpws_openSocket(url);

    if (null==this.socket_vscp ) alert("Could not open websocket to VSCP server!");

    // Bind events
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);

    // Set default events
    this.setTransmittEvent();

}



//-----------------------------------------------------------------------------
// setTransmittEvent
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.setTransmittEvent = function(vscpclass,
                                                                vscptype,
                                                                data,
                                                                guid )
{
    var dataArray;
    dataArray = new Array(0,0,0); // Dimvalue = 0, zone=0, subzone=0


    //
    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_INFORMATION;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_INFORMATION_LEVEL_CHANGED;
    guid = typeof guid !== 'undefined' ? guid : "";  // GUID dont'care
    data = typeof data !== 'undefined' ? data : dataArray;

    this.tansmitt_vscpclass = vscpclass;
    this.tansmitt_vscptype = vscptype;
    this.tansmitt_guid = guid;
    this.tansmitt_data = data;

}

//-----------------------------------------------------------------------------
// setTransmittZone
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.setTransmittZone = function(zone,subzone)
{
    this.tansmitt_data[1] = typeof zone !== 'undefined' ? zone : 0;
    this.tansmitt_data[2] = typeof subzone !== 'undefined' ? subzone : 0;
}

//-----------------------------------------------------------------------------
// setReceiveEvent
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.setReceiveEvent = function(vscpclass,
                                                                vscptype,
                                                                data,
                                                                guid )
{

    var dataArray;
    dataArray = new Array(0,0,0); // Dimvalue = 0, zone=0, subzone=0

    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_CONTROL;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_CONTROL_DIM_LAMPS;
    guid = typeof guid !== 'undefined' ? guid : "";
    data = typeof data !== 'undefined' ? data : dataArray;

    this.receive_vscpclass = vscpclass;
    this.receive_vscptype = vscptype;
    this.receive_guid = guid;
    this.receive_data = data;


    // Set filter
    this.setFilter();
}



//-----------------------------------------------------------------------------
// setFilter
//-----------------------------------------------------------------------------
dummy_Device_vscpws_variableButton.prototype.setFilter = function()
{
    var cmd;

    var filter_class = this.receive_vscpclass;
    var filter_type = this.receive_vscptype;
    var filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

    // Zero for a mask is don't care
    var mask_class = -1 != this.receive_vscpclass ? 0xff : 0x00;
    var mask_type = -1 != this.receive_vscptype ? 0xff : 0x00;
    var mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

    if ( ("" != this.receive_guid) ) {
        guid = this.receive_guid.split(":");
        for ( i=0; i<16; i++ ) {
            mask_guid[i] = 0xff;
            filter_guid[i] = guid[i];
        }
    }

    // Send setfilter command. Format is
    // “C;SETFILTER;filter-priority,filter-class,filter-type,
    //    filter-GUID;mask-priority,mask-class,mask-type,mask-GUID\E2\80?
    cmd = "C;SETFILTER;0x00,";
    cmd += "0x"+filter_class.toString(16) + ",";
    cmd += "0x"+filter_type.toString(16) + ",";
    for (i=0;i<16;i++) {
        cmd += "0x"+(filter_guid[i] & 255).toString(16);
        if (i<15) cmd += ":";   // No colon on last
    }
    cmd += ";0x00,";
    cmd += "0x" + (mask_class & 255).toString(16) + ",";
    cmd += "0x" + (mask_type & 255).toString(16) + ",";
    for (i=0;i<16;i++) {
        cmd += "0x"+(mask_guid[i] & 255).toString(16);
        if (i<15) cmd += ":";   // No colon on last
    }

    if (vscpws_debug) console.log("Set filter = "+ cmd);

    // Set filter/mask on server
    if (this.bConnected) this.socket_vscp.send(cmd);
};


//-----------------------------------------------------------------------------
// setReceiveZone
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.setReceiveZone = function(zone,subzone)
{
    this.receive_data[1] = typeof zone !== 'undefined' ? zone : 0;
    this.receive_data[2] = typeof subzone !== 'undefined' ? subzone : 0;
}

//-----------------------------------------------------------------------------
// setValue
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.setValue = function(value)
{
    var cmd="E;0,"; // Event + priority

    //if (value) {

        if (vscpws_debug) console.log("True");

        // Send Turn On Event
        if (this.bConnected && (-1 != this.tansmitt_vscpclass ) ) {

            cmd += this.tansmitt_vscpclass.toString() + ",";
            cmd += this.tansmitt_vscptype.toString() + ",";
            cmd += "0,0,"; // obid and timestamp
            if ("" == this.tansmitt_guid) {
                cmd += "-"; // Use daemon interface GUID
            }
            else {
                cmd += this.tansmitt_guid.toString();
            }
            cmd += ",";

            this.tansmitt_data[0] = value;

            for (i=0;i<this.tansmitt_data.length;i++) {
                    cmd += this.tansmitt_data[i].toString() ; //+ ",";
                    if (i<this.tansmitt_data.length-1) cmd += ",";   // No comma for last
            }

            if (vscpws_debug) console.log(cmd);
            this.socket_vscp.send(cmd);

        }
    //}

};



//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.onVSCPOpen = function()
{
    if (vscpws_debug) console.log('Open VSCP websocket');
    this.bConnected = true;
    //this.socket_vscp.send("C;" + "open");
    //---this.socket_vscp.send("C;" + "NOOP");
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

dummy_Device_vscpws_variableButton.prototype.onVSCPClose = function()
{
    if (vscpws_debug) console.log('Close VSCP websocket');
    this.bConnected = false;
    this.socket_vscp.send("C;" + "close");

};


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP socketcan incoming message/event.
dummy_Device_vscpws_variableButton.prototype.onVSCPMessage = function(msg)
{
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + " " + msg.data);

    msgitems = msg.data.split(';');

    /*if(this.messageTestFlag == 0)
    {
        //Increase the message counter
        this.numMessages++;
    }*/

    if ("+" == msgitems[0]){        // check for positive reply

        if (vscpws_debug) console.log("Positive reply "+msg.data);
        respone = msgitems[0].split(";");


        if ( "AUTH0" == msgitems[1] )
        {
            //Authentication 0 -  challange
            var msg = "C;AUTH;" + this.user + ";" + vscp_make_websocket_auth_hash( this.user, this.passwordhash, msgitems[2] );
            this.socket_vscp.send( msg );
        }
        else if ( "AUTH1" == msgitems[1] )
        {
            // successfully log in -- Authentication 1 - Logged in
            //this.numMessages = 0;
            //this.messageTestFlag = 1;

            // We are authenticated and ready to go to work
            this.socket_vscp.send("C;" + "OPEN");
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;

            //read the variable value
            //this.setMonitorVariable(this.monitorVariableName);
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
        else {
            // Do nothing
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
    }
    else if ("E" == msgitems[0]){   // Check for event
        var offset = 0; // used for Level I events over Level II

        //alert("kkkk");
        //head;class;type;guid,data
        var vscpitems = msgitems[1].split(",");

        var vscphead = vscpitems[0];
        var vscpclass = vscpitems[1];
        var vscptype = vscpitems[2];
        var vscpobid = vscpitems[3];
        var vscptimestamp = vscpitems[4];
        var vscpguid = vscpitems[5];
        var vscpdata = new Array();
        for (i=0;i<vscpitems.length-6;i++){
            vscpdata[i] = vscpitems[6+i];
        }

        // Check if we have Level I events over Level II
        if ( vscpclass >= 512 && vscpclass < 1024 ) {
            offset = 16;    // Offset into data
            vscpclass -= 512;
        }

        if (vscpws_debug) console.log("CLASS = " + vscpclass + " Trigg on " + this.receive_vscpclass );
        if (vscpws_debug) console.log(" TYPE = " + vscptype + " Trigg on " + this.receive_vscptype );

        // Check GUID
        if ( ("" != this.receive_guid) &&
                this.receive_guid.toLowerCase() != vscpguid.toLowerCase()) return;

        // Nothing to do if vscpclass or vscptype is undefined
        if ((vscpclass == undefined) || (vscptype == undefined) ) return;

        // Check if this is a possible Rx-event
        if (vscpclass == this.receive_vscpclass &&
                vscptype == this.receive_vscptype ) {
            // Check data if any
            if (this.receive_data.length ) {

                // Check zone & subzone & index  -- class - VSCP_TYPE_INFORMATION_LEVEL_CHANGED
                for (i=1;i<3;i++) {
                    // Skip a don't care
                    if (( -1 == this.receive_data[i] )||(this.receive_data[i] == undefined)) continue;
                    if ((vscpdata[i] != this.receive_data[i])||(vscpdata[i] == undefined))  return;
                }
            }

            //this.sliderRemoteValue= vscpdata[0];
            this.sliderRemoteValue= parseInt(vscpdata[0], 16);

            //Send the information event bsck to button
            this.setValue(this.sliderRemoteValue);

            if (vscpws_debug) console.log("****** Data received Correctly ******");
        }

    }

    /*if (this.numMessages > 10)
    {
        this.socket_vscp.send('exit');
    }*/

}



//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic
dummy_Device_vscpws_variableButton.prototype.openConnection = function()
{
    this.socket_vscp.send("C;" + "open");
}

//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------
dummy_Device_vscpws_variableButton.prototype.closeConnection = function()
{
    this.socket_vscp.send("C;" + "close");
}

