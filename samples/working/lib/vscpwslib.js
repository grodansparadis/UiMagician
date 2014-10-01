//
// vscpwslib javascript websocket library
// Copyright (C) 2012-2014 Ake Hedman, Grodans Paradis AB
// <akhe@grodansparadis.com>
//
// Licence:     
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version
// 2 of the License, or (at your option) any later version.
// 
// This file is part of the VSCP (http://www.vscp.org) 
// 
// This file is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this file see the file COPYING.  If not, write to
// the Free Software Foundation, 59 Temple Place - Suite 330,
// Boston, MA 02111-1307, USA.
// 
// As a special exception, if other files instantiate templates or use macros
// or inline functions from this file, or you compile this file and link it
// with other works to produce a work based on this file, this file does not
// by itself cause the resulting work to be covered by the GNU General Public
// License. However the source code for this file must still be made available
// in accordance with section (3) of the GNU General Public License.
// 
// This exception does not invalidate any other reasons why a work based on
// this file might be covered by the GNU General Public License.
// 
// Alternative licenses for VSCP & Friends may be arranged by contacting 
// Grodans Paradis AB at info@grodansparadis.com, http://www.grodansparadis.com
//
// Open widget package spec. http://www.w3.org/TR/widgets/
//

// Uncomment to get debug messages
var vscpws_debug = true;


var VSCP_CLASS1_PROTOCOL=0;
var VSCP_CLASS1_ALARM=1;
var VSCP_CLASS1_SECURITY=2;
var VSCP_CLASS1_MEASUREMENT=10;
var VSCP_CLASS1_DATA=15;
var VSCP_CLASS1_INFORMATION=20;
var VSCP_CLASS1_CONTROL=30;
var VSCP_CLASS1_MULTIMEDIA=40;
var VSCP_CLASS1_AOL=50;
var VSCP_CLASS1_MEASUREMENT64=60;
var VSCP_CLASS1_MEASUREZONE=65;
var VSCP_CLASS1_SETVALUEZONE=85;
var VSCP_CLASS1_PHONE=100;
var VSCP_CLASS1_LIN=101;
var VSCP_CLASS1_DISPLAY=102;
var VSCP_CLASS1_RC5=110;
var VSCP_CLASS1_ONEWIRE=200;
var VSCP_CLASS1_X10=201;
var VSCP_CLASS1_LON=202;
var VSCP_CLASS1_EIB=203;
var VSCP_CLASS1_SNAP=204;
var VSCP_CLASS1_MUMIN=205;
var VSCP_CLASS1_LOG=509;
var VSCP_CLASS1_LAB=510;
var VSCP_CLASS1_LOCAL=511;

// Level I classes on Level II

var VSCP_CLASS2_LEVEL1_PROTOCOL= ( 512 + 0 );
var VSCP_CLASS2_LEVEL1_ALARM = ( 512 + 1 );
var VSCP_CLASS2_LEVEL1_SECURITY = ( 512 + 2 );
var VSCP_CLASS2_LEVEL1_MEASUREMENT = ( 512 + 10 );
var VSCP_CLASS2_LEVEL1_DATA = ( 512 + 15 );
var VSCP_CLASS2_LEVEL1_INFORMATION = ( 512 + 20 );
var VSCP_CLASS2_LEVEL1_CONTROL = ( 512 + 30 );
var VSCP_CLASS2_LEVEL1_MULTIMEDIA = ( 512 + 40 );
var VSCP_CLASS2_LEVEL1_AOL = ( 512 + 50 );
var VSCP_CLASS2_MEASUREMENT64 = ( 512 + 60 );
var VSCP_CLASS2_MEASUREZONE	= ( 512 + 65 );
var VSCP_CLASS2_SETVALUEZONE = ( 512 + 85 );
var VSCP_CLASS2_LEVEL1_PHONE = ( 512 + 100 );
var VSCP_CLASS2_LEVEL1_LIN = ( 512 + 101 );
var VSCP_CLASS2_LEVEL1_RC5 = ( 512 + 110 );
var VSCP_CLASS2_LEVEL1_ONEWIRE = ( 512 + 200 );
var VSCP_CLASS2_LEVEL1_X10 = ( 512 + 201 );
var VSCP_CLASS2_LEVEL1_LON = ( 512 + 202 );
var VSCP_CLASS2_LEVEL1_EIB = ( 512 + 203 );
var VSCP_CLASS2_LEVEL1_SNAP = ( 512 + 204 );
var VSCP_CLASS2_LEVEL1_MUMIN = ( 512 + 205 );
var VSCP_CLASS2_LEVEL1_LOG = ( 512 + 509 );
var VSCP_CLASS2_LEVEL1_LAB = ( 512 + 510 );
var VSCP_CLASS2_LEVEL1_LOCAL = ( 512 + 511 );

// Level II classes
var VSCP_CLASS2_PROTOCOL = ( 1024 );
var VSCP_CLASS2_CONTROL = ( 1025 );
var VSCP_CLASS2_INFORMATION = ( 1026 );
var VSCP_CLASS2_TEXT2SPEECH = ( 1028 );
var VSCP_CLASS2_CUSTOM = ( 1029 );
var VSCP_CLASS2_DISPLAY = ( 1030);
var VSCP_CLASS2_VSCPD = ( 65535 );

var VSCP_TYPE_UNDEFINED = 0;

// VSCP Protocol Functionality
var VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT = 1;
var VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE = 2;
var VSCP_TYPE_PROTOCOL_PROBE_ACK = 3;
var VSCP_TYPE_PROTOCOL_SET_NICKNAME = 6;
var VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED = 7;
var VSCP_TYPE_PROTOCOL_DROP_NICKNAME = 8;
var VSCP_TYPE_PROTOCOL_READ_REGISTER = 9;
var VSCP_TYPE_PROTOCOL_RW_RESPONSE = 10;
var VSCP_TYPE_PROTOCOL_WRITE_REGISTER = 11;
var VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER = 12;
var VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER = 13;
var VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER = 14;
var VSCP_TYPE_PROTOCOL_START_BLOCK = 15;
var VSCP_TYPE_PROTOCOL_BLOCK_DATA = 16;
var VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK = 17;
var VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK = 18;
var VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA = 19;
var VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK = 20;
var VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK = 21;
var VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE = 22;
var VSCP_TYPE_PROTOCOL_RESET_DEVICE = 23;
var VSCP_TYPE_PROTOCOL_PAGE_READ = 24;
var VSCP_TYPE_PROTOCOL_PAGE_WRITE = 25;
var VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE = 26;
var VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE = 27;
var VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE = 28;
var VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER = 29;
var VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER = 30;
var VSCP_TYPE_PROTOCOL_WHO_IS_THERE = 31;
var VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE = 32;
var VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO = 33;
var VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE = 34;
var VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF = 35;
var VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE = 36;
var VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ = 37;
var VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE = 38;
var VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE = 39;
var VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST = 40;
var VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE = 41;
var VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK = 48;
var VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK = 49;
var VSCP_TYPE_PROTOCOL_START_BLOCK_ACK = 50;
var VSCP_TYPE_PROTOCOL_START_BLOCK_NACK = 51;

// Class 1 (0x01) -- ALARM
var VSCP_TYPE_ALARM_GENERAL = 0;
var VSCP_TYPE_ALARM_WARNING = 1;
var VSCP_TYPE_ALARM_ALARM = 2;
var VSCP_TYPE_ALARM_SOUND = 3;
var VSCP_TYPE_ALARM_LIGHT = 4;
var VSCP_TYPE_ALARM_POWER = 5;
var VSCP_TYPE_ALARM_EMERGENCY_STOP = 6;
var VSCP_TYPE_ALARM_EMERGENCY_PAUSE = 7;
var VSCP_TYPE_ALARM_EMERGENCY_RESET = 8;
var VSCP_TYPE_ALARM_EMERGENCY_RESUME = 9;

// Class 2 (0x02) -- SECURITY
var VSCP_TYPE_SECURITY_GENERAL = 0;
var VSCP_TYPE_SECURITY_MOTION = 1;
var VSCP_TYPE_SECURITY_GLASS_BREAK = 2;
var VSCP_TYPE_SECURITY_BEAM_BREAK = 3;
var VSCP_TYPE_SECURITY_SENSOR_TAMPER = 4;
var VSCP_TYPE_SECURITY_SHOCK_SENSOR = 5;
var VSCP_TYPE_SECURITY_SMOKE_SENSOR = 6;
var VSCP_TYPE_SECURITY_HEAT_SENSOR = 7;
var VSCP_TYPE_SECURITY_PANIC_SWITCH = 8;
var VSCP_TYPE_SECURITY_DOOR_OPEN = 9;
var VSCP_TYPE_SECURITY_WINDOW_OPEN = 10;
var VSCP_TYPE_SECURITY_CO_SENSOR = 11;
var VSCP_TYPE_SECURITY_FROST_DETECTED = 12;
var VSCP_TYPE_SECURITY_FLAME_DETECTED = 13;
var VSCP_TYPE_SECURITY_OXYGEN_LOW = 14;
var VSCP_TYPE_SECURITY_WEIGHT_DETECTED = 15;
var VSCP_TYPE_SECURITY_WATER_DETECTED = 16;
var VSCP_TYPE_SECURITY_CONDENSATION_DETECTED = 17;
var VSCP_TYPE_SECURITY_SOUND_DETECTED = 18;
var VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL = 19;

// Class 10 (0x0a) -- MEASUREMENT
var VSCP_TYPE_MEASUREMENT_GENERAL = 0;
var VSCP_TYPE_MEASUREMENT_COUNT = 1;
var VSCP_TYPE_MEASUREMENT_LENGTH = 2;
var VSCP_TYPE_MEASUREMENT_MASS = 3;
var VSCP_TYPE_MEASUREMENT_TIME = 4;
var VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT = 5;
var VSCP_TYPE_MEASUREMENT_TEMPERATURE = 6;
var VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE = 7;
var VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT = 8;
var VSCP_TYPE_MEASUREMENT_FREQUENCY = 9;
var VSCP_TYPE_MEASUREMENT_RADIOACTIVITY = 10;	// or other random event
var VSCP_TYPE_MEASUREMENT_FORCE = 11;
var VSCP_TYPE_MEASUREMENT_PRESSURE = 12;
var VSCP_TYPE_MEASUREMENT_ENERGY = 13;
var VSCP_TYPE_MEASUREMENT_POWER = 14;
var VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE = 15;
var VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL = 16;	// Voltage
var VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE = 17;
var VSCP_TYPE_MEASUREMENT_ELECTRICAL_RECISTANCE = 18;
var VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE = 19;
var VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH = 20;
var VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX = 21;
var VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY = 22;
var VSCP_TYPE_MEASUREMENT_INDUCTANCE = 23;
var VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT = 24;
var VSCP_TYPE_MEASUREMENT_ILLUMINANCE = 25;
var VSCP_TYPE_MEASUREMENT_RADIATION_DOSE = 26;
var VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY = 27;
var VSCP_TYPE_MEASUREMENT_VOLUME = 28;
var VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY = 29;
var VSCP_TYPE_MEASUREMENT_ANGLE = 30;
var VSCP_TYPE_MEASUREMENT_POSITION = 31;
var VSCP_TYPE_MEASUREMENT_SPEED = 32;
var VSCP_TYPE_MEASUREMENT_ACCELERATION = 33;
var VSCP_TYPE_MEASUREMENT_TENSION = 34;
var VSCP_TYPE_MEASUREMENT_HUMIDITY = 35; // Damp/moist (Hygrometer reading)
var VSCP_TYPE_MEASUREMENT_FLOW = 36;
var VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE = 37;
var VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER = 38;
var VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY = 39;
var VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE = 40;
var VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE = 41;
var VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE = 42;
var VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY = 43;
var VSCP_TYPE_MEASUREMENT_LUMINANCE = 44;
var VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION = 45;
var VSCP_TYPE_MEASUREMENT_RESERVED = 46;
var VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT = 47;
var VSCP_TYPE_MEASUREMENT_DEWPOINT = 49;
var VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL = 50;
var VSCP_TYPE_MEASUREMENT_ALTITUDE = 51;
var VSCP_TYPE_MEASUREMENT_AREA = 52;
var VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY = 53;
var VSCP_TYPE_MEASUREMENT_RADIANCE = 54;
var VSCP_TYPE_MEASUREMENT_IRRADIANCE = 55;
var VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE = 56;
var VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE = 57;


// Class 15 (0x0f) -- DATA
var VSCP_TYPE_DATA_GENERAL = 0;
var VSCP_TYPE_DATA_IO = 1;
var VSCP_TYPE_DATA_AD = 2;
var VSCP_TYPE_DATA_DA = 3;
var VSCP_TYPE_DATA_RELATIVE_STRENGTH = 4;
var VSCP_TYPE_DATA_SIGNAL_LEVEL = 5;
var VSCP_TYPE_DATA_SIGNAL_QUALITY = 6;

// class 20 (0x14) -- INFORMATION
var VSCP_TYPE_INFORMATION_GENERAL = 0;
var VSCP_TYPE_INFORMATION_BUTTON = 1;
var VSCP_TYPE_INFORMATION_MOUSE = 2;
var VSCP_TYPE_INFORMATION_ON = 3;
var VSCP_TYPE_INFORMATION_OFF = 4;
var VSCP_TYPE_INFORMATION_ALIVE = 5;
var VSCP_TYPE_INFORMATION_TERMINATING = 6;
var VSCP_TYPE_INFORMATION_OPENED = 7;
var VSCP_TYPE_INFORMATION_CLOSED = 8;
var VSCP_TYPE_INFORMATION_NODE_HEARTBEAT = 9;
var VSCP_TYPE_INFORMATION_BELOW_LIMIT = 10;
var VSCP_TYPE_INFORMATION_ABOVE_LIMIT = 11;
var VSCP_TYPE_INFORMATION_PULSE = 12;
var VSCP_TYPE_INFORMATION_ERROR = 13;
var VSCP_TYPE_INFORMATION_RESUMED = 14;
var VSCP_TYPE_INFORMATION_PAUSED = 15;
var VSCP_TYPE_INFORMATION_SLEEP = 16;
var VSCP_TYPE_INFORMATION_GOOD_MORNING = 17;
var VSCP_TYPE_INFORMATION_GOOD_DAY = 18;
var VSCP_TYPE_INFORMATION_GOOD_AFTERNOON = 19;
var VSCP_TYPE_INFORMATION_GOOD_EVENING = 20;
var VSCP_TYPE_INFORMATION_GOOD_NIGHT = 21;
var VSCP_TYPE_INFORMATION_SEE_YOU_SOON = 22;
var VSCP_TYPE_INFORMATION_GOODBYE = 23;
var VSCP_TYPE_INFORMATION_STOP = 24;
var VSCP_TYPE_INFORMATION_START = 25;
var VSCP_TYPE_INFORMATION_RESET_COMPLETED = 26;
var VSCP_TYPE_INFORMATION_INTERRUPTED = 27;
var VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP = 28;
var VSCP_TYPE_INFORMATION_WOKEN_UP = 29;
var VSCP_TYPE_INFORMATION_DUSK = 30;
var VSCP_TYPE_INFORMATION_DAWN = 31;
var VSCP_TYPE_INFORMATION_ACTIVE = 32;
var VSCP_TYPE_INFORMATION_INACTIVE = 33;
var VSCP_TYPE_INFORMATION_BUSY = 34;
var VSCP_TYPE_INFORMATION_IDLE = 35;
var VSCP_TYPE_INFORMATION_STREAM_DATA = 36;
var VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY = 37;
var VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE = 38;
var VSCP_TYPE_INFORMATION_CONFIRM = 39;
var VSCP_TYPE_INFORMATION_LEVEL_CHANGED = 40;
var VSCP_TYPE_INFORMATION_WARNING = 41;
var VSCP_TYPE_INFORMATION_STATE = 42;
var VSCP_TYPE_INFORMATION_ACTION_TRIGGER = 43;
var VSCP_TYPE_INFORMATION_SUNRISE = 44;
var VSCP_TYPE_INFORMATION_SUNSET = 45;
var VSCP_TYPE_INFORMATION_START_OF_RECORD = 46;
var VSCP_TYPE_INFORMATION_END_OF_RECORD = 47;
var VSCP_TYPE_INFORMATION_PRESET_ACTIVE = 48;
var VSCP_TYPE_INFORMATION_DETECT = 49;
var VSCP_TYPE_INFORMATION_OVERFLOW = 50;
var VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED = 51

// class 30 (0x1E) -- CONTROL
var VSCP_TYPE_CONTROL_GENERAL = 0;
var VSCP_TYPE_CONTROL_MUTE = 1;
var VSCP_TYPE_CONTROL_ALL_LAMPS = 2;
var VSCP_TYPE_CONTROL_OPEN = 3;
var VSCP_TYPE_CONTROL_CLOSE = 4;
var VSCP_TYPE_CONTROL_TURNON = 5;
var VSCP_TYPE_CONTROL_TURNOFF = 6;
var VSCP_TYPE_CONTROL_START = 7;
var VSCP_TYPE_CONTROL_STOP = 8;
var VSCP_TYPE_CONTROL_RESET = 9;
var VSCP_TYPE_CONTROL_INTERRUPT = 10;
var VSCP_TYPE_CONTROL_SLEEP = 11;
var VSCP_TYPE_CONTROL_WAKEUP = 12;
var VSCP_TYPE_CONTROL_RESUME = 13;
var VSCP_TYPE_CONTROL_PAUSE = 14;
var VSCP_TYPE_CONTROL_ACTIVATE = 15;
var VSCP_TYPE_CONTROL_DEACTIVATE = 16;
var VSCP_TYPE_CONTROL_DIM_LAMPS = 20;
var VSCP_TYPE_CONTROL_CHANGE_CHANNEL = 21;
var VSCP_TYPE_CONTROL_CHANGE_LEVEL = 22;
var VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL = 23;
var VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST = 24;
var VSCP_TYPE_CONTROL_STREAM_DATA = 25;
var VSCP_TYPE_CONTROL_SYNC = 26;
var VSCP_TYPE_CONTROL_ZONED_STREAM_DATA = 27;
var VSCP_TYPE_CONTROL_SET_PRESET = 28;
var VSCP_TYPE_CONTROL_TOGGLE_STATE = 29;
var VSCP_TYPE_CONTROL_TIMED_PULE_ON = 30;
var VSCP_TYPE_CONTROL_TIMED_PULSE_OFF = 31;
var VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE = 32;
var VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL = 33

// class 40 (0x28) -- MULTIMEDIA
var VSCP_TYPE_MULTIMEDIA_GENERA = 0;
var VSCP_TYPE_MULTIMEDIA_PLAYBACK = 1;
var VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG = 2;
var VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST = 3;
var VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS = 4;
var VSCP_TYPE_MULTIMEDIA_ADJUST_TINT = 5;
var VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE = 6;
var VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS = 7;
var VSCP_TYPE_MULTIMEDIA_ADJUST_HUE = 8;
var VSCP_TYPE_MULTIMEDIA_ADJUST_BASS = 9;
var VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE = 10;
var VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME = 11;
var VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME = 12;
var VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME = 13;
var VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME = 14;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME = 15;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK = 20;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK = 21;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM = 22;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL = 23;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE = 24;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER = 25;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT = 26;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE = 27;
var VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT = 28;
var VSCP_TYPE_MULTIMEDIA_RECORD = 29;
var VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME = 30;
var VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION = 40;
var VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE = 50;
var VSCP_TYPE_MULTIMEDIA_SET_POSITION = 51;
var VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO = 52;
var VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM = 53;
var VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS = 54;
var VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM = 55;
var VSCP_TYPE_MULTIMEDIA_CONTROL = 60;
var VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE = 61;

// class 50 (0x32) -- AOL
var VSCP_TYPE_AOL_GENERAL = 0;
var VSCP_TYPE_AOL_UNPLUGGED_POWER = 1; 
var VSCP_TYPE_AOL_UNPLUGGED_LAN = 2;
var VSCP_TYPE_AOL_CHASSIS_INTRUSION = 3;
var VSCP_TYPE_AOL_PROCESSOR_REMOVAL = 4;
var VSCP_TYPE_AOL_ENVIRONMENT_ERROR = 5;
var VSCP_TYPE_AOL_HIGH_TEMPERATURE = 6;
var VSCP_TYPE_AOL_FAN_SPEED = 7;
var VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS = 8;
var VSCP_TYPE_AOL_OS_ERROR = 9;
var VSCP_TYPE_AOL_POWER_ON_ERROR = 10;
var VSCP_TYPE_AOL_SYSTEM_HUNG = 11;
var VSCP_TYPE_AOL_COMPONENT_FAILURE = 12;
var VSCP_TYPE_AOL_REBOOT_UPON_FAILURE = 13;
var VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM = 14;
var VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE = 15;
var VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE = 16;

// class 60 (0x3C) -- CLASS1.MEASUREMENT64
// Types are the same as CLASS1.MEASUREMENT=10
var VSCP_TYPE_MEASUREMENT64_GENERAL = 0;
var VSCP_TYPE_MEASUREMENT64_COUNT = 1;
var VSCP_TYPE_MEASUREMENT64_LENGTH = 2;
var VSCP_TYPE_MEASUREMENT64_MASS = 3;
var VSCP_TYPE_MEASUREMENT64_TIME = 4;
var VSCP_TYPE_MEASUREMENT64_ELECTRIC_CURRENT = 5;
var VSCP_TYPE_MEASUREMENT64_TEMPERATURE = 6;
var VSCP_TYPE_MEASUREMENT64_AMOUNT_OF_SUBSTANCE = 7;
var VSCP_TYPE_MEASUREMENT64_INTENSITY_OF_LIGHT = 8;
var VSCP_TYPE_MEASUREMENT64_FREQUENCY = 9;
var VSCP_TYPE_MEASUREMENT64_RADIOACTIVITY = 10;	// or other random event
var VSCP_TYPE_MEASUREMENT64_FORCE = 11;
var VSCP_TYPE_MEASUREMENT64_PRESSURE = 12;
var VSCP_TYPE_MEASUREMENT64_ENERGY = 13;
var VSCP_TYPE_MEASUREMENT64_POWER = 14;
var VSCP_TYPE_MEASUREMENT64_ELECTRICAL_CHARGE = 15;
var VSCP_TYPE_MEASUREMENT64_ELECTRICAL_POTENTIAL = 16;	// Voltage
var VSCP_TYPE_MEASUREMENT64_ELECTRICAL_CAPACITANCE = 17;
var VSCP_TYPE_MEASUREMENT64_ELECTRICAL_RECISTANCE = 18;
var VSCP_TYPE_MEASUREMENT64_ELECTRICAL_CONDUCTANCE = 19;
var VSCP_TYPE_MEASUREMENT64_MAGNETIC_FIELD_STRENGTH = 20;
var VSCP_TYPE_MEASUREMENT64_MAGNETIC_FLUX = 21;
var VSCP_TYPE_MEASUREMENT64_MAGNETIC_FLUX_DENSITY = 22;
var VSCP_TYPE_MEASUREMENT64_INDUCTANCE = 23;
var VSCP_TYPE_MEASUREMENT64_FLUX_OF_LIGHT = 24;
var VSCP_TYPE_MEASUREMENT64_ILLUMINANCE = 25;
var VSCP_TYPE_MEASUREMENT64_RADIATION_DOSE  = 26;
var VSCP_TYPE_MEASUREMENT64_CATALYTIC_ACITIVITY = 27;
var VSCP_TYPE_MEASUREMENT64_VOLUME = 28;
var VSCP_TYPE_MEASUREMENT64_SOUND_INTENSITY = 29;
var VSCP_TYPE_MEASUREMENT64_ANGLE = 30;
var VSCP_TYPE_MEASUREMENT64_POSITION = 31;
var VSCP_TYPE_MEASUREMENT64_SPEED = 32;
var VSCP_TYPE_MEASUREMENT64_ACCELERATION = 33;
var VSCP_TYPE_MEASUREMENT64_TENSION = 34;
var VSCP_TYPE_MEASUREMENT64_HUMIDITY = 35;	// Damp/moist (Hygrometer reading)
var VSCP_TYPE_MEASUREMENT64_FLOW = 36;
var VSCP_TYPE_MEASUREMENT64_THERMAL_RESISTANCE = 37;
var VSCP_TYPE_MEASUREMENT64_REFRACTIVE_POWER = 38;
var VSCP_TYPE_MEASUREMENT64_DYNAMIC_VISCOSITY = 39;
var VSCP_TYPE_MEASUREMENT64_SOUND_IMPEDANCE = 40;
var VSCP_TYPE_MEASUREMENT64_SOUND_RESISTANCE = 41;
var VSCP_TYPE_MEASUREMENT64_ELECTRIC_ELASTANCE = 42;
var VSCP_TYPE_MEASUREMENT64_LUMINOUS_ENERGY = 43;
var VSCP_TYPE_MEASUREMENT64_LUMINANCE = 44;
var VSCP_TYPE_MEASUREMENT64_CHEMICAL_CONCENTRATION = 45;
var VSCP_TYPE_MEASUREMENT64_RESERVED = 46;
var VSCP_TYPE_MEASUREMENT64_DOSE_EQVIVALENT = 47;
var VSCP_TYPE_MEASUREMENT64_DEWPOINT = 49;
var VSCP_TYPE_MEASUREMENT64_RELATIVE_LEVEL = 50;
var VSCP_TYPE_MEASUREMENT64_ALTITUDE = 51;
var VSCP_TYPE_MEASUREMENT64_AREA = 52;
var VSCP_TYPE_MEASUREMENT64_RADIANT_INTENSITY = 53;
var VSCP_TYPE_MEASUREMENT64_RADIANCE = 54;
var VSCP_TYPE_MEASUREMENT64_IRRADIANCE = 55;
var VSCP_TYPE_MEASUREMENT64_SPECTRAL_RADIANCE = 56;
var VSCP_TYPE_MEASUREMENT64_SPECTRAL_IRRADIANCE = 57;

// class 65 (0x41) -- CLASS1.MEASUREZONE 
// Types are the same as CLASS1.MEASUREMENT=10
var VSCP_TYPE_MEASUREZONE_GENERAL = 0;
var VSCP_TYPE_MEASUREZONE_COUNT = 1;
var VSCP_TYPE_MEASUREZONE_LENGTH = 2;
var VSCP_TYPE_MEASUREZONE_MASS = 3;
var VSCP_TYPE_MEASUREZONE_TIME = 4;
var VSCP_TYPE_MEASUREZONE_ELECTRIC_CURRENT = 5;
var VSCP_TYPE_MEASUREZONE_TEMPERATURE = 6;
var VSCP_TYPE_MEASUREZONE_AMOUNT_OF_SUBSTANCE = 7;
var VSCP_TYPE_MEASUREZONE_INTENSITY_OF_LIGHT = 8;
var VSCP_TYPE_MEASUREZONE_FREQUENCY = 9;
var VSCP_TYPE_MEASUREZONE_RADIOACTIVITY = 10;	// or other random event
var VSCP_TYPE_MEASUREZONE_FORCE = 11;
var VSCP_TYPE_MEASUREZONE_PRESSURE = 12;
var VSCP_TYPE_MEASUREZONE_ENERGY = 13;
var VSCP_TYPE_MEASUREZONE_POWER = 14;
var VSCP_TYPE_MEASUREZONE_ELECTRICAL_CHARGE = 15;
var VSCP_TYPE_MEASUREZONE_ELECTRICAL_POTENTIAL = 16;	// Voltage
var VSCP_TYPE_MEASUREZONE_ELECTRICAL_CAPACITANCE = 17;
var VSCP_TYPE_MEASUREZONE_ELECTRICAL_RECISTANCE = 18;
var VSCP_TYPE_MEASUREZONE_ELECTRICAL_CONDUCTANCE = 19;
var VSCP_TYPE_MEASUREZONE_MAGNETIC_FIELD_STRENGTH = 20;
var VSCP_TYPE_MEASUREZONE_MAGNETIC_FLUX = 21;
var VSCP_TYPE_MEASUREZONE_MAGNETIC_FLUX_DENSITY = 22;
var VSCP_TYPE_MEASUREZONE_INDUCTANCE = 23;
var VSCP_TYPE_MEASUREZONE_FLUX_OF_LIGHT = 24;
var VSCP_TYPE_MEASUREZONE_ILLUMINANCE = 25;
var VSCP_TYPE_MEASUREZONE_RADIATION_DOSE = 26;
var VSCP_TYPE_MEASUREZONE_CATALYTIC_ACITIVITY = 27;
var VSCP_TYPE_MEASUREZONE_VOLUME = 28;
var VSCP_TYPE_MEASUREZONE_SOUND_INTENSITY = 29;
var VSCP_TYPE_MEASUREZONE_ANGLE = 30;
var VSCP_TYPE_MEASUREZONE_POSITION = 31;
var VSCP_TYPE_MEASUREZONE_SPEED = 32;
var VSCP_TYPE_MEASUREZONE_ACCELERATION = 33;
var VSCP_TYPE_MEASUREZONE_TENSION = 34;
var VSCP_TYPE_MEASUREZONE_HUMIDITY = 35;	// Damp/moist (Hygrometer reading)
var VSCP_TYPE_MEASUREZONE_FLOW = 36;
var VSCP_TYPE_MEASUREZONE_THERMAL_RESISTANCE = 37;
var VSCP_TYPE_MEASUREZONE_REFRACTIVE_POWER = 38;
var VSCP_TYPE_MEASUREZONE_DYNAMIC_VISCOSITY = 39;
var VSCP_TYPE_MEASUREZONE_SOUND_IMPEDANCE = 40;
var VSCP_TYPE_MEASUREZONE_SOUND_RESISTANCE = 41;
var VSCP_TYPE_MEASUREZONE_ELECTRIC_ELASTANCE = 42;
var VSCP_TYPE_MEASUREZONE_LUMINOUS_ENERGY = 43;
var VSCP_TYPE_MEASUREZONE_LUMINANCE = 44;
var VSCP_TYPE_MEASUREZONE_CHEMICAL_CONCENTRATION = 45;
var VSCP_TYPE_MEASUREZONE_RESERVED = 46;
var VSCP_TYPE_MEASUREZONE_DOSE_EQVIVALENT = 47;
var VSCP_TYPE_MEASUREZONE_DEWPOINT = 49;
var VSCP_TYPE_MEASUREZONE_RELATIVE_LEVEL = 50;
var VSCP_TYPE_MEASUREZONE_ALTITUDE = 51;
var VSCP_TYPE_MEASUREZONE_AREA = 52;
var VSCP_TYPE_MEASUREZONE_RADIANT_INTENSITY = 53;
var VSCP_TYPE_MEASUREZONE_RADIANCE = 54;
var VSCP_TYPE_MEASUREZONE_IRRADIANCE = 55;
var VSCP_TYPE_MEASUREZONE_SPECTRAL_RADIANCE = 56;
var VSCP_TYPE_MEASUREZONE_SPECTRAL_IRRADIANCE = 57;

// class 85 (0x55) -- CLASS1.SETVALUEZONE 
// Types are the same as CLASS1.MEASUREMENT=10
var VSCP_TYPE_SETVALUEZONE_GENERAL = 0;
var VSCP_TYPE_SETVALUEZONE_COUNT = 1;
var VSCP_TYPE_SETVALUEZONE_LENGTH = 2;
var VSCP_TYPE_SETVALUEZONE_MASS = 3;
var VSCP_TYPE_SETVALUEZONE_TIME = 4;
var VSCP_TYPE_SETVALUEZONE_ELECTRIC_CURRENT = 5;
var VSCP_TYPE_SETVALUEZONE_TEMPERATURE = 6;
var VSCP_TYPE_SETVALUEZONE_AMOUNT_OF_SUBSTANCE = 7;
var VSCP_TYPE_SETVALUEZONE_INTENSITY_OF_LIGHT = 8;
var VSCP_TYPE_SETVALUEZONE_FREQUENCY = 9;
var VSCP_TYPE_SETVALUEZONE_RADIOACTIVITY = 10;	// or other random event
var VSCP_TYPE_SETVALUEZONE_FORCE = 11;
var VSCP_TYPE_SETVALUEZONE_PRESSURE = 12;
var VSCP_TYPE_SETVALUEZONE_ENERGY = 13;
var VSCP_TYPE_SETVALUEZONE_POWER = 14;
var VSCP_TYPE_SETVALUEZONE_ELECTRICAL_CHARGE = 15;
var VSCP_TYPE_SETVALUEZONE_ELECTRICAL_POTENTIAL = 16;	// Voltage
var VSCP_TYPE_SETVALUEZONE_ELECTRICAL_CAPACITANCE = 17;
var VSCP_TYPE_SETVALUEZONE_ELECTRICAL_RECISTANCE = 18;
var VSCP_TYPE_SETVALUEZONE_ELECTRICAL_CONDUCTANCE = 19;
var VSCP_TYPE_SETVALUEZONE_MAGNETIC_FIELD_STRENGTH = 20;
var VSCP_TYPE_SETVALUEZONE_MAGNETIC_FLUX = 21;
var VSCP_TYPE_SETVALUEZONE_MAGNETIC_FLUX_DENSITY = 22;
var VSCP_TYPE_SETVALUEZONE_INDUCTANCE = 23;
var VSCP_TYPE_SETVALUEZONE_FLUX_OF_LIGHT = 24;
var VSCP_TYPE_SETVALUEZONE_ILLUMINANCE = 25;
var VSCP_TYPE_SETVALUEZONE_RADIATION_DOSE = 26;
var VSCP_TYPE_SETVALUEZONE_CATALYTIC_ACITIVITY = 27;
var VSCP_TYPE_SETVALUEZONE_VOLUME = 28;
var VSCP_TYPE_SETVALUEZONE_SOUND_INTENSITY = 29;
var VSCP_TYPE_SETVALUEZONE_ANGLE = 30;
var VSCP_TYPE_SETVALUEZONE_POSITION = 31;
var VSCP_TYPE_SETVALUEZONE_SPEED = 32;
var VSCP_TYPE_SETVALUEZONE_ACCELERATION = 33;
var VSCP_TYPE_SETVALUEZONE_TENSION = 34;
var VSCP_TYPE_SETVALUEZONE_HUMIDITY = 35;	// Damp/moist (Hygrometer reading)
var VSCP_TYPE_SETVALUEZONE_FLOW = 36;
var VSCP_TYPE_SETVALUEZONE_THERMAL_RESISTANCE = 37;
var VSCP_TYPE_SETVALUEZONE_REFRACTIVE_POWER = 38;
var VSCP_TYPE_SETVALUEZONE_DYNAMIC_VISCOSITY = 39;
var VSCP_TYPE_SETVALUEZONE_SOUND_IMPEDANCE = 40;
var VSCP_TYPE_SETVALUEZONE_SOUND_RESISTANCE = 41;
var VSCP_TYPE_SETVALUEZONE_ELECTRIC_ELASTANCE = 42;
var VSCP_TYPE_SETVALUEZONE_LUMINOUS_ENERGY = 43;
var VSCP_TYPE_SETVALUEZONE_LUMINANCE = 44;
var VSCP_TYPE_SETVALUEZONE_CHEMICAL_CONCENTRATION = 45;
var VSCP_TYPE_SETVALUEZONE_RESERVED = 46;
var VSCP_TYPE_SETVALUEZONE_DOSE_EQVIVALENT = 47;
var VSCP_TYPE_SETVALUEZONE_DEWPOINT = 49;
var VSCP_TYPE_SETVALUEZONE_RELATIVE_LEVEL = 50;
var VSCP_TYPE_SETVALUEZONE_ALTITUDE = 51;
var VSCP_TYPE_SETVALUEZONE_AREA = 52;
var VSCP_TYPE_SETVALUEZONE_RADIANT_INTENSITY = 53;
var VSCP_TYPE_SETVALUEZONE_RADIANCE = 54;
var VSCP_TYPE_SETVALUEZONE_IRRADIANCE = 55;
var VSCP_TYPE_SETVALUEZONE_SPECTRAL_RADIANCE = 56;
var VSCP_TYPE_SETVALUEZONE_SPECTRAL_IRRADIANCE = 57;

// class 100 (0x64) -- PHONE
var VSCP_TYPE_PHONE_GENERAL = 0;
var VSCP_TYPE_PHONE_INCOMING_CALL = 1;
var VSCP_TYPE_PHONE_OUTGOING_CALL = 2;
var VSCP_TYPE_PHONE_RING = 3;
var VSCP_TYPE_PHONE_ANSWERE = 4;
var VSCP_TYPE_PHONE_HANGUP = 5;
var VSCP_TYPE_PHONE_GIVEUP = 6;
var VSCP_TYPE_PHONE_TRANSFER = 7;
var VSCP_TYPE_PHONE_DATABASE_INFO = 8;

// class 102 (0x66) -- DISPLAY
var VSCP_TYPE_DISPLAY_GENERAL = 0;
var VSCP_TYPE_DISPLAY_CLEAR_DISPLAY = 1;
var VSCP_TYPE_DISPLAY_POSITION_CURSOR = 2;
var VSCP_TYPE_DISPLAY_WRITE_DISPLAY = 3;
var VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER = 4;
var VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER = 5;
var VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM = 6;
var VSCP_TYPE_DISPLAY_SHOW_TEXT = 32;
var VSCP_TYPE_DISPLAY_SHOW_LED = 48;
var VSCP_TYPE_DISPLAY_SHOW_LED_COLOR = 49;

// class 110 (0x6E) -- REMOTE
var VSCP_TYPE_REMOTE_GENERAL = 0;
var VSCP_TYPE_REMOTE_RC5 = 1;
var VSCP_TYPE_REMOTE_SONY12 = 2;
var VSCP_TYPE_REMOTE_LIRC = 32;
var VSCP_TYPE_REMOTE_VSCP = 48;

// class 200 (0xC8) -- 1-WIRE
var VSCP_TYPE_1WIRE_GENERAL = 0;
var VSCP_TYPE_1WIRE_NEW_ID = 1;
var VSCP_TYPE_1WIRE_CONVERT = 2;
var VSCP_TYPE_1WIRE_READ_ROM = 3;
var VSCP_TYPE_1WIRE_MATCH_ROM = 4;
var VSCP_TYPE_1WIRE_SKIP_ROM = 5;
var VSCP_TYPE_1WIRE_SEARCH_ROM = 6;
var VSCP_TYPE_1WIRE_CONDITIONAL_SEARCH_ROM = 7;
var VSCP_TYPE_1WIRE_PROGRAM = 8;
var VSCP_TYPE_1WIRE_OVERDRIVE_SKIP_ROM = 9;
var VSCP_TYPE_1WIRE_OVERDRIVE_MATCH_ROM = 10;
var VSCP_TYPE_1WIRE_OVERDRIVE_READ_MEMORY = 11;
var VSCP_TYPE_1WIRE_OVERDRIVE_WRITE_MEMORY = 12;

// class 201 (0xC9) -- X10
var VSCP_TYPE_X10_GENERAL = 0;
var VSCP_TYPE_X10_STANDARD_MESSAGE_RECEIVE = 1;
var VSCP_TYPE_X10_EXTENDED_MESSAGE_RECEIVE = 2;
var VSCP_TYPE_X10_STANDARD_MESSAGE_SEND = 3;
var VSCP_TYPE_X10_EXTENDED_MESSAGE_SEND = 4;
var VSCP_TYPE_X10_SIMPLE_MESSAGE = 5;


// class 202 (0xCA) -- LON
var VSCP_TYPE_LON_GENERAL = 0;

// class 203 (0xCB) -- KNX/EIB
var VSCP_TYPE_EIB_GENERAL = 0;

// class 204 (0xCC) -- SNAP
var VSCP_TYPE_SNAP_GENERAL = 0;

// class 205 (0xCD) -- CBUS
var VSCP_TYPE_CBUS_GENERAL = 0;

// class 206 (0xCE) -- GPS
var VSCP_TYPE_GPS_GENERAL = 0;
var VSCP_TYPE_GPS_POSITION = 1;
var VSCP_TYPE_GPS_SATELLITES = 2;

// class 212 (0xD4) -- WIRELESS
var VSCP_TYPE_WIRELESS_GENERAL = 0;
var VSCP_TYPE_WIRELESS_GSM_CELL = 1;

// class 509 (0x1FD) -- LOG
var VSCP_TYPE_LOG_GENERAL = 0;
var VSCP_TYPE_LOG_MESSAGE = 1;
var VSCP_TYPE_LOG_START = 2;
var VSCP_TYPE_LOG_STOP = 3;
var VSCP_TYPE_LOG_LEVEL = 4;

// class 510 (0x1FE) -- LABORATORY
var VSCP_TYPE_LABORATORY_GENERAL = 0;

// class 511 (0x1FF) -- LOCAL
var VSCP_TYPE_LOCAL_GENERAL = 0;

///////////////////////////////////////////////////////////////////////////////
//				Level II
///////////////////////////////////////////////////////////////////////////////

// Level II Protocol functionality Class=1024 (0x400)
var VSCP2_TYPE_PROTOCOL_GENERAL = 0;
var VSCP2_TYPE_PROTOCOL_READ_REGISTER = 1;
var VSCP2_TYPE_PROTOCOL_WRITE_REGISTER = 2;
var VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE = 3;

// Level II Control functionality Class=1025 (0x401)
var VSCP2_TYPE_CONTROL_GENERAL = 0;

// Level II Information functionality Class=1026 (0x402)
var VSCP2_TYPE_INFORMATION_GENERAL = 0;
var VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY  = 1;

// Level II Text to speech functionality Class=1028 (0x404)
var VSCP2_TYPE_TEXT2SPEECH_GENERAL = 0;
var VSCP2_TYPE_TEXT2SPEECH_TALK = 1;

// Level II Custom functionality Class=1029 (0x405)
var VSCP2_TYPE_CUSTOM_GENERAL = 0;

// Level II Display functionality Class=1030 (0x406)
var VSCP2_TYPE_DISPLAY_GENERAL = 0;

// Level II VSCPD daemon functionality Class=65535 (0xFFFF)
var VSCP2_TYPE_VSCPD_GENERAL = 0;
var VSCP2_TYPE_VSCPD_LOOP = 1;
var VSCP2_TYPE_VSCPD_PAUSE = 3;
var VSCP2_TYPE_VSCPD_ACTIVATE = 4;
var VSCP2_TYPE_VSCPD_SECOND = 5;
var VSCP2_TYPE_VSCPD_MINUTE = 6;
var VSCP2_TYPE_VSCPD_HOUR = 7;
var VSCP2_TYPE_VSCPD_NOON = 8;
var VSCP2_TYPE_VSCPD_MIDNIGHT = 9;
var VSCP2_TYPE_VSCPD_WEEK = 11;
var VSCP2_TYPE_VSCPD_MONTH = 12;
var VSCP2_TYPE_VSCPD_QUARTER = 13;
var VSCP2_TYPE_VSCPD_YEAR = 14;
var VSCP2_TYPE_VSCPD_RANDOM_MINUTE = 15;
var VSCP2_TYPE_VSCPD_RANDOM_HOUR = 16;
var VSCP2_TYPE_VSCPD_RANDOM_DAY = 17;
var VSCP2_TYPE_VSCPD_RANDOM_WEEK = 18;
var VSCP2_TYPE_VSCPD_RANDOM_MONTH = 19;
var VSCP2_TYPE_VSCPD_RANDOM_YEAR = 20;
var VSCP2_TYPE_VSCPD_DUSK = 21;
var VSCP2_TYPE_VSCPD_DAWN = 22;
var VSCP2_TYPE_VSCPD_STARTING_UP = 23;
var VSCP2_TYPE_VSCPD_SHUTTING_DOWN = 24;
var VSCP2_TYPE_VSCPD_TIMER_STARTED = 25;
var VSCP2_TYPE_VSCPD_TIMER_PAUSED = 26;
var VSCP2_TYPE_VSCPD_TIMER_RESUMED = 27;
var VSCP2_TYPE_VSCPD_TIMER_STOPPED = 28;
var VSCP2_TYPE_VSCPD_TIMER_ELLAPSED = 29;



// How to use: https://gist.github.com/tbranyen/1049426
// Inspired by http://bit.ly/juSAWl
// Augment String.prototype to allow for easier formatting.  This implementation 
// doesn't completely destroy any existing String.prototype.format functions,
// and will stringify objects/arrays.
String.prototype.format = function(i, safe, arg) {
 
  function format() {
    var str = this, len = arguments.length+1;
 
    // For each {0} {1} {n...} replace with the argument in that position.  If 
    // the argument is an object or an array it will be stringified to JSON.
    for (i=0; i < len; arg = arguments[i++]) {
      safe = typeof arg === 'object' ? JSON.stringify(arg) : arg;
      str = str.replace(RegExp('\\{'+(i-1)+'\\}', 'g'), safe);
    }
    return str;
  }
 
  // Save a reference of what may already exist under the property native.  
  // Allows for doing something like: if("".format.native) { /* use native */ }
  format.native = String.prototype.format;
 
  // Replace the prototype property
  return format;
 
}();


// Based on code from Jonas Raoni Soares Silva
// http://jsfromhell.com/classes/binary-parser
function vscpws_encodeFloat(number) {
    var n = +number,
        status = (n !== n) || n == -Infinity || n == +Infinity ? n : 0,
        exp = 0,
        len = 281, // 2 * 127 + 1 + 23 + 3,
        bin = new Array(len),
        signal = (n = status !== 0 ? 0 : n) < 0,
        n = Math.abs(n),
        intPart = Math.floor(n),
        floatPart = n - intPart,
        i, lastBit, rounded, j, exponent;

    if (status !== 0) {
        if (n !== n) {
            return 0x7fc00000;
        }
        if (n === Infinity) {
            return 0x7f800000;
        }
        if (n === -Infinity) {
            return 0xff800000
        }
    }

    i = len;
    while (i) {
        bin[--i] = 0;
    }

    i = 129;
    while (intPart && i) {
        bin[--i] = intPart % 2;
        intPart = Math.floor(intPart / 2);
    }

    i = 128;
    while (floatPart > 0 && i) {
        (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart;
    }

    i = -1;
    while (++i < len && !bin[i]);

    if (bin[(lastBit = 22 + (i = (exp = 128 - i) >= -126 && exp <= 127 ? i + 1 : 128 - (exp = -127))) + 1]) {
        if (!(rounded = bin[lastBit])) {
            j = lastBit + 2;
            while (!rounded && j < len) {
                rounded = bin[j++];
            }
        }

        j = lastBit + 1;
        while (rounded && --j >= 0) {
            (bin[j] = !bin[j] - 0) && (rounded = 0);
        }
    }
    i = i - 2 < 0 ? -1 : i - 3;
    while(++i < len && !bin[i]);
    (exp = 128 - i) >= -126 && exp <= 127 ? ++i : exp < -126 && (i = 255, exp = -127);
    (intPart || status !== 0) && (exp = 128, i = 129, status == -Infinity ? signal = 1 : (status !== status) && (bin[i] = 1));

    n = Math.abs(exp + 127);
    exponent = 0;
    j = 0;
    while (j < 8) {
        exponent += (n % 2) << j;
        n >>= 1;
        j++;
    }

    var mantissa = 0;
    n = i + 23;
    for (; i < n; i++) {
        mantissa = (mantissa << 1) + bin[i];
    }
    return ((signal ? 0x80000000 : 0) + (exponent << 23) + mantissa) | 0;
}

///////////////////////////////////////////////////////////////////////////////
// vscpws_toFixed
//

function vscpws_toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String((Math.round(value * power) / power).toFixed(precision));
}

///////////////////////////////////////////////////////////////////////////////
// BrowserDetect
//
// Detect wich browser that is used.
//
// BrowserDetect came from http://www.quirksmode.org/js/detect.html 
//
// Example usage:
// document.getElementById("brow").textContent = " " + BrowserDetect.browser + " "
//	+ BrowserDetect.version +" " + BrowserDetect.OS +" ";
//

var vscpws_browserDetect = {
init: function() {
this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
        || this.searchVersion(navigator.appVersion)
        || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function(data) {
for (var i = 0; i < data.length; i++) {
var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
if (dataString.indexOf(data[i].subString) != - 1)
        return data[i].identity;
        }
else if (dataProp)
        return data[i].identity;
        }
},
        searchVersion: function(dataString) {
var index = dataString.indexOf(this.versionSearchString);
        if (index == - 1)
        return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
        {
        string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
                },
        {string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
                },
        {
        string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
                },
        {
        prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
                },
        {
        string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
                },
        {
        string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
                },
        {
        string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
                },
        {
        string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
                },
        {// for newer Netscapes (6+)
        string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
                },
        {
        string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
                },
        {
        string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
                },
        {// for older Netscapes (4-)
        string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
                }
],
        dataOS: [
        {
        string: navigator.platform,
                subString: "Win",
                identity: "Windows"
                },
        {
        string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
                },
        {
        string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
                },
        {
        string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
                }
]

};

vscpws_browserDetect.init();


/////////////////////////////////////////////////////////////////////////////
// vscpws_get_appropriate_ws_url
//

function vscpws_get_appropriate_ws_url(url) {
    
    var pcol;
    var u = document.URL;
    
    /*
     * We open the websocket encrypted if this page came on an
     * https:// url itself, otherwise unencrypted
     */
    
    if (u.substring(0, 5) == "https") {
        pcol = "wss://";
        u = u.substr(8);
    } 
    else {
        pcol = "ws://";
        if (u.substring(0, 4) == "http") {
            u = u.substr(7);
        }
    }

    u = u.split('/');
    return pcol + u[0];
    //return "ws://localhost:7681"
}

/////////////////////////////////////////////////////////////////////////////
// vscp_make_websocket_auth_hash
//
// This function calculate the hash a client should answer with after
// getting a servers authentication challenge.
// 
// It requires md5.js to be included.
//

function vscp_make_websocket_auth_hash( user, password, sid ){
	return hex_md5( user + ":" + password + ":" + sid ); 
};

/////////////////////////////////////////////////////////////////////////////
// vscpws_getDatacoding
//

function vscpws_getDatacoding(data) {
    return (data >> 5) & 7;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_getDatacodingUnit
//

function vscpws_getDatacodingUnit(data) {
    return (data >> 3) & 3;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_getSensorIndexFromDataCodin
//

function vscpws_getSensorIndexFromDataCoding(data) {
    return data & 7;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_measurementClass10Decode
//
// data is event data array where first databyte is datacoding
// Always return float.

function vscpws_measurementClass10Decode(data){
    
    var rval = 0.0;
    var mask = 0;
        
    switch ( vscpws_getDatacoding(data[0]) ){
        case 0: // Bits
        case 1: // Bytes
        case 3: // Integer    
            {
                for (i=1;i<data.length;i++) {
                    rval = rval << 8;
                    rval += data[i];
                }
            }
            break;

        case 2: // String
            {
                var str = new String();
                for (i=1;i<data.length;i++) {
                    str +=  String.fromCharCode(data[i]);
                }
                rval = parseFloat(str);
            }
            break;
        case 4: // Normalized integer
            {
                var exp = data[1];
                var bNegative = (data[2] & 0x80) ? true : false ;
                //if (bNegative) data[2] = (data[2] & 0x7f);
                
                for (i=2;i<data.length;i++) {
                    rval = (rval << 8);
                    mask = (mask << 8);
                    rval += data[i];
                    mask += 0xff;
                }
     
                if (bNegative) {
                
                    switch ( data.length ) {
                        case 3:
                            rval = 0xffffffffff00 + rval;
                            break;
                        case 4:
                            rval = 0xffffffff0000 + rval;
                            break;
                        case 5:
                            rval = 0xffffff000000 + rval;
                            break;
                        case 6:
                            rval = 0xffff00000000 + rval;
                            break;
                        case 7:
                            rval = 0xff0000000000 + rval;
                            break;      
                    }
                    
                    console.log("Negative value " + rval );
                    rval = ~~rval; // Fix two's complement value
                    console.log( 'negiated = ' + rval );
                }
                
                // Handle mantissa
                if ( exp & 0x80 ) {
                    exp &= 0x7f;
                    rval = rval * Math.pow(10,exp);
                }
                else { 
                    rval = rval / Math.pow(10,exp);
                }
                
            }
            break;
        case 5: // Floating point
            {
                if (5 == data.length) {
                    var sign = data[1] & 0x80;  // Negative if != 0
                    var exp = (data[1] & 0x7f) << 1 + (data[2] & 0x80) ? 1 : 0;
                    var mantissa = (data[2] & 0x7f) << 16 + data[3] << 8 + data[4];
                    // sign * 2^exponent * mantissa
                    rval = Math.pow(2,exp) * mantissa;
                    if (sign) rval = -1*rval;
                }
            }
            break;
        case 6: // Reserved
            break;
        case 7: // Reserved
            break;        
    }
    
    return rval;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_measurementClass60DecodeNumber
//
//

function vscpws_measurementClass60DecodeNumber(data) {
    if (8 == data.length) {
	
        var sign = data[0] & 0x80;  // Negative if != 0
        var exp = (data[0] & 0x7f) << 4 + (data[1] & 0xf0)>>4;
        var mantissa = (data[1] & 0x0f) << 48 +
                            data[2] << 40 +
                            data[3] << 32 + 
                            data[4] << 24 +
                            data[5] << 16 +
                            data[6] << 8 +
                            data[7];
        // sign * 2^exponent * mantissa
        rval = pow(2, exp) * mantissa;
        if (sign) rval = -1 * rval;
        
    }
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_measurementClass65DecodeNumber
//
//

function vscpws_measurementClass65DecodeNumber(data)
{
    var rval = 0;

    var exp = data[3];

    for (i = 4; i < data.length; i++) {
        rval = rval << 8;
        rval += data[i];
    }
    
    // Handle exponent 
    if (exp & 128) {
        exp &= 0x7f;
        rval = rval * pow(10, (-1 * exp))
    }
    else {
        rval = rval * pow(10, exp)
    }

    return rval;
}

// https://gist.github.com/tbranyen/1049426
// Inspired by http://bit.ly/juSAWl
// Augment String.prototype to allow for easier formatting.  This implementation 
// doesn't completely destroy any existing String.prototype.format functions,
// and will stringify objects/arrays.
String.prototype.format = function(i, safe, arg) {
 
  function format() {
    var str = this, len = arguments.length+1;
 
    // For each {0} {1} {n...} replace with the argument in that position.  If 
    // the argument is an object or an array it will be stringified to JSON.
    for (i=0; i < len; arg = arguments[i++]) {
      safe = typeof arg === 'object' ? JSON.stringify(arg) : arg;
      str = str.replace(RegExp('\\{'+(i-1)+'\\}', 'g'), safe);
    }
    return str;
  }
 
  // Save a reference of what may already exist under the property native.  
  // Allows for doing something like: if("".format.native) { /* use native */ }
  format.native = String.prototype.format;
 
  // Replace the prototype property
  return format;
 
}();

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertFahrenheitToKelvin
//

function vscpws_convertFahrenheitToKelvin(value) {
    var fTempVal = "string" == typeof value ? parseFloat(value) : value;
    var cTempVal = (fTempVal - 32) * (5 / 9) + 273.15;
    return cTempVal;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertFahrenheitToCelsius
//

function vscpws_convertFahrenheitToCelsius(value) {
    var fTempVal = "string" == typeof value ? parseFloat(value) : value;
    var cTempVal = (fTempVal - 32) * (5 / 9);
    return cTempVal;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertCelsiusToFahrenheit
//

function vscpws_convertCelsiusToFahrenheit(value) {
    var cTempVal = "string" == typeof value ? parseFloat(value) : value;
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    return fTempVal;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertKelvinToCelsius
//

function vscpws_convertKelvinToCelsius(value) {
    var kTempVal = "string" == typeof value ? parseFloat(value) : value;
    var cTempVal = kTempVal - 273.15;
    return cTempVal;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertCelsiusToKelvin
//

function vscpws_convertCelsiusToKelvin(value) {
    var kTempVal = "string" == typeof value ? parseFloat(value) : value;
    var cTempVal = kTempVal + 273.15;
    return cTempVal;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertKelvinToFahrenheit
//

function vscpws_convertKelvinToFahrenheit(value) {
    var kTempVal = "string" == typeof value ? parseFloat(value) : value;
    var cTempVal = kTempVal + 273.15;
    return vscpws_convertCelsiusToFahrenheit(cTempVal);
}


/////////////////////////////////////////////////////////////////////////////
// vscpws_convertMeterToFeet
//

function vscpws_convertMeterToFeet(value) {
    var fTempVal = "string" == typeof value ? parseFloat(value) : value;
    return fTempVal* 3.2808399;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertFeetToMeter
//

function vscpws_convertFeetToMeter(value) {
    var fTempVal = "string" == typeof value ? parseFloat(value) : value;
    return fTempVal* 0.3048;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertMeterToInch
//

function vscpws_convertMeterToInch(value) {
    var fTempVal = "string" == typeof value ? parseFloat(value) : value;
    return fTempVal* 3.2808399 * 12;
}

/////////////////////////////////////////////////////////////////////////////
// vscpws_convertInchToMeter
//

function vscpws_convertInchToMeter(value) {
    var fTempVal = "string" == typeof value ? parseFloat(value) : value;
    return fTempVal* 0.3048/12;
}


/////////////////////////////////////////////////////////////////////////////
// vscpws_units
//

var vscpws_units = [];
// Generic
vscpws_units[0] = new Array();
// Count
vscpws_units[1] = new Array();
// Length/Distance
vscpws_units[2] = new Array("Meter");
// Mass
vscpws_units[3] = new Array("Kilogram");
// Time
vscpws_units[4] = new Array("Millisecond","Seconds");
// Electrical Current
vscpws_units[5] = new Array("Ampere");
// Temperature
vscpws_units[6] = new Array("Kelvin","Celsius","Fahrenheit");
// Amount of substance
vscpws_units[7] = new Array("Mole");
// Luminous Intensity (Intensity of light)
vscpws_units[8] = new Array("Candela");
// Frequency
vscpws_units[9] = new Array("Hertz");
// Radioactivity and other random events
vscpws_units[10] = new Array("Becquerel");
// Force
vscpws_units[11] = new Array("Newton");
// Pressure
vscpws_units[12] = new Array("Pascal","Bar","Psi");
// Energy
vscpws_units[13] = new Array("Joule");
// Power
vscpws_units[14] = new Array("Watt");
// Electrical Charge
vscpws_units[15] = new Array("Coulomb");
// Electrical Potential (Voltage)
vscpws_units[16] = new Array("Volt");
// Electrical Capacitance
vscpws_units[17] = new Array("Farad");
// Electrical Resistance
vscpws_units[18] = new Array("Ohm");
// Electrical Conductance
vscpws_units[19] = new Array("Siemens");
// Magnetic Field Strength
vscpws_units[20] = new Array("Ampere meters");
// Magnetic Flux
vscpws_units[21] = new Array("Weber");
// Magnetic Flux Density
vscpws_units[22] = new Array("Tesla");
// Inductance
vscpws_units[23] = new Array("Henry");
// Luminous Flux
vscpws_units[24] = new Array("Lumen");
// Illuminance
vscpws_units[25] = new Array("Lux");
// Radiation dose
vscpws_units[26] = new Array("Gray","Sievert");
// Catalytic activity
vscpws_units[27] = new Array("Katal");
// Volume
vscpws_units[28] = new Array("Cubic meter","Liter");
// Sound intensity
vscpws_units[29] = new Array("Bel","Neper","dB");
// Angle
vscpws_units[30] = new Array("Rad","Degree","Arcminute","Arcseconds");
// Position
vscpws_units[31] = new Array("Longitude","Latitude");
// Speed
vscpws_units[32] = new Array("Meters per second");
// Acceleration
vscpws_units[33] = new Array("Meters per second/second");
// Tension
vscpws_units[34] = new Array("N/m");
// Damp/moist (Hygrometer reading)
vscpws_units[35] = new Array("%");
// Flow
vscpws_units[36] = new Array("Cubic meters/second","Liter/Second");
// Thermal resistance
vscpws_units[37] = new Array("K/W");
//  Refractive power
vscpws_units[38] = new Array("Dioptre");
// Dynamic viscosity
vscpws_units[39] = new Array("Poiseuille");
// Sound impedance
vscpws_units[40] = new Array("Rayal");
// Sound resistance
vscpws_units[41] = new Array("Acoustic ohm");
// Electric elastance
vscpws_units[42] = new Array("Darag");
// Luminous energy
vscpws_units[43] = new Array("Talbot");
// Luminance
vscpws_units[44] = new Array("Nit");
// Chemical concentration
vscpws_units[45] = new Array("Molal");
// Reserved
vscpws_units[46] = new Array("Reserved");
// Dose equivalent
vscpws_units[47] = new Array("Sievert");
// Reserved
vscpws_units[48] = new Array("Reserved");
// Dew Point
vscpws_units[49] = new Array("Levin","Celsius","Fahrenheit");
// Relative Level
vscpws_units[50] = new Array("Relative");
// Altitude
vscpws_units[51] = new Array("Meter","Feet","Inches");
// Area
vscpws_units[52] = new Array("Square meter");
// Radiant intensity
vscpws_units[53] = new Array("Watt per steradian");
// Radiance
vscpws_units[54] = new Array("Att per steradian per square metre");
// Irradiance, Exitance, Radiosity
vscpws_units[55] = new Array("Watt per square metre");
// Spectral radiance
vscpws_units[56] = new Array("Watt per steradian per square metre per nm");
// Spectral irradiance
vscpws_units[57] = new Array("Watt per square metre per nm");

/////////////////////////////////////////////////////////////////////////////
// vscpws_openSocket
//

function vscpws_openSocket(url) {
    
    socket = null;
    
    socket = new WebSocket( url ); 
 /*   
    if (vscpws_browserDetect.browser == "Firefox" && vscpws_browserDetect.version < 12) {
        socket = new MozWebSocket(vscpws_get_appropriate_ws_url()url,
                                         "very-simple-control-protocol");
    } 
    else {
        socket = new WebSocket(vscpws_get_appropriate_ws_url()url,
                                         "very-simple-control-protocol");                              
    }
 */   
    return socket;
}

/////////////////////////////////////////////////////////////////////////////
// findPosX
//
// Finds the absolute X position for an object.
//
// by Peter-Paul Koch & Alex Tingle. 
// http://www.quirksmode.org/about/copyright.html
// http://blog.firetree.net/2005/07/04/javascript-find-position/
//

function vscpws_findPosX(obj)
{
	var curleft = 0;
        if (obj.offsetParent) {
		while (1) {
			curleft += obj.offsetLeft;
        		if (!obj.offsetParent) {
				break;
			}
			obj = obj.offsetParent;
		}
	}
	else if (obj.x) {
		curleft += obj.x;
	}

	return curleft;
}

/////////////////////////////////////////////////////////////////////////////
// findPosY
//
// Finds the absolute Y position for an object.	
//
// by Peter-Paul Koch & Alex Tingle. 
// http://www.quirksmode.org/about/copyright.html
// http://blog.firetree.net/2005/07/04/javascript-find-position/
//

function vscpws_findPosY(obj)
{
	var curtop = 0;
        if (obj.offsetParent) {
		while (1) {
			curtop += obj.offsetTop;
			if (!obj.offsetParent) {
				break;
			}
			obj = obj.offsetParent;
		}
	}
	else if (obj.y) {
		curtop += obj.y;
	}
	
	return curtop;
}

/////////////////////////////////////////////////////////////////////////////
// loadScript
//
// Load a javascript from 'url'
//
// usage: 
// var myPrettyCode = function() {
// 		here, do what ever you want
// };
//
// Then you run all that :
//
// loadScript("my_lovely_script.js", myPrettyCode);
//

function vscpws_loadScript(url, callback)
{
// adding the script tag to the head as suggested before
var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        // then bind the event to the callback function 
        // there are several events for cross browser compatibility
        script.onreadystatechange = callback;
        script.onload = callback;
        // fire the loading
        head.appendChild(script);
}


/*
	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/	
var getElementsByClassName = function (className, tag, elm){
	if (document.getElementsByClassName) {
		getElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\\b" + tag + "\\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return getElementsByClassName(className, tag, elm);
};


///////////////////////////////////////////////////////////////////////////////
// vscpws_obSub
//

function vscpws_obSub(ob) {
    var r = [];
    var i = 0;
    for (var z in ob) {
        if (ob.hasOwnProperty(z)) {
            r[i++] = z;
        }
    }
    return r;
}

///////////////////////////////////////////////////////////////////////////////
// vscpws_getVarName
//

function vscpws_getVarName(variable) {
    return vscpws_obSub(window).map(function(a) {
        if (window[a] === variable) {
            return a
        }
        }).sort()[0]
}

///////////////////////////////////////////////////////////////////////////////
// vscpws_global_mouseover
//

function vscpws_global_mouseover(obj) {
    //obj.onOver();
    //alert(obj.toString());
    //alert(obj);
    obj.src = "../lib/widgets/button/presson.png";
}





//*****************************************************************************
//                                 vscpws_leddigits
//*****************************************************************************





/////////////////////////////////////////////////////////////////////////////
// vscpws_leddigits
//
// username 	- name to login with to the VSCP server
// passwordhash - Hash for login to VSCP server
// ndigits		- Number of digits
// x            - x-position for leftmost digit
// y            - y-position for leftmost digit.
// ctrlname     - name for control

function vscpws_leddigits( username, password, ndigits, x, y, ctrlname ) {

        this.count = ndigits;
        var maxvalue = Math.pow(10, count) - 1;
        this.maxvalue = maxvalue;
        this.x = x;
        this.y = y;
        this.name = ctrlname;
        // Preload redled0 image
        image_redled0 = new Image();
        image_redled0.src = "../lib/widgets/digit/redled0.png";
        // Preload redled1 image
        image_redled1 = new Image();
        image_redled1.src = "../lib/widgets/digit/redled1.png";
        // Preload redled2 image
        image_redled2 = new Image();
        image_redled2.src = "../lib/widgets/digit/redled2.png";
        // Preload redled3 image
        image_redled3 = new Image();
        image_redled3.src = "../lib/widgets/digit/redled3.png";
        // Preload redled4 image
        image_redled4 = new Image();
        image_redled4.src = "../lib/widgets/digit/redled4.png";
        // Preload redled5 image
        image_redled5 = new Image();
        image_redled5.src = "../lib/widgets/digit/redled5.png";
        // Preload redled6 image
        image_redled6 = new Image();
        image_redled6.src = "../lib/widgets/digit/redled6.png";
        // Preload redled7 image
        image_redled7 = new Image();
        image_redled7.src = "../lib/widgets/digit/redled7.png";
        // Preload redled8 image
        image_redled8 = new Image();
        image_redled8.src = "../lib/widgets/digit/redled8.png";
        // Preload redled9 image
        image_redled9 = new Image();
        image_redled9.src = "../lib/widgets/digit/redled9.png";
        // Preload redledE image
        image_redledE = new Image();
        image_redledE.src = "../lib/widgets/digit/redledE.png";
        // Preload redledall image
        image_redledall = new Image();
        image_redledall.src = "../lib/widgets/digit/redled8source.png";
        // Preload redledoff image
        image_redledoff = new Image();
        image_redledoff.src = "../lib/widgets/digit/redledoff.png";
}

///////////////////////////////////////////////////////////////////////////////
// init
//

vscpws_leddigits.prototype.init = function() {
    this.jg = new jsGraphics(this.name);
    this.jg.setPrintable(true);
    
    // All led's off
    for (i = 0; i < this.count; i++) {
        this.jg.drawImage(image_redledoff.src, this.x + 40 * i, this.y);
    }
    
    this.jg.paint();
}

///////////////////////////////////////////////////////////////////////////////
// setDigit
//

vscpws_leddigits.prototype.setDigit = function(digit, pos) {

    switch (digit) {

        case '0':
            this.jg.drawImage(image_redled0.src, this.x + 40 * pos, this.y);
            break;
            
        case '1':
            this.jg.drawImage(image_redled1.src, this.x + 40 * pos, this.y);
            break;
            
        case '2':
            this.jg.drawImage(image_redled2.src, this.x + 40 * pos, this.y);
            break;
            
        case '3':
            this.jg.drawImage(image_redled3.src, this.x + 40 * pos, this.y);
            break;
            
        case '4':
            this.jg.drawImage(image_redled4.src, this.x + 40 * pos, this.y);
            break;
            
        case '5':
            this.jg.drawImage(image_redled5.src, this.x + 40 * pos, this.y);
            break;
            
        case '6':
            this.jg.drawImage(image_redled6.src, this.x + 40 * pos, this.y);
            break;
            
        case '7':
            this.jg.drawImage(image_redled7.src, this.x + 40 * pos, this.y);
            break;
            
        case '8':
            this.jg.drawImage(image_redled8.src, this.x + 40 * pos, this.y);
            break;
            
        case '9':
            this.jg.drawImage(image_redled9.src, this.x + 40 * pos, this.y);
            break;
            
        case 'E':
            this.jg.drawImage(image_redledE.src, this.x + 40 * pos, this.y);
            break;
            
        case 'A':
            this.jg.drawImage(image_redledall.src, this.x + 40 * pos, this.y);
            break;
           
        case ' ':        
        default:
            this.jg.drawImage(image_redledoff.src, this.x + 40 * pos, this.y);
            break;
    }
    
    // Draw it
    this.jg.paint();
}

///////////////////////////////////////////////////////////////////////////////
// setValue
//

vscpws_leddigits.prototype.setValue = function(value) {

    if (value <= this.maxvalue) {
        value = value.toFixed();
        var str = value.toString(10);
        var pos = str.length - 1; // Start at end

        for (i = this.count; i > 0; i--) {
            if (pos >= 0) {
                //alert(str[pos]);
                this.setDigit( str[pos], i - 1);
            }
            else {
                this.setDigit(' ', i - 1);
            }
            pos--;
        }
    }   
    else {
        for (i = 0; i < this.count; i++) {
            this.setDigit('E', i);
        }
    }
}





//*****************************************************************************
//                                 vscpws_buttondigits
//*****************************************************************************





/////////////////////////////////////////////////////////////////////////////
// vscpws_buttondigits
//
// username 	- name to login with to the VSCP server
// passwordhash - Hash for login to VSCP server
// ndigits		- Number of digits
// x            - x-position for leftmost digit
// y            - y-position for leftmost digit.
// ctrlname     - name for control

function vscpws_buttondigits( username, passwordhash, x, y, ndigits, name) {
    
    this.ndigits = ndigits;
    var maxvalue = Math.pow(10, ndigits) - 1;
    this.maxvalue = maxvalue;
    this.x = x;
    this.y = y;
    this.name = name;
    
    // Preload digit0 image
    image_digit0 = new Image();
    image_digit0.src = "../lib/widgets/digit/0.png";
    // Preload digit1 image
    image_digit1 = new Image();
    image_digit1.src = "../lib/widgets/digit/1.png";
    // Preload digit2 image
    image_digit2 = new Image();
    image_digit2.src = "../lib/widgets/digit/2.png";
    // Preload digit3 image
    image_digit3 = new Image();
    image_digit3.src = "../lib/widgets/digit/3.png";
    // Preload digit4 image
    image_digit4 = new Image();
    image_digit4.src = "../lib/widgets/digit/4.png";
    // Preload digit5 image
    image_digit5 = new Image();
    image_digit5.src = "../lib/widgets/digit/5.png";
    // Preload digit6 image
    image_digit6 = new Image();
    image_digit6.src = "../lib/widgets/digit/6.png";
    // Preload digit7 image
    image_digit7 = new Image();
    image_digit7.src = "../lib/widgets/digit/7.png";
    // Preload digit8 image
    image_digit8 = new Image();
    image_digit8.src = "../lib/widgets/digit/8.png";
    // Preload digit9 image
    image_digit9 = new Image();
    image_digit9.src = "../lib/widgets/digit/9.png";
    // Preload numeral image
    image_numeral = new Image();
    image_numeral.src = "../lib/widgets/digit/numeral.png";
    // Preload up image
    image_up = new Image();
    image_up.src = "../lib/widgets/digit/up.png";
    // Preload down image
    image_down = new Image();
    image_down.src = "../lib/widgets/digit/down.png";
}

vscpws_buttondigits.prototype.init = function() {
    this.jg = new jsGraphics(this.name);
    this.jg.setPrintable(true);
    for (i = 0; i < this.ndigits; i++) {
        this.jg.drawImage(image_numeral, this.x + 32 * i, this.y);
    }
    this.jg.paint();
}

vscpws_buttondigits.prototype.setDigit = function(digit, pos) {

    switch (digit) {

        case '0':
            this.jg.drawImage(image_digit0.src, this.x + 32 * pos, this.y);
            break;
        
        case '1':
            this.jg.drawImage(image_digit1.src, this.x + 32 * pos, this.y);
            break;
        
        case '2':
            this.jg.drawImage(image_digit2.src, this.x + 32 * pos, this.y);
            break;
        
        case '3':
            this.jg.drawImage(image_digit3.src, this.x + 32 * pos, this.y);
            break;
        
        case '4':
            this.jg.drawImage(image_digit4.src, this.x + 32 * pos, this.y);
            break;
        
        case '5':
            this.jg.drawImage(image_digit5.src, this.x + 32 * pos, this.y);
            break;
        
        case '6':
            this.jg.drawImage(image_digit6.src, this.x + 32 * pos, this.y);
            break;
        
        case '7':
            this.jg.drawImage(image_digit7.src, this.x + 32 * pos, this.y);
            break;
        
        case '8':
            this.jg.drawImage(image_digit8.src, this.x + 32 * pos, this.y);
            break;
        
        case '9':
            this.jg.drawImage(image_digit9.src, this.x + 32 * pos, this.y);
            break;
        
        case 'E':
            this.jg.drawImage(image_up.src, this.x + 32 * pos, this.y);
            break;
        
        case 'A':
            this.jg.drawImage(image_down.src, this.x + 32 * pos, this.y);
            break;
        
        case ' ':
        default:            
            this.jg.drawImage(image_numeral.src, this.x + 32 * pos, this.y);
            break;
    }
    
    // Draw it
    this.jg.paint();
}

vscpws_buttondigits.prototype.setValue = function(value) {
  
    if (value <= this.maxvalue) {
        
        value = value.toFixed();
        var str = value.toString(10);
        var pos = str.length - 1; // Start at end
    
        for (i = this.ndigits; i > 0; i--) {
            if (pos >= 0) {
                //alert(str[i-1]);
                this.setDigit(str[pos], i - 1);
            }
            else {
                this.setDigit(' ', i - 1);
            }
            pos--;
        }
    }
    else {
        for (i = 0; i < this.ndigits; i++) {
            this.setDigit('E', i);
        }
    }
}







//*****************************************************************************
//                                 vscpws_buttondigits
//*****************************************************************************





/////////////////////////////////////////////////////////////////////////////
// buttonblack
//

function vscpws_buttonblack(username, passwordhash, x, y, handler, name) {

   this.x = x;
        this.y = y;
        this.name = name;
        this.handler = handler;
        // Preload up image
        image_up = new Image();
        image_up.src = "../lib/widgets/button/pressoff.png";
        // Preload down image
        image_down = new Image();
        image_down.src = "../lib/widgets/button/presson.png";
        this.jg = new jsGraphics(this.name);
        this.jg.setPrintable(true);
        this.jg.drawImage(image_up.src, this.x, this.y, 48, 64, this.handler);
        this.jg.paint();
        obj = getObjectClass(this);
        alert(getVarName(tre));
}

/* Returns the class name of the argument or undefined if
 it's not a valid JavaScript object.
 */
function vscpws_getObjectClass(obj) {
    if (obj && obj.constructor && obj.constructor.toString) {
    var arr = obj.constructor.toString().match(
        /function\s*(\w+)/);
        if (arr && arr.length == 2) {
            return arr[1];
        }
    }
    
    return undefined;
}

vscpws_buttonblack.prototype.onMouseOver = function() {
//alert("onOver");
this.jg.clear();
        this.jg.drawImage(image_down.src, this.x, this.y, 48, 64, this.handler);
        this.jg.paint();
}

vscpws_buttonblack.prototype.onMouseOut = function() {
//alert("onOver");
this.jg.clear();
        this.jg.drawImage(image_up.src, this.x, this.y, 48, 64, this.handler);
        this.jg.paint();
}

vscpws_buttonblack.prototype.onMouseDown = function() {
//alert("onMouseDown");
}

vscpws_buttonblack.prototype.onMouseUp = function() {
//alert("onMouseUp");
}






//*****************************************************************************
//                             vscpws_backgroundCanvas
//*****************************************************************************







///////////////////////////////////////////////////////////////////////////////
// vscpws_backgroundCanvas
//

function vscpws_backgroundCanvas(instanceName, 	// Name of canvas
                                    imgfile,	// Path to image file.
                                    x,          // Position
                                    y,          // Position
                                    width,      // Width for button
                                    height) 	// Height for button
{
    this.bLoaded = false;

	// move this to global scope
    eval(instanceName + " = this;");
        
    // remember instance name
    this.instanceName = instanceName;

	// Preload background
	this.image_background = new Image();
    this.image_background.src = imgfile;	
	
	this.canvas = document.getElementById('layerBackground');
	this.canvas.height = 670;
	this.canvas.width = 800;
	this.ctx = this.canvas.getContext("2d");

	//document.getElementById('testcanvas').appendChild(canvas);
    
    // Clear the last image, if it exists.
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    	
	
	this.image_background.onload = this.onLoad.bind(this);

}

vscpws_backgroundCanvas.prototype.onLoad = function() {
	this.bLoaded = true;
	if (vscpws_debug) console.log('Load1');
    this.ctx.drawImage(this.image_background, 0, 0);	
};





//*****************************************************************************
//                             vscpws_stateButton
//*****************************************************************************





// ----------------------------------------------------------------------------

// Daemon command to set monitored variable to true
// variable write statebutton1,,,true
// 
// Daemon command to set monitored variable to false
// variable write statebutton1,,,false



///////////////////////////////////////////////////////////////////////////////
// vscpws_stateButton
//

function vscpws_stateButton( username,        // Username for websocket serever  
                               passwordhash,  // Password hash for websocket server
                               url,           // url to VSCP websocket i/f
                               canvasName,    // Where it should be placed
                               bLocal,        // Local visual indication
                               btnType,       // Button type   
                               bNoState,      // True for nonstate button 
                               bDisabled,     // True to disable mouse clicks
                               customupsrc,   // Custom up image
                               customdownsrc) // Custom down image
{
    // First set default parameter
    this.username = username;
    this.passwordhash = passwordhash;
    this.btnType = typeof btnType !== 'undefined' ? btnType : 0;
    this.bNoState = typeof bNoState !== 'undefined' ? bNoState : false;
    this.bLocal = typeof bLocal !== 'undefined' ? bLocal : false;
    this.bDisabled = typeof bDisabled !== 'undefined' ? bDisabled : false;
    this.customupsrc = 
        (typeof customupsrc !== 'undefined') ? customupsrc : "../lib/widgets/button/pressoff.png";
    this.customdownsrc = 
        (typeof customdownsrc !== 'undefined') ? customdownsrc : "../lib/widgets/button/presson.png";
    this.bOnce = false; // Monitor variable is checked on intervals
    
    // Websocket for VSCP daemon communication
    this.socket_vscp = null;
    
    // Flag for connected or unconnected state.
    this.bConnected = false;
    
    // Set the instance name for the control
    instanceName = "vscpws_" + canvasName;
    
    // move this to global scope
    eval(instanceName + " = this;");
        
    // remember instance name
    this.instanceName = instanceName;

    // Button initial state is off	
    this.bState = false;
    
    // Events to send to turn ON
    this.tansmitt_vscpclass_on = VSCP_CLASS1_CONTROL;     // Default class is CLASS1.CONTROL
    this.tansmitt_vscptype_on = VSCP_TYPE_CONTROL_TURNON; // Default type is TurnOn
    this.tansmitt_vscptype_on = new Array(0,0,0);         // Index=0, zone=0, subzone=0
    this.tansmitt_guid_on = "-";                          // Default GUID is GUID of interface.
    
    // Events to send to turn OFF 
    this.tansmitt_vscpclass_off = VSCP_CLASS1_CONTROL;      // Default class is CLASS1.CONTROL
    this.tansmitt_vscptype_off = VSCP_TYPE_CONTROL_TURNOFF; // Default type is TurnOff
    this.tansmitt_vscptype_on = new Array(0,0,0);           // Index=0, zone=0, subzone=0
    this.tansmitt_guid_off = "-";                           // Default GUID is GUID of interface.
    
    
    // Receive events to confirm Turn ON
    this.receive_vscpclass_on = VSCP_CLASS1_INFORMATION;   // Default class is CLASS1.INFORMATION
    this.receive_vscptype_on = VSCP_TYPE_INFORMATION_ON;   // Default type is On
    this.receive_data_on = new Array(-1,0,0);              // zone=0, subzone=1
    this.receive_guid_on = "";                             // Default GUID (empty is any).
    
    // Receive events to confirm turn OFF 
    this.receive_vscpclass_off = VSCP_CLASS1_INFORMATION;  // Default class is CLASS1.CONTROL
    this.receive_vscptype_off = VSCP_TYPE_INFORMATION_OFF; // Default type is Off
    this.receive_data_off = new Array(-1,0,0);             // zone=0, subzone=1
    this.receive_guid_off = "";                            // Default GUID (empty is any).

    // Monitor variable - Should be a boolean variable
    this.monitorVariableName = "";      // Default is none
    this.monitorInterval = 1000;        // Monitor interval is each second
   
    this.canvas = document.getElementById(canvasName);
    //this.canvas.top = 1;
    //this.canvas.height = height;
    //this.canvas.width = width;
    this.ctx = this.canvas.getContext("2d");

    // Preload up-image
    this.image_up = new Image();
    switch ( this.btnType ) { 
        
        case 1:
            this.image_up.src = "../lib/widgets/button/pressoffg.png";
            break;
            
        case 2:
            this.image_up.src = "../lib/widgets/button/pressoffo.png";
            break;
        
        case 3:
            this.image_up.src = "../lib/widgets/button/jbb1.png";
            break;
            
        case 4:
            this.image_up.src = "../lib/widgets/button/jbb2.png";
            break;
        
        case 5:
            this.image_up.src = "../lib/widgets/button/jbg.png";
            break;
            
        case 6:
            this.image_up.src = "../lib/widgets/button/jbo.png";
            break; 
        
        case 7:
            this.image_up.src = "../lib/widgets/button/jbr.png";
            break;
            
        case 8:
            this.image_up.src = "../lib/widgets/button/jbw.png";
            break;
        
        case 9:
            this.image_up.src = "../lib/widgets/button/jby.png";
            break;
            
        case 10:
            this.image_up.src = "../lib/widgets/button/jellyoff.png";
            break; 
        
        case 11:
            this.image_up.src = "../lib/widgets/button/dualpushgrey.png";
            break;
            
        case 12:
            this.image_up.src = "../lib/widgets/button/klunkmirror.png";
            break; 
        
        case 13:
            this.image_up.src = "../lib/widgets/button/klunk2mirror.png";
            break;
            
        case 14:
            this.image_up.src = "../lib/widgets/button/klunk4mirror.png";
            break; 
        
        case 15:
            this.image_up.src = "../lib/widgets/button/polywhiteH.png";
            break;
            
        case 16:
            this.image_up.src = "../lib/widgets/button/polywhiteV.png";
            break;    
            
        case 17:
            this.image_up.src = "../lib/widgets/button/pressoffS.png";
            break;
            
        case 18:
            this.image_up.src = "../lib/widgets/button/pressoffSb.png";
            break;
        
        case 19:
            this.image_up.src = "../lib/widgets/button/pressoffSg.png";
            break;
            
        case 20:
            this.image_up.src = "../lib/widgets/button/pressoffSy.png";
            break; 
        
        case 21:
            this.image_up.src = "../lib/widgets/button/pushin.png";
            break;
            
        case 22:
            this.image_up.src = "../lib/widgets/button/pushinw.png";
            break; 
        
        case 23:
            this.image_up.src = "../lib/widgets/button/rockerblackleft.png";
            break;
            
        case 24:
            this.image_up.src = "../lib/widgets/button/rockerblueleft.png";
            break; 
        
        case 25:
            this.image_up.src = "../lib/widgets/button/rockergreyleft.png";
            break;
            
        case 26:
            this.image_up.src = "../lib/widgets/button/rockerredleft.png";
            break;
        
        case 27:
            this.image_up.src = "../lib/widgets/button/rockersmooth.png";
            break;
            
        case 28:
            this.image_up.src = "../lib/widgets/button/rockersmoothBB.png";
            break;
        
        case 29:
            this.image_up.src = "../lib/widgets/button/rockersmoothBBL.png";
            break;
            
        case 30:
            this.image_up.src = "../lib/widgets/button/rockersmoothBC.png";
            break;
        
        case 31:
            this.image_up.src = "../lib/widgets/button/rockersmoothBG.png";
            break;
            
        case 32:
            this.image_up.src = "../lib/widgets/button/rockersmoothBGR.png";
            break;
        
        case 33:
            this.image_up.src = "../lib/widgets/button/rockersmoothBW.png";
            break;
            
        case 34:
            this.image_up.src = "../lib/widgets/button/rockersmoothBWR.png";
            break;  
        
        case 35:
            this.image_up.src = "../lib/widgets/button/rockerwhiteleft.png";
            break;
            
        case 36:
            this.image_up.src = "../lib/widgets/button/sidb.png";
            break;
        
        case 37:
            this.image_up.src = "../lib/widgets/button/sidb.png";
            break;
            
        case 38:
            this.image_up.src = "../lib/widgets/button/sidb.png";
            break; 
        
        case 39:
            this.image_up.src = "../lib/widgets/button/solinaOff.png";
            break;
            
        case 40:
            this.image_up.src = "../lib/widgets/button/led-orange-round-button-out.png";
            break;    
            
        case 41:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break; 
        
        case 42:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
            
        case 43:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
        
        case 44:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
            
        case 45:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
        
        case 46:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
            
        case 47:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
        
        case 48:
            this.image_up.src = "../lib/widgets/button/led_circle_grey.png";
            break;
            
        case 49:
            this.image_up.src = "../lib/widgets/button/led-red-off.png";
            break;
        
        case 50:
            this.image_up.src = "../lib/widgets/button/led_circle_green.png";
            break;
            
        case 51:
            this.image_up.src = "../lib/widgets/button/led-red-off.png";
            break;  
        
        case 52:
            this.image_up.src = "../lib/widgets/button/poweroff.png";
            break;
            
        case 53:
            this.image_up.src = "../lib/widgets/button/push-button-glossy-red.png";
            break;
        
        case 54:
            this.image_up.src = "../lib/widgets/button/push-button-glossy-red.png";
            break;
            
        case 55:
            this.image_up.src = "../lib/widgets/button/push-button-yellow-glossy.png";
            break;   
        
        case 56:
            this.image_up.src = "../lib/widgets/button/light_switch_off.png";
            break; 
            
        case 57:
            this.image_up.src = "../lib/widgets/button/sw1.png";
            break;  
        
        case 58:
            this.image_up.src = "../lib/widgets/button/sw5.png";
            break;
            
        case 59:
            this.image_up.src = "../lib/widgets/button/switch1.png";
            break;  
        
        case 60:
            this.image_up.src = "../lib/widgets/button/touchoy.png";
            break; 
        
        case 61:
            this.image_up.src = "../lib/widgets/button/touchow.png";
            break; 
            
        case 62:
            this.image_up.src = "../lib/widgets/button/touchoo.png";
            break; 
        
        case 63:
            this.image_up.src = "../lib/widgets/button/btn_led_rectangular_v_black.png";
            break;
            
        case 64:
            this.image_up.src = "../lib/widgets/button/btn-led_rounded_v_black.png";
            break; 
        
        case 65:
            this.image_up.src = "../lib/widgets/button/btn-led_rounded_v_grey.png";
            break;
            
        case 66:
            this.image_up.src = "../lib/widgets/button/btn_pressdown_off.png";
            break; 
        
        case 67:
            this.image_up.src = "../lib/widgets/button/btn_pressdown2_off.png";
            break;
            
        case 68:
            this.image_up.src = "../lib/widgets/button/red-rectangle-blank-button2-off.png";
            break;
            
        case 69:
            this.image_up.src = "../lib/widgets/button/run-push-button-off.png";
            break;
            
        case 70:
            this.image_up.src = "../lib/widgets/button/btn-silver-off.png";
            break;
            
        case 71:
            this.image_up.src = "../lib/widgets/button/start.png";
            break;    
            
        case 72:
            this.image_up.src = "../lib/widgets/button/switch-knob-off.png";
            break;  
            
        case 73:
            this.image_up.src = "../lib/widgets/button/SwtchOF1.png";
            break;
            
        case 74:
            this.image_up.src = "../lib/widgets/button/system-shut-down-off.png";
            break;  
            
        case 75:
            this.image_up.src = "../lib/widgets/button/brami_Square_Black_Crystal_Button.off.png";
            break; 
            
        case 76:
            this.image_up.src = "../lib/widgets/button/btncpgreen-off.png";
            break;
            
        case 77:
            this.image_up.src = "../lib/widgets/button/btncpmag-off.png";
            break; 
            
        case 78:
            this.image_up.src = "../lib/widgets/button/button-for-numbers-off.png";
            break;
            
        case 79:
            this.image_up.src = "../lib/widgets/button/button-green-off.png";
            break; 
            
        case 80:
            this.image_up.src = "../lib/widgets/button/button-off.png";
            break;  
            
        case 81:
            this.image_up.src = "../lib/widgets/button/button-power-off.png";
            break; 
            
        case 82:
            this.image_up.src = "../lib/widgets/button/btn-grey-rounded-off.png";
            break; 
            
        case 83:
            this.image_up.src = "../lib/widgets/button/btn-grey-off.png";
            break; 
            
        case 84:
            this.image_up.src = "../lib/widgets/button/interruptor-off.png";
            break;             
            
        case 85:
            this.image_up.src = "../lib/widgets/button/knife_switch_off.png";
            break; 
            
        case 86:
            this.image_up.src = "../lib/widgets/button/off-button.png";
            break;  
            
        case 87:
            this.image_up.src = "../lib/widgets/button/btn-modern-off.png";
            break; 
            
        case 88:
            this.image_up.src = "../lib/widgets/button/btn-oldstyle-off.png";
            break;  
            
        case 89:
            this.image_up.src = "../lib/widgets/button/orange-button-off.png";
            break;       
        
        case 90:
            this.image_up.src = "../lib/widgets/light/lightbulb1_off.png";
            break; 
        
        case 91:
            this.image_up.src = "../lib/widgets/light/light_green.gif";
            break;
            
        case 92:
            this.image_up.src = "../lib/widgets/lightbulb/semi-matte-light-bulb-unlit-th.png";
            break;
        
        case 93:
            this.image_up.src = "../lib/widgets/lightbulb/lightbulb-white-th.png";
            break;
            
        case -1:    // Custom
            this.image_up.src = this.customupsrc;
            break;    
            
        default:
            this.image_up.src = "../lib/widgets/button/pressoff.png";
            break;
    };

    // Preload down-image
    this.image_down = new Image();
    switch ( this.btnType ) {  
        case 1:
            this.image_down.src = "../lib/widgets/button/pressong.png";
            break;
            
        case 2:
            this.image_down.src = "../lib/widgets/button/pressono.png";
            break;
            
        case 3:
            this.image_down.src = "../lib/widgets/button/jbb1o.png";
            break;
            
        case 4:
            this.image_down.src = "../lib/widgets/button/jbb2o.png";
            break;
        
        case 5:
            this.image_down.src = "../lib/widgets/button/jbgo.png";
            break;
            
        case 6:
            this.image_down.src = "../lib/widgets/button/jboo.png";
            break; 
        
        case 7:
            this.image_down.src = "../lib/widgets/button/jbro.png";
            break;
            
        case 8:
            this.image_down.src = "../lib/widgets/button/jbwo.png";
            break;  
        
        case 9:
            this.image_down.src = "../lib/widgets/button/jbyo.png";
            break;
            
        case 10:
            this.image_down.src = "../lib/widgets/button/jellyon.png";
            break;  
        
        case 11:
            this.image_down.src = "../lib/widgets/button/dualpushgreymirror.png";
            break;
            
        case 12:
            this.image_down.src = "../lib/widgets/button/klunk.png";
            break; 
        
        case 13:
            this.image_down.src = "../lib/widgets/button/klunk2.png";
            break;
            
        case 14:
            this.image_down.src = "../lib/widgets/button/klunk4.png";
            break; 
        
        case 15:
            this.image_down.src = "../lib/widgets/button/polyblue.png";
            break;
            
        case 16:
            this.image_down.src = "../lib/widgets/button/polyredV.png";
            break;    
            
        case 17:
            this.image_down.src = "../lib/widgets/button/pressonS.png";
            break;
            
        case 18:
            this.image_down.src = "../lib/widgets/button/pressonSb.png";
            break;
        
        case 19:
            this.image_down.src = "../lib/widgets/button/pressonSg.png";
            break;
            
        case 20:
            this.image_down.src = "../lib/widgets/button/pressonSy.png";
            break; 
        
        case 21:
            this.image_down.src = "../lib/widgets/button/pushout.png";
            break;
            
        case 22:
            this.image_down.src = "../lib/widgets/button/pushoutw.png";
            break;  
        
        case 23:
            this.image_down.src = "../lib/widgets/button/rockerblack.png";
            break;
            
        case 24:
            this.image_down.src = "../lib/widgets/button/rockerblue.png";
            break; 
        
        case 25:
            this.image_down.src = "../lib/widgets/button/rockergrey.png";
            break;
            
        case 26:
            this.image_down.src = "../lib/widgets/button/rockerred.png";
            break; 
        
        case 27:
            this.image_down.src = "../lib/widgets/button/rockersmoothd.png";
            break;
            
        case 28:
            this.image_down.src = "../lib/widgets/button/rockersmoothBBd.png";
            break;
        
        case 29:
            this.image_down.src = "../lib/widgets/button/rockersmoothBBLd.png";
            break;
            
        case 30:
            this.image_down.src = "../lib/widgets/button/rockersmoothBCd.png";
            break;
        
        case 31:
            this.image_down.src = "../lib/widgets/button/rockersmoothBGd.png";
            break;
            
        case 32:
            this.image_down.src = "../lib/widgets/button/rockersmoothBGRd.png";
            break;
        
        case 33:
            this.image_down.src = "../lib/widgets/button/rockersmoothBWd.png";
            break;
            
        case 34:
            this.image_down.src = "../lib/widgets/button/rockersmoothBWRd.png";
            break; 
        
        case 35:
            this.image_down.src = "../lib/widgets/button/rockerwhite.png";
            break;
            
        case 36:
            this.image_down.src = "../lib/widgets/button/sidbon.png";
            break;
        
        case 37:
            this.image_down.src = "../lib/widgets/button/sidbongreen.png";
            break;
            
        case 38:
            this.image_down.src = "../lib/widgets/button/sidbonblue.png";
            break;  
        
        case 39:
            this.image_down.src = "../lib/widgets/button/solinaOn.png";
            break;
            
        case 40:
            this.image_down.src = "../lib/widgets/button/led-orange-round-button-in.png";
            break;
            
        case 41:
            this.image_down.src = "../lib/widgets/button/led_circle_red.png";
            break; 
        
        case 42:
            this.image_down.src = "../lib/widgets/button/led_circle_yellow_.png";
            break;
            
        case 43:
            this.image_down.src = "../lib/widgets/button/led-green.png";
            break;
        
        case 44:
            this.image_down.src = "../lib/widgets/button/led-green-button2.png";
            break;
            
        case 45:
            this.image_down.src = "../lib/widgets/button/led_circle_green.png";
            break;
        
        case 46:
            this.image_down.src = "../lib/widgets/button/led_circle_orange.png";
            break;
            
        case 47:
            this.image_down.src = "../lib/widgets/button/led_circle_purple.png";
            break;
        
        case 48:
            this.image_down.src = "../lib/widgets/button/led_circle_blue.png";
            break;
            
        case 49:
            this.image_down.src = "../lib/widgets/button/led-red-on.png";
            break;
        
        case 50:
            this.image_down.src = "../lib/widgets/button/led-green.png";
            break;
            
        case 51:
            this.image_down.src = "../lib/widgets/button/led_circle_green.png";
            break;
            
        case 52:
            this.image_down.src = "../lib/widgets/button/poweron.png";
            break; 
        
        case 53:
            this.image_down.src = "../lib/widgets/button/push-button-light-blue.png";
            break;
            
        case 54:
            this.image_down.src = "../lib/widgets/button/push-button-yellow-glossy.png";
            break;
        
        case 55:
            this.image_down.src = "../lib/widgets/button/push-button-light-blue.png";
            break;
            
        case 56:
            this.image_down.src = "../lib/widgets/button/light_switch_on.png";
            break;  
        
        case 57:
            this.image_down.src = "../lib/widgets/button/sw2.png";
            break; 
            
        case 58:
            this.image_down.src = "../lib/widgets/button/sw3.png";
            break; 
        
        case 59:
            this.image_down.src = "../lib/widgets/button/switch3.png";
            break; 
            
        case 60:
            this.image_down.src = "../lib/widgets/button/touchy.png";
            break;   
        
        case 61:
            this.image_down.src = "../lib/widgets/button/touchw.png";
            break;
            
        case 62:
            this.image_down.src = "../lib/widgets/button/toucho.png";
            break;
        
        case 63:
            this.image_down.src = "../lib/widgets/button/btn_led_rectangular_vh_black.png";
            break; 
            
        case 64:
            this.image_down.src = "../lib/widgets/button/btn-led_rounded_vh_black.png";
            break;  
        
        case 65:
            this.image_down.src = "../lib/widgets/button/btn-led_rounded_vh_grey.png";
            break; 
            
        case 66:
            this.image_down.src = "../lib/widgets/button/btn_pressdown_on.png";
            break; 
        
        case 67:
            this.image_down.src = "../lib/widgets/button/btn_pressdown2_on.png";
            break;
            
        case 68:
            this.image_down.src = "../lib/widgets/button/red-rectangle-blank-button-on.png";
            break;
            
        case 69:
            this.image_down.src = "../lib/widgets/button/run-push-button-on.png";
            break;
            
        case 70:
            this.image_down.src = "../lib/widgets/button/btn-silver-on.png";
            break;
            
        case 71:
            this.image_down.src = "../lib/widgets/button/stop.png";
            break;
            
        case 72:
            this.image_down.src = "../lib/widgets/button/switch-knob-on.png";
            break;
            
        case 73:
            this.image_down.src = "../lib/widgets/button/SwtchON1.png";
            break; 
               
        case 74:
            this.image_down.src = "../lib/widgets/button/system-shut-down-on.png";
            break; 
            
        case 75:
            this.image_down.src = "../lib/widgets/button/brami_Square_Black_Crystal_Button.on.png";
            break; 
            
        case 76:
            this.image_down.src = "../lib/widgets/button/btncpgreen-on.png";
            break;
            
        case 77:
            this.image_down.src = "../lib/widgets/button/btncpmag-on.png";
            break;  
            
        case 78:
            this.image_down.src = "../lib/widgets/button/button-for-numbers-on.png";
            break;
            
        case 79:
            this.image_down.src = "../lib/widgets/button/button-green-on.png";
            break; 
            
        case 80:
            this.image_down.src = "../lib/widgets/button/button-on.png";
            break; 
            
        case 81:
            this.image_down.src = "../lib/widgets/button/button-power-on.png";
            break; 
            
        case 82:
            this.image_down.src = "../lib/widgets/button/btn-grey-rounded-on.png";
            break; 
            
        case 83:
            this.image_down.src = "../lib/widgets/button/btn-grey-on.png";
            break;     
            
        case 84:
            this.image_down.src = "../lib/widgets/button/interruptor-on.png";
            break;
            
        case 85:
            this.image_down.src = "../lib/widgets/button/knife_switch_on.png";
            break;  
            
        case 86:
            this.image_down.src = "../lib/widgets/button/on-button.png";
            break; 
            
        case 87:
            this.image_down.src = "../lib/widgets/button/btn-modern-on.png";
            break;  
            
        case 88:
            this.image_down.src = "../lib/widgets/button/btn-oldstyle-on.png";
            break;
            
        case 89:
            this.image_down.src = "../lib/widgets/button/orange-button-on.png";
            break; 
        
        case 90:
            this.image_down.src = "../lib/widgets/light/lightbulb1_on.png";
            break;
            
        case 91:
            this.image_down.src = "../lib/widgets/light/light_red.gif";
            break; 
        
        case 92:
            this.image_down.src = "../lib/widgets/lightbulb/semi-matte-light-bulb-lit-th.png";
            break; 
            
        case 93:
            this.image_down.src = "../lib/widgets/lightbulb/lightbulb-th.png";
            break;     
            
        case -1:    // Custom
            this.image_down.src = this.customdownsrc;
            break;    
        
        default:
            this.image_down.src = "../lib/widgets/button/presson.png";
            break;
    };
    
    // Open the socket
    this.socket_vscp = new WebSocket( url );    
    if (null==this.socket_vscp ) alert("Could not open websocket to VSCP server!");
    
    //setInterval(this.draw(this), 2000);
    
    // Bind events	
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);	
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);
    
    this.canvas.onmouseover = this.onMouseOver.bind(this);
    this.canvas.onmouseout = this.onMouseOut.bind(this);
    this.canvas.onmousedown = this.onMouseDown.bind(this);
    this.canvas.onmouseup = this.onMouseUp.bind(this);
    
    this.image_up.onload = this.onImageLoad.bind(this);

    // Set default events
    this.setOnTransmittEvent();
    this.setOffTransmittEvent();
   
    //retrieve instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
       return this.getInstanceName();
    }
    
}

//-----------------------------------------------------------------------------
// setOnTransmittEvent
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOnTransmittEvent = function(vscpclass,
                                                                vscptype,
                                                                data,        
                                                                guid ) 
{
    var dataArray = new Array(0,0,0); // index=0, zone=0, subzone=0
    
    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : 30;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : 5;
    data = typeof data !== 'undefined' ? data : dataArray;
    guid = typeof guid !== 'undefined' ? guid : "-";
    
    
    this.tansmitt_vscpclass_on = vscpclass;
    this.tansmitt_vscptype_on = vscptype;
    this.tansmitt_data_on = data;
    this.tansmitt_guid_on = guid;
}

//-----------------------------------------------------------------------------
// setOnTransmittZone
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOnTransmittZone = function(index,zone,subzone)
{
    this.tansmitt_data_on[0] = typeof index !== 'undefined' ? index : 0;
    this.tansmitt_data_on[1] = typeof zone !== 'undefined' ? zone : 0;
    this.tansmitt_data_on[2] = typeof subzone !== 'undefined' ? subzone : 0;
}

//-----------------------------------------------------------------------------
// setOffTransmittEvent
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOffTransmittEvent = function(vscpclass,
                                                                vscptype,
                                                                data,        
                                                                guid) 
{
    var dataArray = new Array(0,0,0); // index=0, zone=0, subzone=0
    
    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : 30;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : 6;
    data = typeof data !== 'undefined' ? data : dataArray;
    guid = typeof guid !== 'undefined' ? guid : "-";
    
    this.tansmitt_vscpclass_off = vscpclass;
    this.tansmitt_vscptype_off = vscptype;
    this.tansmitt_data_off = data;
    this.tansmitt_guid_off = guid;
}

//-----------------------------------------------------------------------------
// setOffTransmittZone 
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOffTransmittZone = function(index,zone,subzone)
{
    this.tansmitt_data_off[0] = typeof index !== 'undefined' ? index : 0;
    this.tansmitt_data_off[1] = typeof zone !== 'undefined' ? zone : 0;
    this.tansmitt_data_off[2] = typeof subzone !== 'undefined' ? subzone : 0;
}

//-----------------------------------------------------------------------------
// setOnReceiveEvent
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOnReceiveEvent = function(vscpclass,
                                                                vscptype,
                                                                data,        
                                                                guid ) 
{
    var dataArray = new Array(-1,0,0); // index=don't care, zone=0, subzone=0
    //
    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : 30;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : 5;
    data = typeof data !== 'undefined' ? data : dataArray;
    guid = typeof guid !== 'undefined' ? guid : "";  // GUID dont'care
    
    this.receive_vscpclass_on = vscpclass;
    this.receive_vscptype_on = vscptype;
    this.receive_guid_on = guid;
    
    // Set filter
    this.setFilter();
}

//-----------------------------------------------------------------------------
// setOnReceiveZone
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOnReceiveZone = function(index,zone,subzone)
{
    this.receive_data_on[0] = typeof index !== 'undefined' ? index : 0;
    this.receive_data_on[1] = typeof zone !== 'undefined' ? zone : 0;
    this.receive_data_on[2] = typeof subzone !== 'undefined' ? subzone : 0;
}

//-----------------------------------------------------------------------------
// setOffReceiveEvent
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOffReceiveEvent = function(vscpclass,
                                                                vscptype,
                                                                data,
                                                                guid ) 
{
    var dataArray = new Array(-1,0,0); // index=don't care, zone=0, subzone=0
    //
    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : 30;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : 5;
    data = typeof data !== 'undefined' ? data : dataArray;
    guid = typeof guid !== 'undefined' ? guid : "";  // GUID dont'care
    
    this.receive_vscpclass_off = vscpclass;
    this.receive_vscptype_off = vscptype;
    this.receive_guid_off = guid;
    
    // Set filter
    this.setFilter();
}

//-----------------------------------------------------------------------------
// setOffReceiveZone
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setOffReceiveZone = function(index,zone,subzone)
{
    this.receive_data_off[0] = typeof index !== 'undefined' ? index : 0;
    this.receive_data_off[1] = typeof zone !== 'undefined' ? zone : 0;
    this.receive_data_off[2] = typeof subzone !== 'undefined' ? subzone : 0;
}


//-----------------------------------------------------------------------------
// setFilter
//-----------------------------------------------------------------------------
vscpws_stateButton.prototype.setFilter = function()
{
    var cmd;
    
    var filter_class = 0;
    var filter_type = 0;
    var filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    // Zero for a mask is don't care        
    var mask_class = 0;
    var mask_type = 0;
    var mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    // 0 0 = mask=1 filter=0
    // 0 1 = mask=0 filter=x
    // 1 0 = mask=0 filter=x
    // 1 1 = mask=1 filter=1
    
    // If any of the classes are don't care mask should also be don't care
    if ( (-1 == this.receive_vscpclass_off) || (-1 == this.receive_vscpclass_on) ) {
        mask_class = 0; // Don't care
    }
    else {
        mask_class = ~(this.receive_vscpclass_off ^ this.receive_vscpclass_on);
    }
    
    filter_class = (this.receive_vscpclass_off & this.receive_vscpclass_on);
    
    // If any of the types are don't care mask should also be don't care
    if ( (-1 == this.receive_vscptype_off) || (-1 == this.receive_vscptype_on) ) {
        mask_type = 0; // Don't care
    }
    else {
        mask_type = ~(this.receive_vscptype_off ^ this.receive_vscptype_on);
    }
    
    filter_type = (this.receive_vscptype_off & this.receive_vscptype_on);
    
    if ( ("" == this.receive_guid_off) || ("" == this.receive_guid_on) ) {
        mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);     // Don't care
        filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);   // Don't care
    }
    else {
        guid_on = this.receive_guid_on.split(":");
        guid_off = this.receive_guid_off.split(":");
        for ( i=0; i<16; i++ ) {
            mask_guid[i] = ~(this.receive_guid_off[i] ^ this.receive_guid_on[i]);
            filter_guid[i] = (this.receive_guid_off[i] & this.receive_guid_on[i]);
        }
    }
        
    // Send set filter command. Format is
    // “C;SETFILTER;filter-priority,filter-class,filter-type, 
    //    filter-GUID;mask-priority,mask-class,mask-type,mask-GUID�?
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
}

//-----------------------------------------------------------------------------
// setMonitorVariable
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setMonitorVariable = function(name,interval, bOnce) 
{
    if ( ( "" == name ) && ( typeof interval !== 'undefined' ) ) {
        clearInterval( this.variableTimer );
    }
    else {
        // First set default parameter
        interval = typeof interval !== 'undefined' ? interval : 1000;
        this.bOnce = typeof bOnce !== 'undefined' ? bOnce : false;
        this.monitorVariableName = name;
        this.monitorInterval = interval;
    
        var t = this;
        this.variableTimer = setInterval(function(){t.time4VariableRead(t.monitorVariableName,t.socket_vscp);}, interval);
    }
}

//-----------------------------------------------------------------------------
// draw
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.draw = function() 
{
    //if (vscpws_debug) console.log("draw value=" + this.bState);
    
    // Clear the last image, if it exists.
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    if (this.bState) {
        this.ctx.drawImage(this.image_down, 0, 0, this.canvas.width, this.canvas.height);
    }
    else {
        this.ctx.drawImage(this.image_up, 0, 0, this.canvas.width, this.canvas.height);
    }
    
    // If we are unconnected we draw an X over the picture
    // to show that
    if ( !this.bConnected ) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 1;
        this.ctx.strokeStyle="#FF0000";
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.moveTo(0, this.canvas.height);
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.stroke();
    }
};

//-----------------------------------------------------------------------------
// setValue
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.setValue = function(value, bUpdate) 
{
    var cmd="E;0,"; // Event + priority
    
    // First set default parameter
    bUpdate = typeof bUpdate !== 'undefined' ? bUpdate : true;
    
    //if (vscpws_debug) console.log('setValue -' + this.instanceName);

    if (value) {
        
        if (vscpws_debug) console.log("True");
        
        // Send Turn On Event
        if (this.bConnected && (-1 != this.tansmitt_vscpclass_on ) ) {
            cmd += this.tansmitt_vscpclass_on.toString() + ",";
            cmd += this.tansmitt_vscptype_on.toString() + ",";
            cmd += "0,0,"; // obid and timestamp
            if ("" == this.tansmitt_guid_on) {
                cmd += "-"; // Use daemon interface GUID
            }
            else {
                cmd += this.tansmitt_guid_on.toString();
            }
            cmd += ",";
            for (i=0;i<this.tansmitt_data_on.length;i++) {
                    cmd += this.tansmitt_data_on[i].toString() + ",";
                    if (i<this.tansmitt_data_on.length-1) cmd += ",";   // No comma for last
            }
            
            if (vscpws_debug) console.log(cmd);
            this.socket_vscp.send(cmd);
            
            if ("" != this.monitorVariableName) {
                cmd = "C;WRITEVAR;" + this.monitorVariableName + ";true";
                this.socket_vscp.send(cmd);
            }
        }
        
        if (this.bLocal) this.bState = true;
    }
    else {
        
        if (vscpws_debug) console.log("False");
        
        // Send Turn Off Event
        if (this.bConnected && (-1 != this.tansmitt_vscpclass_off)) {
            cmd += this.tansmitt_vscpclass_off.toString() + ",";
            cmd += this.tansmitt_vscptype_off.toString() + ",";
            cmd += "0,0,"; // obid and timestamp
            if ("" == this.tansmitt_guid_off) {
                cmd += "-"; // Use daemon interface GUID
            }
            else {
                cmd += this.tansmitt_guid_off.toString();
            }
            cmd += ",";
            for (i=0;i<this.tansmitt_data_off.length;i++) {
                    cmd += this.tansmitt_data_off[i].toString() + ",";
                    if (i<this.tansmitt_data_off.length-1) cmd += ",";   // No comma for last
            }
            
            if (vscpws_debug) console.log(cmd);
            this.socket_vscp.send(cmd);
            
            if ("" != this.monitorVariableName) {
                cmd = "C;WRITEVAR;" + this.monitorVariableName + ";false";
                this.socket_vscp.send(cmd);
            }
        }
        
        if (this.bLocal) this.bState = false;
    }

    // Draw the state
    if (bUpdate) this.draw();
};

//-----------------------------------------------------------------------------
// onImageLoad
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onImageLoad = function(me) 
{
    this.draw();
};

//-----------------------------------------------------------------------------
// onMouseOver
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onMouseOver = function() 
{
   //if (vscpws_debug) console.log("Over");
};

//-----------------------------------------------------------------------------
// onMouseOut
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onMouseOut = function() 
{
   //if (vscpws_debug) console.log("Out");
};

//-----------------------------------------------------------------------------
// onMouseDown
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onMouseDown = function() 
{
    // If interaction clicks are disabled don't do anything.
    if (this.bDisabled) return;
    
    if (this.bConnected) {
        if (this.bNoState ) {
            this.setValue(true);
        }
    }
};

//-----------------------------------------------------------------------------
// onMouseUp
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onMouseUp = function() 
{
    // If interaction clicks are disabled don't do anything.
    if (this.bDisabled) return;
    
    if (this.bConnected && !this.bNoState ) {
        if ( this.bState ) {
            this.setValue(false);
        }
        else {
            this.setValue(true);
        }
    }
    else if (this.bConnected && this.bNoState ) {
        this.setValue(false);
    }
};

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onVSCPOpen = function() 
{
    //if (vscpws_debug) console.log('Open VSCP websocket');
    //this.bConnected = true;
    //this.socket_vscp.send("C;" + "open");
   
    // Draw the state
    this.draw();
    
    // Set filter
    this.setFilter();
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

vscpws_stateButton.prototype.onVSCPClose = function() 
{
    //if (vscpws_debug) console.log('Close VSCP websocket');
    this.bConnected = false;
   
    // Draw the state
    this.draw();
};


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP websocket incoming message/event.	
vscpws_stateButton.prototype.onVSCPMessage = function(msg) 
{	 
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + " " + msg.data);
	
    msgitems = msg.data.split(';');
    
				
    if ("+" == msgitems[0]){        // check for positive reply
    
        if (vscpws_debug) console.log("Positive reply "+msg.data);
        
        respone = msgitems[0].split(";");
        
        if ( "AUTH0" == msgitems[1] ) {
            var msg = "C;AUTH;" + this.username + ";" + vscp_make_websocket_auth_hash( this.username, this.passwordhash, msgitems[2] );
			this.socket_vscp.send(msg);
        }
        else if ( "AUTH1" == msgitems[1] ) {
        
            // We are authenticated and ready to go to work         
            this.socket_vscp.send("C;" + "OPEN");
   
            // Draw the state
            this.draw();
    
            // Set filter
            this.setFilter();
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;
            // Draw the state
            this.draw();
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
        else if ("READVAR" == msgitems[1] && (2 == msgitems[2])){
            if ( ("true" == msgitems[3].toLowerCase()) && 
                    (false == this.bState )) {
                // We have a match for ON
                this.bState = true;
                this.draw();
            }
            else if ( ("false" == msgitems[3].toLowerCase()) && 
                    (true == this.bState )) {
                // We have a match for ON
                this.bState = false;
                this.draw();
            }
            if ( this.bOnce && ( typeof interval !== 'undefined' ) ) {
                clearInterval( this.variableTimer );
                this.bOnce = false;
            }
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
    }
    else if ("E" == msgitems[0]){   // Check for event
        
        var offset = 0; // used for Level I events over Level II
        
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
                    
        //if (vscpws_debug) console.log("CLASS = " + vscpclass + " TYPE = " + vscptype + "\n " + msg.data);
        if (vscpws_debug) console.log("CLASS = " + vscpclass + " Trigg on " + this.receive_vscpclass_on );
        if (vscpws_debug) console.log(" TYPE = " + vscptype + " Trigg on " + this.receive_vscptype_on );

        // Nothing to do if vscpclass or vscptype is undefined
        if ((vscpclass == undefined) || (vscptype == undefined) ) return;

        // Check if this is a possible ON-event
        if (vscpclass == this.receive_vscpclass_on && 
                vscptype == this.receive_vscptype_on ) {

            // Check data if any
            if (this.receive_data_on.length ) {
                for (i=0;i<this.receive_data_on.length;i++) {
                    // Skip a don't care
                    if ( -1 == this.receive_data_on[i] ) continue;
                    if ( (vscpdata[i] == undefined) || 
                           (vscpdata[i] != this.receive_data_on[i]) ) return;
                }
            }

            // Check GUID
            if ( ("" != this.receive_guid_on) && 
                    this.receive_guid_on.toLowerCase() != guid.toLowerCase()) return;
            
            // We have a match for ON
            this.bState = true;
            this.draw();
            
            if (vscpws_debug) console.log("****** Turned ON ******");
        }
        
        // Check if this is a possible OFF-event
        if (vscpclass == this.receive_vscpclass_off && 
                vscptype == this.receive_vscptype_off ) {
            
            // Check data if any
            if (this.receive_data_off.length ) {
                for (i=0;i<this.receive_data_off.length;i++) {
                    // Skip a don't care
                    if ( -1 == this.receive_data_off[i] ) continue;
                    if ( (vscpdata[i] == undefined) || 
                           (vscpdata[i] != this.receive_data_off[i]) ) return;
                }
            }
                 
            // Check GUID
            if (("" != this.receive_guid_off) && 
                    this.receive_guid_off.toLowerCase() != guid.toLowerCase()) return;
                      
            // We have a match for OFF
            this.bState = false;
            this.draw();
            
            if (vscpws_debug) console.log("****** Turned OFF ******");
        }

    }
}



//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic	
vscpws_stateButton.prototype.openConnection = function() 
{
	this.socket_vscp.send("C;" + "open");
}
    
//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------    
vscpws_stateButton.prototype.closeConnection = function() 
{
	this.socket_vscp.send("C;" + "close");
}

//-----------------------------------------------------------------------------
// time4VariableRead
//-----------------------------------------------------------------------------    
vscpws_stateButton.prototype.time4VariableRead = function(m,s) 
{
    var cmd;
    if (vscpws_debug) console.log("time4VariableRead");
    cmd = "C;READVAR;" + m;
	s.send(cmd);
}










// ----------------------------------------------------------------------------









///////////////////////////////////////////////////////////////////////////////
// vscpws_simpleTextEvent
//

function vscpws_simpleTextEvent( username,           // Username for websocket serever  
                                    passwordhash,    // Password hash for websocket
                                    serverurl,       // url to VSCP websocket i/f
                                    id,              // Where it should be placed
                                    vscpclass,       // Event class 10/60/65/15
                                    vscptype,        // Evet type
                                    codingIndex,     // Datacoding index
                                    decimals,        // Number of decimals
                                    formatstr,       // A value format string
                                    guid,            // GUID we are interested in
                                    fncallback )     // If set function to call
                                                     // when data arraives
{
    // First set default parameter
    this.username = username;
    this.passwordhash = passwordhash;
    this.elementId = id;
    this.vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_MEASUREMENT;            // Meaurement
    this.vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_MEASUREMENT_TEMPERATURE;     // Temperature
    this.formatstr = typeof formatstr !== 'undefined' ? formatstr : "{0}";
    this.guid = typeof guid !== 'undefined' ? guid : "";
    this.codingIndex = typeof codingIndex !== 'undefined' ? codingIndex : 0;
    this.decimals = typeof decimals !== 'undefined' ? decimals : 2;
    this.fncallback = (fncallback && typeof(fncallback) === "function") ? fncallback : null;      
    
    this.index = -1;
    this.zone = -1;
    this.subzone = -1;
    
    // Websocket for VSCP daemon communication
    this.socket_vscp = null;
    
    // Flag for connected or unconnected state.
    this.bConnected = false;
    
    // Set the instance name for the control
    instanceName = "vscpws_" + this.elementId;
    
    // move this to global scope
    eval(instanceName + " = this;");
        
    // remember instance name
    this.instanceName = instanceName;
        
    // Open the socket
    this.socket_vscp = vscpws_openSocket(serverurl);
    
    if (null==this.socket_vscp ) {
        alert("Could not open websocket to VSCP server!");
    }
       
    // Bind events	
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);	
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);
       
    //retrieve instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
       return this.getInstanceName();
    }     
}

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_simpleTextEvent.prototype.setExtraParameters = 
                            function( index,     // Index if applicable 
                                        zone,    // Zone if applicable 
                                        subzone )// Sub zone if applicable  
{
    this.index = typeof index !== 'undefined' ? index : -1;
    this.zone = typeof zone !== 'undefined' ? zone : -1;
    this.subzone = typeof subzone !== 'undefined' ? subzone : -1;
}

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_simpleTextEvent.prototype.onVSCPOpen = function() 
{
    //document.getElementById(this.elementId).style.backgroundColor = "#40ff40";
    if (this.elementId) document.getElementById(this.elementId).textContent = 
            " undefined ";
    if (vscpws_debug) console.log('Open VSCP websocket');
    //this.bConnected = true;
    
    // Open the connection to the VSCP daemon
    //this.socket_vscp.send("C;" + "open");
    
    // Set filter
    //this.setFilter();
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

vscpws_simpleTextEvent.prototype.onVSCPClose = function() 
{
    //document.getElementById(this.elementId).style.backgroundColor = "#ff4040";
    if (this.elementId) document.getElementById(this.elementId).textContent = 
            " websocket connection CLOSED ";
    if (vscpws_debug) console.log('Close VSCP websocket');
    this.bConnected = false;
};


//-----------------------------------------------------------------------------
// setFilter
//-----------------------------------------------------------------------------
vscpws_simpleTextEvent.prototype.setFilter = function()
{
    var cmd;
    
    var filter_class = this.vscpclass;
    var filter_type = this.vscptype;
    var filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    // Zero for a mask is don't care        
    var mask_class = -1 != this.vscpclass ? 0xff : 0x00;
    var mask_type = -1 != this.vscptype ? 0xff : 0x00;
    var mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    if ( ("" != this.guid) ) {
        guid = this.guid.split(":");
        for ( i=0; i<16; i++ ) {
            mask_guid[i] = 0xff;
            filter_guid[i] = guid[i];
        }
    }
           
    // Send setfilter command. Format is
    // “C;SETFILTER;filter-priority,filter-class,filter-type, 
    //    filter-GUID;mask-priority,mask-class,mask-type,mask-GUID�?
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
}


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP websocket incoming message/event.	
vscpws_simpleTextEvent.prototype.onVSCPMessage = function(msg) 
{	 
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + 
                                    " " + msg.data);
	
    msgitems = msg.data.split(';');
				
    if ("+" == msgitems[0]){        // check for positive reply
        
        if (vscpws_debug) console.log("Positive reply "+msg.data);
        
        respone = msgitems[0].split(";");
        
        if ( "AUTH0" == msgitems[1] ) {
            var msg = "C;AUTH;" + this.username + ";" + 
                    vscp_make_websocket_auth_hash( this.username, 
                                                    this.passwordhash, 
                                                    msgitems[2] );
			this.socket_vscp.send(msg);
        }
        else if ( "AUTH1" == msgitems[1] ) {
        
            // We are authenticated and ready to go to work         
            this.socket_vscp.send("C;" + "OPEN");
       
            // Set filter
            this.setFilter();
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
        respone = msgitems[0].split(";");
    }
    else if ("E" == msgitems[0]){   // Check for event
        
        var offset = 0;
 
        //head;class;type;guid,data
        var vscpitems = msgitems[1].split(",");
        
        var vscphead = parseInt(vscpitems[0]);
        var vscpclass = parseInt(vscpitems[1]);
        var vscptype = parseInt(vscpitems[2]);
        var vscpobid = parseInt(vscpitems[3]);
        var vscptimestamp = parseInt(vscpitems[4]);
        var vscpguid = vscpitems[5];
        
        // Check if we have Level I events over Level II
        if ( vscpclass >= 512 && vscpclass < 1024 ) {
            offset = 16;    // Offset into data
            vscpclass -= 512;
        }
        
        var vscpdata = new Array();
        for (i=0;i<vscpitems.length-6-offset;i++){
            vscpdata[i] = parseInt(vscpitems[offset+6+i]);
            //if (vscpws_debug) console.log("index="+i.toString()+
            //                                " data="+vscpdata[i]);
        }
                    
        if (vscpws_debug) console.log("CLASS = " + vscpclass + 
                " TYPE = " + vscptype + "\n " + msg.data);

        // Nothing to do if vscpclass or vscptype is undefined
        if ((vscpclass == undefined) || (vscptype == undefined) ) return;
        if (( -1 != this.vscpclass) && (vscpclass != this.vscpclass)) return;
        if (( -1 != this.vscptype) && (vscptype != this.vscptype)) return;       
        
        // Classes with data coding byte
        if ((VSCP_CLASS1_MEASUREMENT == this.vscpclass) || 
                (VSCP_CLASS1_DATA == this.vscpclass) ) {
            
            if (( -1 != this.codingIndex) && 
                    (vscpws_getSensorIndexFromDataCoding(vscpdata[0]) != 
                                            this.codingIndex)) return; 
            
            // This event is for us
            var value = vscpws_measurementClass10Decode( vscpdata );
            
            var strvalue = new String();
            if ( null !== this.fncallback ) {
               console.log("Function");
                strvalue = 
                    this.fncallback.call( this,
                                    value,
                                    vscpws_getDatacodingUnit( vscpdata[0] ),
                                    vscpitems );
                // null is returned we expect the callback routine to
                // write the value for us.
                if (null == strvalue ) return;                           
            }
            else {
                strvalue = vscpws_toFixed(value,this.decimals);
            }
                       
            document.getElementById(this.elementId).textContent = 
                this.formatstr.format(strvalue,
                vscpws_units[vscptype][vscpws_getDatacodingUnit(vscpdata[0])],
                vscpws_getDatacodingUnit(vscpdata[0]),
                vscpws_getSensorIndexFromDataCoding(vscpdata[0]));
            
        } 
        // Floating point
        else if (VSCP_CLASS1_MEASUREMENT64 == this.vscpclass) {
            
            var value = vscpws_measurementClass60DecodeNumber(vscpdata);
            
            if ( null !== this.fncallback ) {
                var strvalue = 
                    this.fncallback.call( this,
                                        value,
                                        vscpws_getDatacodingUnit( vscpdata[0] ),
                                        vscpitems);
                // null is returned we expect the callback routine to
                // write the value for us.
                if (null == strvalue ) return;
                document.getElementById(this.elementId).textContent = 
                        this.formatstr.format(strvalue, 
                            vscpws_units[vscptype][0],-1,-1);
            }
            else {
                document.getElementById(this.elementId).textContent = 
                        this.formatstr.format(value.toString(),
                            vscpws_units[vscptype][0],-1,-1);
            }
        }
        // Measurement with zone
        else if ((VSCP_CLASS1_MEASUREZONE == this.vscpclass) ||
                    (VSCP_CLASS1_SETVALUEZONE == this.vscpclass) ) {
                
            // Check event index
            if (( -1 != this.index) && 
                    (vscpdata[0] != this.index)) return;
            // Check zone
            if (( -1 != this.zone) && 
                    (vscpdata[1] != this.zone)) return;
            // Check subzone
            if (( -1 != this.subzone) && 
                    (vscpdata[2] != this.subzone)) return;
            // Check sensor index
            if (( -1 != this.codingIndex) && 
                    (vscpws_getSensorIndexFromDataCoding[vscpdata[3]] != 
                                                this.codingIndex)) return;
            
            // This is for us
            
            // Mimic a standard data format
            var mimicdata = new Array();
            for (i=3;i<vscpdata.length;i++) {
                mimicdata[i-3] = vscpdata[i];
            }
            
            var value = vscpws_measurementClass10Decode( mimicdata );
            
            var strvalue = new String();
            if ( null !== this.fncallback ) {
                strvalue = 
                    this.fncallback.call( this,
                                        value,
                                        vscpws_getDatacodingUnit( vscpdata[0] ),
                                        vscpitems);
                // null is returned we expect the callback routine to
                // write the value for us.
                if (null == strvalue ) return;
            }
            else {
                strvalue = value.toString();
            }
                       
            document.getElementById(this.elementId).textContent = 
                this.formatstr.format(strvalue,
                vscpws_units[vscptype][vscpws_getDatacodingUnit(vscpdata[0])],
                vscpws_getDatacodingUnit(vscpdata[0]),
                vscpws_getSensorIndexFromDataCoding(vscpdata[0]));
            
        }
        // Other event
        else {
            var strValue = "Unknown";
            if ( null !== this.fncallback ) {
                
                strvalue = 
                    this.fncallback.call( this,
                                        value,
                                        vscpws_getDatacodingUnit( vscpdata[0] ),
                                        vscpitems);
                // null is returned we expect the callback routine to
                // write the value for us.
                if (null == strvalue ) return;
                
                document.getElementById(this.elementId).textContent = 
                    this.formatstr.format(strvalue,"", "", 0);
            }
        }
    }
}

//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic	
vscpws_simpleTextEvent.prototype.openConnection = function() 
{
	this.socket_vscp.send("C;" + "open");
}
    
//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------    
vscpws_simpleTextEvent.prototype.closeConnection = function() 
{
	this.socket_vscp.send("C;" + "close");
}












// ----------------------------------------------------------------------------









///////////////////////////////////////////////////////////////////////////////
// vscpws_thermometerCelsius
//

function vscpws_thermometerCelsius( username,           // Username for websocket serever  
                                        passwordhash,   // Password hash for websocket
                                        url,            // url to VSCP websocket i/f
                                        canvasName,     // Placeholder for widget
                                        widgetType,     // Widget type
                                        vscpclass,      // Event class 10/60/65/15
                                        vscptype,       // Event type
                                        sensorIndex,    // Datacoding sensor index
                                        bNumeric,       // Add numeric printout also
                                        guid )          // GUID we are interested in
{
    
    // First set default parameter
    this.username = username;
    this.passwordhash = passwordhash;
    this.widgetType = typeof widgetType !== 'undefined' ? widgetType : 0;
    this.vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_MEASUREMENT; // Meaurement
    this.vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_MEASUREMENT_TEMPERATURE;     // Temperature
    this.guid = typeof guid !== 'undefined' ? guid : "";
    this.sensorIndex = typeof sensorIndex !== 'undefined' ? sensorIndex : 0;  
    this.bNumeric = typeof bNumeric !== 'undefined' ? bNumeric : true;
    
    this.index = -1;
    this.zone = -1;
    this.subzone = -1;
    
    this.value = "0.0";
    this.temp = -200;
    
    // Websocket for VSCP daemon communication
    this.socket_vscp = null;
    
    // Flag for connected or unconnected state.
    this.bConnected = false;
    
    // Set the instance name for the control
    instanceName = "vscpws_" + canvasName;
    
    // move this to global scope
    eval(instanceName + " = this;");
        
    // remember instance name
    this.instanceName = instanceName;
    
    this.canvas = document.getElementById(canvasName);
    //this.canvas.top = 1;
    this.canvas.height = 201;
    this.canvas.width = 54;
    this.ctx = this.canvas.getContext("2d");

    // Preload background image
    this.bgimage = new Image();
    
    switch (widgetType) {
        
        case 1:
            this.bgimage.src = "../lib/widgets/thermometer/thermometer3.jpg";
            break;
            
        case 2:
            this.bgimage.src = "../lib/widgets/thermometer/thermometer2.png";
            break;
        
        case 3:
            this.bgimage.src = "../lib/widgets/thermometer/thermometer4.png";
            break;
        
        case 0:
        default:
            this.bgimage.src = "../lib/widgets/thermometer/thermometer1.png";
            break;
    }
        
    // Open the socket
    this.socket_vscp = vscpws_openSocket(url);
    
    if (null==this.socket_vscp ) alert("Could not open websocket to VSCP server!");
       
    // Bind events	
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);	
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);
    
    this.bgimage.onload = this.onBgImageLoad.bind(this);
       
    //retrieve instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
       return this.getInstanceName();
    }     
}

//-----------------------------------------------------------------------------
// onImageLoad
//-----------------------------------------------------------------------------

vscpws_thermometerCelsius.prototype.onBgImageLoad = function(me) 
{
    this.draw();
};

//-----------------------------------------------------------------------------
// draw
//-----------------------------------------------------------------------------

vscpws_thermometerCelsius.prototype.draw = function()
{
    //if (vscpws_debug) console.log("draw value=" + this.bState);

    // Clear the last image, if it exists.
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.bgimage, 0, 0, this.canvas.width, this.canvas.height);

    // If we are unconnected we draw an X over the picture
    // to show that
    if (!this.bConnected) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 1;
        this.ctx.strokeStyle = "#FF0000";
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.moveTo(0, this.canvas.height);
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.stroke();
    }
    else {
        if (0 == this.widgetType || 1 == this.widgetType) {
            //this.temp = -20;
            // Bounds check
            if (this.temp > 35)
                this.temp = 35;
            if (this.temp < -25)
                this.temp = -25;
            //var t = 179		// t=0 => +35, t=179 => -25
            var t = -2.98 * this.temp + 104.42;

            this.ctx.fillStyle = "#8A0000";
            this.ctx.fillRect( 26,
                                4 + t,
                                7,
                                this.canvas.height - t - 11 );
            if (this.bNumeric) {
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "10px Arial";
                //this.ctx.rotate(Math.PI/2);
                //this.ctx.textAlign = "center";
                this.ctx.fillText(this.value, 0, this.canvas.height);
            }
        }
        else if (2 == this.widgetType) {
            //this.temp = -35;
            // Bounds check
            if (this.temp > 45)
                this.temp = 45;
            if (this.temp < -35)
                this.temp = -35;
     
            //var t = -3.0286 * this.temp + 121.14;
            var t = -2.225*this.temp + 103.125;

            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(24, t, 7, this.canvas.height - t - 22 );
            /*this.ctx.fillRect(24,
                                -66,
                                7,
                                this.canvas.height - 35);*/
            if (this.bNumeric) {
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "10px Arial";
                //this.ctx.rotate(Math.PI/2);
                //this.ctx.textAlign = "center";
                this.ctx.fillText(this.value, 19, this.canvas.height-8);
            }
        }
        else if (3 == this.widgetType) {
            //this.temp = 40;
            // Bounds check
            if (this.temp > 55)
                this.temp = 55;
            if (this.temp < -20)
                this.temp = -20;
     
            //var t = -3.0286 * this.temp + 121.14;
            var t = -2*this.temp + 126;
            //t = 166;

            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(23, t, 6, this.canvas.height - t - 35 );
            /*this.ctx.fillRect(24,
                                -66,
                                7,
                                this.canvas.height - 35);*/
            if (this.bNumeric) {
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "10px Arial";
                //this.ctx.rotate(Math.PI/2);
                //this.ctx.textAlign = "center";
                this.ctx.fillText(this.value, 17, this.canvas.height - 21);
            }
        }
    }
};

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_thermometerCelsius.prototype.setExtraParameters = 
                            function( index,     // Index if applicable 
                                        zone,    // Zone if applicable 
                                        subzone )// Subzone if applicable  
{
    this.index = typeof index !== 'undefined' ? index : -1;
    this.zone = typeof zone !== 'undefined' ? zone : -1;
    this.subzone = typeof subzone !== 'undefined' ? subzone : -1;
}

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_thermometerCelsius.prototype.onVSCPOpen = function() 
{
    //document.getElementById(this.elementId).style.backgroundColor = "#40ff40";
    if (this.elementId) document.getElementById(this.elementId).textContent = " undefined ";
    if (vscpws_debug) console.log('Open VSCP websocket');
    //this.bConnected = true;
    
    // Open the connection to the VSCP daemon
    //this.socket_vscp.send("C;" + "open");
    
    // Set filter
    //this.setFilter();
    
    this.draw();
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

vscpws_thermometerCelsius.prototype.onVSCPClose = function() 
{
    //document.getElementById(this.elementId).style.backgroundColor = "#ff4040";
    if (this.elementId) document.getElementById(this.elementId).textContent = 
                " websocket connection CLOSED ";
    if (vscpws_debug) console.log('Close VSCP websocket');
    this.bConnected = false;
};


//-----------------------------------------------------------------------------
// setFilter
//-----------------------------------------------------------------------------
vscpws_thermometerCelsius.prototype.setFilter = function()
{
    var cmd;
    
    var filter_class = this.vscpclass;
    var filter_type = this.vscptype;
    var filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    // Zero for a mask is don't care        
    var mask_class = -1 != this.vscpclass ? 0xff : 0x00;
    var mask_type = -1 != this.vscptype ? 0xff : 0x00;
    var mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    if ( ("" != this.guid) ) {
        guid = this.guid.split(":");
        for ( i=0; i<16; i++ ) {
            mask_guid[i] = 0xff;
            filter_guid[i] = guid[i];
        }
    }
           
    // Send setfilter command. Format is
    // “C;SETFILTER;filter-priority,filter-class,filter-type, 
    //    filter-GUID;mask-priority,mask-class,mask-type,mask-GUID�?
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
}

//-----------------------------------------------------------------------------
// setMonitorVariable
//-----------------------------------------------------------------------------

vscpws_thermometerCelsius.prototype.setMonitorVariable = function(name,interval) 
{
    // First set default parameter
    interval = typeof interval !== 'undefined' ? interval : 1000;
    
    this.monitorVariableName = name;
    this.monitorInterval = interval;
    
    var t = this;
    setInterval(function(){t.time4VariableRead(t.monitorVariableName,t.socket_vscp);}, interval);
}


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP socketcan incoming message/event.	
vscpws_thermometerCelsius.prototype.onVSCPMessage = function(msg) 
{	 
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + " " + msg.data);
	
    msgitems = msg.data.split(';');
				
    if ("+" == msgitems[0]){        // check for positive reply
        
        if (vscpws_debug) console.log("Positive reply "+msg.data);
        respone = msgitems[0].split(";");

        if ( "AUTH0" == msgitems[1] ) {
            var msg = "C;AUTH;" + this.username + ";" + 
                    vscp_make_websocket_auth_hash( this.username, 
                                                    this.passwordhash, 
                                                    msgitems[2] );
			this.socket_vscp.send(msg);
        }
        else if ( "AUTH1" == msgitems[1] ) {
        
            // We are authenticated and ready to go to work         
            this.socket_vscp.send("C;" + "OPEN");
   
            // Draw the state
            this.draw();
    
            // Set filter
            this.setFilter();
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;
            // Draw the state
            this.draw();
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
        else if ("READVAR" == msgitems[1] && (2 == msgitems[2])){
            this.value = vscpws_toFixed(msgitems[3],1);
            this.temp = msgitems[3]
            this.draw();
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
        respone = msgitems[0].split(";");
    }
    else if ("E" == msgitems[0]){   // Check for event
        
        var offset = 0;
        
        //head;class;type;guid,data
        var vscpitems = msgitems[1].split(",");
        
        var vscphead = parseInt(vscpitems[0]);
        var vscpclass = parseInt(vscpitems[1]);
        var vscptype = parseInt(vscpitems[2]);
        var vscpobid = parseInt(vscpitems[3]);
        var vscptimestamp = parseInt(vscpitems[4]);
        var vscpguid = vscpitems[5];
        
        // Check if we have Level I events over Level II
        if ( vscpclass >= 512 && vscpclass < 1024 ) {
            offset = 16;    // Offset into data
            vscpclass -= 512;
        }
        
        var vscpdata = new Array();
        for (i=0;i<vscpitems.length-6-offset;i++){
            vscpdata[i] = parseInt(vscpitems[offset+6+i]);
            //if (vscpws_debug) console.log("index="+i.toString()+" data="+vscpdata[i]);
        }
                    
        if (vscpws_debug) console.log("CLASS = " + vscpclass + " TYPE = " 
                                            + vscptype + "\n " + msg.data);

        // Nothing to do if vscpclass or vscptype is undefined
        if ((vscpclass == undefined) || (vscptype == undefined) ) return;
        if (( -1 != this.vscpclass) && (vscpclass != this.vscpclass)) return;
        if (( -1 != this.vscptype) && (vscptype != this.vscptype)) return;       
        
        // Classes with datacoding byte
        if ((VSCP_CLASS1_MEASUREMENT == this.vscpclass) ||
                (VSCP_CLASS1_DATA == this.vscpclass)) {

            if ((-1 != this.sensorIndex) &&
                    (vscpws_getSensorIndexFromDataCoding(vscpdata[0]) != 
                    this.sensorIndex))
                return;

            // This event is for us
            this.value = 
                   vscpws_toFixed(vscpws_measurementClass10Decode(vscpdata), 1);
            
            // Should be a celsius value
            switch(vscpws_getDatacoding(vscpdata[0])) {
                case 0:   // Kelvin
                    this.value = vscpws_convertKelvinToCelsius(this.value);
                    break;
                case 2:   // Fahrenheit
                    this.value = vscpws_convertFahrenheitToCelsius(this.value);
                    break;
                default:    // Do nothing (if already celsius)
                    break;
            }
            
            this.temp = this.value;
            this.draw();
            
        } 
        // Floating point
        else if (VSCP_CLASS1_MEASUREMENT64 == this.vscpclass) {

            this.value = 
             vscpws_toFixed(vscpws_measurementClass60DecodeNumber(vscpdata), 1);
            this.value = vscpws_convertKelvinToCelsius(this.value);
            this.temp = this.value;
            this.draw();
            
        }
        // Measurement with zone
        else if ((VSCP_CLASS1_MEASUREZONE == this.vscpclass) ||
                (VSCP_CLASS1_SETVALUEZONE == this.vscpclass)) {

            // Check event index
            if ((-1 != this.index) &&
                    (vscpdata[0] != this.index))
                return;
            // Check zone
            if ((-1 != this.zone) &&
                    (vscpdata[1] != this.zone))
                return;
            // Check subzone
            if ((-1 != this.subzone) &&
                    (vscpdata[2] != this.subzone))
                return;
            // Check sensor index
            if ((-1 != this.sensorIndex) &&
                    (vscpws_getSensorIndexFromDataCoding[vscpdata[3]] != this.sensorIndex))
                return;

            // This is for us

            // Mimic a standard data format
            var mimicdata = new Array();
            for (i = 3; i < vscpdata.length; i++) {
                mimicdata[i - 3] = vscpdata[i];
            }

            this.value = vscpws_toFixed(vscpws_measurementClass10Decode(mimicdata), 1);
            
            // Should be a celsius value
            switch(vscpws_getDatacoding(vscpdata[3])) {
                case 0:   // Kelvin
                    this.value = vscpws_convertKelvinToCelsius(this.value);
                    break;
                case 2:   // Fahrenheit
                    this.value = vscpws_convertFahrenheitToCelsius(this.value);
                    break;
                default:    // Do nothing (if already celsius)
                    break;
            }
            
            this.temp = this.value;
            this.draw();
            
        }

    }
}

//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic	
vscpws_thermometerCelsius.prototype.openConnection = function() 
{
	this.socket_vscp.send("C;" + "open");
}
    
//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------    
vscpws_thermometerCelsius.prototype.closeConnection = function() 
{
	this.socket_vscp.send("C;" + "close");
}

//-----------------------------------------------------------------------------
// time4VariableRead
//-----------------------------------------------------------------------------    
vscpws_thermometerCelsius.prototype.time4VariableRead = function(m,s) 
{
    var cmd;
    if (vscpws_debug) console.log("time4VariableRead");
    cmd = "C;READVAR;" + m;
	s.send(cmd);
}










// ----------------------------------------------------------------------------









///////////////////////////////////////////////////////////////////////////////
// vscpws_spedometerCelsius
//

function vscpws_speedometerCelius( username,        // Username for websocket serever  
                                    passwordhash,   // Password hash for websocket
                                    url,            // url to VSCP websocket i/f
                                    canvasName,     // Placeholder for widget
                                    widgetType,     // Widget type
                                    vscpclass,      // Event class 10/60/65/15
                                    vscptype,       // Event type
                                    sensorIndex,    // Datacoding sensor index
                                    bNumeric,       // Add numeric printout also
                                    guid )          // GUID we are interested in
{
    
    // First set default parameter
    this.username = username;
    this.passwordhash = passwordhash;
    this.widgetType = typeof widgetType !== 'undefined' ? widgetType : 0;
    this.vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_MEASUREMENT; // Meaurement
    this.vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_MEASUREMENT_TEMPERATURE;     // Temperature
    this.guid = typeof guid !== 'undefined' ? guid : "";
    this.sensorIndex = typeof sensorIndex !== 'undefined' ? sensorIndex : 0;  
    this.bNumeric = typeof bNumeric !== 'undefined' ? bNumeric : true;
    
    this.index = -1;
    this.zone = -1;
    this.subzone = -1;
    
    this.ndecimals = 2; // Default is two decimals
    this.value = "--";
    this.temp = -200;
    
    // Websocket for VSCP daemon communication
    this.socket_vscp = null;
    
    // Flag for connected or unconnected state.
    this.bConnected = false;
    
    // Set the instance name for the control
    instanceName = "vscpws_" + canvasName;
    
    // move this to global scope
    eval(instanceName + " = this;");
        
    // remember instance name
    this.instanceName = instanceName;
    
    this.canvas = document.getElementById(canvasName);
    //this.canvas.top = 1;
    this.canvas.height = 236;
    this.canvas.width = 249;
    this.ctx = this.canvas.getContext("2d");

    // Preload background image
    this.bgimage = new Image();
    
    switch (widgetType) {
        
        case 1:
            this.bgimage.src = "../lib/widgets/misc/speedometer.png";
            break;
                 
        case 0:
        default:
            this.bgimage.src = "../lib/widgets/misc/speedometer.png";
            break;
    }
        
    // Open the socket
    this.socket_vscp = vscpws_openSocket(url);
    
    if (null==this.socket_vscp ) alert("Could not open websocket to VSCP server!");
       
    // Bind events	
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);	
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);
    
    this.bgimage.onload = this.onBgImageLoad.bind(this);
       
    //retreive instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
       return this.getInstanceName();
    }     
}

//-----------------------------------------------------------------------------
// onImageLoad
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.onBgImageLoad = function(me) 
{
    this.draw();
};

//-----------------------------------------------------------------------------
// draw
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.draw = function()
{
    //if (vscpws_debug) console.log("draw value=" + this.bState);

    // Clear the last image, if it exists.
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.bgimage, 0, 0, this.canvas.width, this.canvas.height);

    // If we are unconnected we draw an X over the picture
    // to show that
    if (!this.bConnected) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 1;
        this.ctx.strokeStyle = "#FF0000";
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.moveTo(0, this.canvas.height);
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.stroke();
    }
    else {
        if (0 == this.widgetType) {
            //this.temp = 100;
            // Bounds check
            if (this.temp > 140)
                this.temp = 140;
            if (this.temp < 0)
                this.temp = 0;

            // radius 90
            var xx = 122 + 90 * Math.sin(5 - ((this.temp / 10) * 0.265));
            var yy = 115 + 90 * Math.cos(5 - ((this.temp / 10) * 0.265));

            this.ctx.beginPath();
            this.ctx.strokeStyle = 1;
            this.ctx.strokeStyle = "#0000D0";
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(122, 115); 
            this.ctx.lineTo(xx,yy);
            this.ctx.stroke();
     
            if (this.bNumeric) {
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "10px Arial";
                //this.ctx.rotate(Math.PI/2);
                //this.ctx.textAlign = "center";
                this.ctx.fillText(this.value + "C", 114,180);
            }
        }
    }
};

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.setExtraParameters = 
                            function( index,     // Index if applicable 
                                        zone,    // Zone if applicable 
                                        subzone )// Subzone if applicable  
{
    this.index = typeof index !== 'undefined' ? index : -1;
    this.zone = typeof zone !== 'undefined' ? zone : -1;
    this.subzone = typeof subzone !== 'undefined' ? subzone : -1;
}

//-----------------------------------------------------------------------------
// setDecimals
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.setDecimals = 
                            function( decimals ) 
{
    this.ndecimals = decimals;
}

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.onVSCPOpen = function() 
{
    //document.getElementById(this.elementId).style.backgroundColor = "#40ff40";
    if (this.elementId) document.getElementById(this.elementId).textContent = " undefined ";
    if (vscpws_debug) console.log('Open VSCP websocket');
    //this.bConnected = true;
    
    // Open the connection to the VSCP daemon
    //this.socket_vscp.send("C;" + "open");
    
    // Set filter
    //this.setFilter();
    
    this.draw();
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.onVSCPClose = function() 
{
    //document.getElementById(this.elementId).style.backgroundColor = "#ff4040";
    if (this.elementId) document.getElementById(this.elementId).textContent = " websocket connection CLOSED ";
    if (vscpws_debug) console.log('Close VSCP websocket');
    this.bConnected = false;
};


//-----------------------------------------------------------------------------
// setFilter
//-----------------------------------------------------------------------------
vscpws_speedometerCelius.prototype.setFilter = function()
{
    var cmd;
    
    var filter_class = this.vscpclass;
    var filter_type = this.vscptype;
    var filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    // Zero for a mask is don't care        
    var mask_class = -1 != this.vscpclass ? 0xff : 0x00;
    var mask_type = -1 != this.vscptype ? 0xff : 0x00;
    var mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    if ( ("" != this.guid) ) {
        guid = this.guid.split(":");
        for ( i=0; i<16; i++ ) {
            mask_guid[i] = 0xff;
            filter_guid[i] = guid[i];
        }
    }
           
    // Send setfilter command. Format is
    // “C;SETFILTER;filter-priority,filter-class,filter-type, 
    //    filter-GUID;mask-priority,mask-class,mask-type,mask-GUID�?
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
}

//-----------------------------------------------------------------------------
// setMonitorVariable
//-----------------------------------------------------------------------------

vscpws_speedometerCelius.prototype.setMonitorVariable = function(name,interval) 
{
    // First set default parameter
    interval = typeof interval !== 'undefined' ? interval : 1000;
    
    this.monitorVariableName = name;
    this.monitorInterval = interval;
    
    var t = this;
    setInterval(function(){t.time4VariableRead(t.monitorVariableName,t.socket_vscp);}, interval);
}


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP socketcan incoming message/event.	
vscpws_speedometerCelius.prototype.onVSCPMessage = function(msg) 
{	 
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + " " + msg.data);
	
    msgitems = msg.data.split(';');
				
    if ("+" == msgitems[0]){        // check for positive reply
        
        if (vscpws_debug) console.log("Positive reply "+msg.data);
        respone = msgitems[0].split(";");

        if ( "AUTH0" == msgitems[1] ) {
            var msg = "C;AUTH;" + this.username + ";" + 
                    vscp_make_websocket_auth_hash( this.username, 
                                                    this.passwordhash, 
                                                    msgitems[2] );
			this.socket_vscp.send(msg);
        }
        else if ( "AUTH1" == msgitems[1] ) {
        
            // We are authenticated and ready to go to work         
            this.socket_vscp.send("C;" + "OPEN");
   
            // Draw the state
            this.draw();
    
            // Set filter
            this.setFilter();
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;
            // Draw the state
            this.draw();
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
        else if ("READVAR" == msgitems[1] && (2 == msgitems[2])){
            this.value = vscpws_toFixed(msgitems[3],1);
            this.temp = msgitems[3]
            this.draw();
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
        respone = msgitems[0].split(";");
    }
    else if ("E" == msgitems[0]){   // Check for event
        
        var offset = 0;
        
        //head;class;type;guid,data
        var vscpitems = msgitems[1].split(",");
        
        var vscphead = parseInt(vscpitems[0]);
        var vscpclass = parseInt(vscpitems[1]);
        var vscptype = parseInt(vscpitems[2]);
        var vscpobid = parseInt(vscpitems[3]);
        var vscptimestamp = parseInt(vscpitems[4]);
        var vscpguid = vscpitems[5];
        
        // Check if we have Level I events over Level II
        if ( vscpclass >= 512 && vscpclass < 1024 ) {
            offset = 16;    // Offset into data
            vscpclass -= 512;
        }
        
        var vscpdata = new Array();
        for (i=0;i<vscpitems.length-6-offset;i++){
            vscpdata[i] = parseInt(vscpitems[offset+6+i]);
            //if (vscpws_debug) 
            //      console.log("index="+i.toString()+" data="+vscpdata[i]);
        }
                    
        if (vscpws_debug) console.log("CLASS = " + vscpclass + " TYPE = " + 
                                            vscptype + "\n " + msg.data);

        // Nothing to do if vscpclass or vscptype is undefined
        if ((vscpclass == undefined) || (vscptype == undefined) ) return;
        if (( -1 != this.vscpclass) && (vscpclass != this.vscpclass)) return;
        if (( -1 != this.vscptype) && (vscptype != this.vscptype)) return;       
        
        // Classes with datacoding byte
        if ((VSCP_CLASS1_MEASUREMENT == this.vscpclass) ||
                (VSCP_CLASS1_DATA == this.vscpclass)) {

            if ((-1 != this.sensorIndex) &&
                    (vscpws_getSensorIndexFromDataCoding(vscpdata[0]) != 
                    this.sensorIndex))
                return;

            // This event is for us 
            this.value = vscpws_toFixed(vscpws_measurementClass10Decode(vscpdata), 
                                            this.ndecimals);
            
            // Should be a celsius value
            switch(vscpws_getDatacoding(vscpdata[0])) {
                case 0:   // Kelvin
                    this.value = vscpws_convertKelvinToCelsius(this.value);
                    break;
                case 2:   // Fahrenheit
                        this.value = vscpws_convertFahrenheitToCelsius(this.value);
                        break;
                default:    // Do nothing (if already celsius)
                    break;
            }
            
            this.temp = this.value;
            this.draw();
            
        } 
        // Floating point
        else if (VSCP_CLASS1_MEASUREMENT64 == this.vscpclass) {

            this.value = vscpws_toFixed(vscpws_measurementClass60DecodeNumber(vscpdata), this.ndecimals);
            this.value = vscpws_convertKelvinToCelsius(this.value);
            this.temp = this.value;
            this.draw();
            
        }
        // Measurement with zone
        else if ((VSCP_CLASS1_MEASUREZONE == this.vscpclass) ||
                (VSCP_CLASS1_SETVALUEZONE == this.vscpclass)) {

            // Check event index
            if ((-1 != this.index) &&
                    (vscpdata[0] != this.index))
                return;
            // Check zone
            if ((-1 != this.zone) &&
                    (vscpdata[1] != this.zone))
                return;
            // Check subzone
            if ((-1 != this.subzone) &&
                    (vscpdata[2] != this.subzone))
                return;
            // Check sensor index
            if ((-1 != this.sensorIndex) &&
                    (vscpws_getSensorIndexFromDataCoding[vscpdata[3]] != this.sensorIndex))
                return;

            // This is for us

            // Mimic a standard data format
            var mimicdata = new Array();
			mimicdata[0] = 0x80; // Normalized integer 
            for (i = 3; i < vscpdata.length; i++) {
                mimicdata[1 + i - 3] = vscpdata[i];
            }

            this.value = vscpws_toFixed(vscpws_measurementClass10Decode(mimicdata), this.ndecimals);
            
            // Should be a celsius value
            switch(vscpws_getDatacoding(vscpdata[3])) {
                case 0:   // Kelvin
                    this.value = vscpws_convertKelvinToCelsius(this.value);
                    break;
                case 2:   // Fahrenheit
                    this.value = vscpws_convertFahrenheitToCelsius(this.value);
                    break;
                default:    // Do nothing (if already celsius)
                    break;
            }
            
            this.temp = this.value;
            this.draw();
            
        }

    }
}

//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic	
vscpws_speedometerCelius.prototype.openConnection = function() 
{
	this.socket_vscp.send("C;" + "open");
}
    
//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------    
vscpws_speedometerCelius.prototype.closeConnection = function() 
{
	this.socket_vscp.send("C;" + "close");
}

//-----------------------------------------------------------------------------
// time4VariableRead
//-----------------------------------------------------------------------------    
vscpws_speedometerCelius.prototype.time4VariableRead = function(m,s) 
{
    var cmd;
    if (vscpws_debug) console.log("time4VariableRead");
    cmd = "C;READVAR;" + m;
	s.send(cmd);
}













// ----------------------------------------------------------------------------










///////////////////////////////////////////////////////////////////////////////
// vscpws_relocate
//

function vscpws_relocate( username,         // Username for websocket serever  
                            passwordhash,   // Password hash for websocket
                            url,            // url to relocate to
                            imageType,      // Image type
                            width,          // Width for image
                            height,         // Height for image
                            imagesrc )      // Path to user supplied image
{
    this.username = username;
    this.passwordhash = passwordhash;
    
    // First set default parameter
    this.imageType = typeof imageType !== 'undefined' ? imageType : 0;

    // Preload background image
    this.bgimage = new Image();
    
    switch (imageType) {
        
        case 1:
            this.bgimage.src = "../lib/widgets/misc/speedometer.png";
            break;
                 
        case 0:
        default:
            this.bgimage.src = "../lib/widgets/misc/speedometer.png";
            break;
    }
        
    // Open the socket
    this.socket_vscp = vscpws_openSocket(url);
    
    if (null==this.socket_vscp ) alert("Could not open websocket to VSCP server!");
       
    // Bind events	
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);	
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);
    
    this.bgimage.onload = this.onBgImageLoad.bind(this);
       
    //retreive instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
        return this.getInstanceName();
    }     
}







// ----------------------------------------------------------------------------








///////////////////////////////////////////////////////////////////////////////
// vscpws_slider
//

function vscpws_slider( username,               // Username for websocket serever  
                            passwordhash,       // Password hash for websocket
                            url,                // url to VSCP websocket i/f
                            sliderCanvasName,   // Slider ID
                            slideTxtname,       // Slider Input value ID
                            txtCanvasName       // Remote device value ID
                        )
{
    // First set default parameter
    this.username = username;
    this.passwordhash = passwordhash;

    // Websocket for VSCP daemon communication
    this.socket_vscp = null;

    // Flag for connected or unconnected state.
    this.bConnected = false;

    // Set the instance name for the control
    instanceName = "vscpws_" + sliderCanvasName;

    // move this to global scope
    eval(instanceName + " = this;");

    // remember instance name
    this.instanceName = instanceName;

    // Events to send to turn ON
    this.tansmitt_vscpclass = VSCP_CLASS1_CONTROL;     // Default class is CLASS1.CONTROL
    this.tansmitt_vscptype = VSCP_TYPE_CONTROL_DIM_LAMPS; // Default type is TurnOn
    this.tansmitt_data = new Array(0,0,0); // Dimvalue=0, zone=0, subzone=0
    this.tansmitt_guid = "-";        // Default GUID is GUID of interface.


    // Receive events to confirm Turn ON
    this.receive_vscpclass = VSCP_CLASS1_INFORMATION;   // Default class is CLASS1.INFORMATION
    this.receive_vscptyp = VSCP_TYPE_INFORMATION_LEVEL_CHANGED;   // Default type is On
    this.receive_data = new Array(0,0,0); // Dimvalue = 0, zone=0, subzone=0
    this.receive_guid = "";          // Default GUID (empty is any).

    // Monitorvariabel - Should be a boolean variable
    this.monitorVariableName = "";      // Default is none
    this.monitorInterval = 1000;        // Monitor interval is each second

    this.sliderCanvas = document.getElementById(sliderCanvasName);
    this.sliderTxtCanvas = document.getElementById(slideTxtname);
    this.txtCanvas = document.getElementById(txtCanvasName);

    this.sliderTxtCanvasId = slideTxtname;

    this.sliderRemoteValue = 0;

    // Open the socket
    this.socket_vscp = vscpws_openSocket(url);

    if (null==this.socket_vscp ) alert("Could not open websocket to VSCP server!");

    // Bind events
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);

    this.sliderCanvas.onchange = this.updateSlider.bind(this);

    // Set default events
    this.setTransmittEvent();

    //retreive instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
       return this.getInstanceName();
    }

}

//-----------------------------------------------------------------------------
// setTransmittEvent
//-----------------------------------------------------------------------------

vscpws_slider.prototype.setTransmittEvent = function( vscpclass,
                                                        vscptype,
                                                        data,
                                                        guid )
{
    var dataArray;

    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_CONTROL;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_CONTROL_DIM_LAMPS;
    guid = typeof guid !== 'undefined' ? guid : "-";
    this.tansmitt_vscpclass = vscpclass;
    this.tansmitt_vscptype = vscptype;
    this.tansmitt_guid = guid;

    if (this.tansmitt_vscptype ==VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL)
    {
        // index = dont care, zone=0, subzone=0 , data , data, data, data, data
        dataArray = new Array(-1,0,0,0,0,0,0,0); 
    }
    else   // VSCP_TYPE_CONTROL_DIM_LAMPS
    {
        dataArray = new Array(0,0,0); // Dimvalue = 0, zone=0, subzone=0
    }

    data = typeof data !== 'undefined' ? data : dataArray;
    this.tansmitt_data = data;

}

//-----------------------------------------------------------------------------
// setTransmittZone
//-----------------------------------------------------------------------------

vscpws_slider.prototype.setTransmittZone = function(index,zone,subzone)
{
    if((this.tansmitt_vscpclass == VSCP_CLASS1_CONTROL) && 
            (this.tansmitt_vscptype == VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL))
    {
        this.tansmitt_data[0] = typeof index !== 'undefined' ? index : 0;
    }

    this.tansmitt_data[1] = typeof zone !== 'undefined' ? zone : 0;
    this.tansmitt_data[2] = typeof subzone !== 'undefined' ? subzone : 0;
}

//-----------------------------------------------------------------------------
// setReceiveEvent
//-----------------------------------------------------------------------------

vscpws_slider.prototype.setReceiveEvent = function( vscpclass,
                                                        vscptype,
                                                        data,
                                                        guid )
{

    var dataArray;

    //
    // First set default parameter
    vscpclass = typeof vscpclass !== 'undefined' ? vscpclass : VSCP_CLASS1_INFORMATION;
    vscptype = typeof vscptype !== 'undefined' ? vscptype : VSCP_TYPE_INFORMATION_LEVEL_CHANGED;
    guid = typeof guid !== 'undefined' ? guid : "";  // GUID dont'care
    this.receive_vscpclass = vscpclass;
    this.receive_vscptype = vscptype;
    this.receive_guid = guid;

    if (this.receive_vscptype ==VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL)
    {
        // index = dont care, zone=0, subzone=0 , data , data, data, data, data
        dataArray = new Array(-1,0,0,0,0,0,0,0); 
    }
    else   // VSCP_TYPE_CONTROL_DIM_LAMPS
    {
        dataArray = new Array(0,0,0); // Dimvalue = 0, zone=0, subzone=0
    }
    data = typeof data !== 'undefined' ? data : dataArray;
    this.receive_data = data;


    // Set filter
    //this.setFilter();
}

//-----------------------------------------------------------------------------
// setReceiveZone
//-----------------------------------------------------------------------------

vscpws_slider.prototype.setReceiveZone = function(index,zone,subzone)
{
    if((this.receive_vscpclass == 
            VSCP_CLASS1_CONTROL) && 
            (this.receive_vscptype == VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL))
    {
        this.receive_data[0] = typeof index !== 'undefined' ? index : 0;
    }
    this.receive_data[1] = typeof zone !== 'undefined' ? zone : 0;
    this.receive_data[2] = typeof subzone !== 'undefined' ? subzone : 0;
}


//-----------------------------------------------------------------------------
// updateSlider
//-----------------------------------------------------------------------------


vscpws_slider.prototype.updateSlider = function()
{
    //alert("hell0");
    this.sliderTxtCanvas.innerHTML = this.sliderCanvas.value;

    //send vscp event
    this.setValue(this.sliderCanvas.value);
}

//-----------------------------------------------------------------------------
// setMonitorVariable
//-----------------------------------------------------------------------------

vscpws_slider.prototype.setMonitorVariable = function(name,interval)
{
    // First set default parameter
    interval = typeof interval !== 'undefined' ? interval : 1000;

    this.monitorVariableName = name;
    this.monitorInterval = interval;

    var t = this;
    setInterval(function(){t.time4VariableRead(t.monitorVariableName,t.socket_vscp);}, interval);
}


//-----------------------------------------------------------------------------
// processTxData
//-----------------------------------------------------------------------------

vscpws_slider.prototype.processTxData = function(value)
{
  // value is the value received from slider  --> VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL
  // value can be --. +ve or _ve number
  // Split value into bytes & save into -- this.tansmitt_data[3],this.tansmitt_data[4],this.tansmitt_data[5]
  //                                       this.tansmitt_data[6], this.tansmitt_data[7]
}

//-----------------------------------------------------------------------------
// processRxData
//-----------------------------------------------------------------------------

vscpws_slider.prototype.processRxData = function(vscpdata)
{
  // vscpdata --> is data received for remote device ( +ve or _ve number) --> VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED
  // depending upon vscpdata.length value -- set the --> this.sliderRemoteValue
  // vscpdata[3],vscpdata[4],vscpdata[5],vscpdata[6], vscpdata[7]

  this.sliderRemoteValue = 0;

}

//-----------------------------------------------------------------------------
// setValue
//-----------------------------------------------------------------------------

vscpws_slider.prototype.setValue = function(value)
{
    var cmd="E;0,"; // Event + priority

    if (value) {

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
            if (this.tansmitt_vscptype ==VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL)
            {
                this.processTxData(value)
            }
            else  // VSCP_TYPE_CONTROL_DIM_LAMPS
            {
                this.tansmitt_data[0] = value;

            }

            for (i=0;i<this.tansmitt_data.length;i++) {
                    cmd += this.tansmitt_data[i].toString() + ",";
                    if (i<this.tansmitt_data.length-1) cmd += ",";   // No comma for last
            }

            if (vscpws_debug) console.log(cmd);
            this.socket_vscp.send(cmd);

        }
    }

};

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_slider.prototype.onVSCPOpen = function()
{
    if (vscpws_debug) console.log('Open VSCP websocket');
    //this.bConnected = true;
    //this.socket_vscp.send("C;" + "open");
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

vscpws_slider.prototype.onVSCPClose = function()
{
    if (vscpws_debug) console.log('Close VSCP websocket');
    //this.bConnected = false;
    this.socket_vscp.send("C;" + "close");

};


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP socketcan incoming message/event.
vscpws_slider.prototype.onVSCPMessage = function(msg)
{
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + " " + msg.data);

    msgitems = msg.data.split(';');


    if ("+" == msgitems[0]){        // check for positive reply

        if (vscpws_debug) console.log("Positive reply "+msg.data);
        respone = msgitems[0].split(";");
        
        if ( "AUTH0" == msgitems[1] ) {
            var msg = "C;AUTH;" + this.username + ";" + 
                    vscp_make_websocket_auth_hash( this.username, 
                                                    this.passwordhash, 
                                                    msgitems[2] );
			this.socket_vscp.send(msg);
        }
        else if ( "AUTH1" == msgitems[1] ) {
        
            // We are authenticated and ready to go to work         
            this.socket_vscp.send("C;" + "OPEN");
   
            // Draw the state
            this.draw();
    
            // Set filter
            this.setFilter();
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;
            // Draw the state
            this.draw();
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
        else if ("READVAR" == msgitems[1] && (9 == msgitems[2])){
                // set the Remote Data
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
    }
    else if ("E" == msgitems[0]){   // Check for event
        var offset = 0; // used for Level I events over Level II

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
                this.receive_guid.toLowerCase() != guid.toLowerCase()) return;

        // Nothing to do if vscpclass or vscptype is undefined
        if ((vscpclass == undefined) || (vscptype == undefined) ) return;

        // Check if this is a possible Rx-event
        if (vscpclass == this.receive_vscpclass &&
                vscptype == this.receive_vscptype ) {
            // Check data if any
            if (this.receive_data.length ) {

                // Check zone & subzone & index
                if((this.receive_vscpclass == VSCP_CLASS1_INFORMATION) && 
                        (this.receive_vscptype == VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED))
                {
                    //for (i=0;i<this.receive_data.length;i++) {
                    for (i=0;i<3;i++) {
                        // Skip a don't care
                        if (( -1 == this.receive_data[i] )||(this.receive_data[i] == undefined)) continue;
                        if ((vscpdata[i] != this.receive_data[i])||(vscpdata[i] == undefined))  return;
                    }
                }
                else  // VSCP_TYPE_INFORMATION_LEVEL_CHANGED
                {
                    for (i=1;i<3;i++) {
                        // Skip a don't care
                        if (( -1 == this.receive_data[i] )||(this.receive_data[i] == undefined)) continue;
                        if ((vscpdata[i] != this.receive_data[i])||(vscpdata[i] == undefined))  return;
                    }

                }
            }

            if ( (this.receive_vscpclass == VSCP_CLASS1_INFORMATION) && 
              (this.receive_vscptype == VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED))
            {
                processRxData(vscpdata);
            }
            else // VSCP_TYPE_INFORMATION_LEVEL_CHANGED
            {
                this.sliderRemoteValue= vscpdata[0];
            }

            //set the remote text recived data
            this.txtCanvas.innerHTML = this.sliderRemoteValue;

            if (vscpws_debug) console.log("****** Data received Correctly ******");
        }

    }
}

//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic
vscpws_slider.prototype.openConnection = function()
{
    this.socket_vscp.send("C;" + "open");
}

//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------
vscpws_slider.prototype.closeConnection = function()
{
    this.socket_vscp.send("C;" + "close");
}

//-----------------------------------------------------------------------------
// time4VariableRead
//-----------------------------------------------------------------------------
vscpws_slider.prototype.time4VariableRead = function(m,s)
{
    var cmd;
    if (vscpws_debug) console.log("time4VariableRead");
    cmd = "C;READVAR;" + m;
    s.send(cmd);
}





















// ----------------------------------------------------------------------------









///////////////////////////////////////////////////////////////////////////////
// vscpws_Event
//

function vscpws_Event( username,            // Username for websocket serever  
                        passwordhash,       // Password hash for websocket
                        serverurl,          // url to VSCP websocket i/f
                        fncallbackresponse, // If set function to call when response arrives
                        fncallbackevent )   // If set function to call when data arrives
                                             
{
    // First set default parameter
    this.username = username;
    this.passwordhash = passwordhash;
    this.fncallbackresponse = (fncallbackresponse && typeof(fncallbackresponse) === "function") ? fncallbackresponse : null; 
    this.fncallbackevent = (fncallbackevent && typeof(fncallbackevent) === "function") ? fncallbackevent : null;      
      
    // Websocket for VSCP daemon communication
    this.socket_vscp = null;
    
    // Flag for connected or unconnected state.
    this.bConnected = false;
    
    // Set the instance name for the control
    instanceName = "vscpws_" + this.elementId;
    
    // move this to global scope
    eval(instanceName + " = this;");
        
    // remember instance name
    this.instanceName = instanceName;
        
    // Open the socket
    this.socket_vscp = vscpws_openSocket(serverurl);
    
    if (null==this.socket_vscp ) {
        alert("Could not open websocket to VSCP server!");
    }
       
    // Bind events	
    this.socket_vscp.onmessage = this.onVSCPMessage.bind(this);	
    this.socket_vscp.onopen = this.onVSCPOpen.bind(this);
    this.socket_vscp.onclose = this.onVSCPClose.bind(this);
       
    //retrieve instance name
    this.getInstanceName = function() {
       return this.instanceName;
    }

    //default property
    this.toString = function() {
       return this.getInstanceName();
    }     
}

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_Event.prototype.isOpen = function() 
{
    return this.bConnected;
}

//-----------------------------------------------------------------------------
// onVSCPOpen
//-----------------------------------------------------------------------------

vscpws_Event.prototype.onVSCPOpen = function() 
{
    if (this.elementId) document.getElementById(this.elementId).textContent = 
            " undefined ";
    if (vscpws_debug) console.log('Open VSCP websocket');
};

//-----------------------------------------------------------------------------
// onVSCPClose
//-----------------------------------------------------------------------------

vscpws_Event.prototype.onVSCPClose = function() 
{
    if (this.elementId) document.getElementById(this.elementId).textContent = 
            " websocket connection CLOSED ";
    if (vscpws_debug) console.log('Close VSCP websocket');
    this.bConnected = false;
};


//-----------------------------------------------------------------------------
// setFilter
//-----------------------------------------------------------------------------
vscpws_Event.prototype.setFilter = function( filter_class, 
                                                filter_type, 
                                                filter_guid,
                                                mask_class,
                                                mask_type,
                                                mask_guid  )
{
    var cmd;
    
    //var filter_class = this.vscpclass;
    //var filter_type = this.vscptype;
    //var filter_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    // Zero for a mask is don't care        
    //var mask_class = -1 != this.vscpclass ? 0xff : 0x00;
    //var mask_type = -1 != this.vscptype ? 0xff : 0x00;
    //var mask_guid = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    if ( ("" != guid) ) {
        guid = guid.split(":");
        for ( i=0; i<16; i++ ) {
            mask_guid[i] = 0xff;
            filter_guid[i] = guid[i];
        }
    }
           
    // Send setfilter command. Format is
    // “C;SETFILTER;filter-priority,filter-class,filter-type, 
    //    filter-GUID;mask-priority,mask-class,mask-type,mask-GUID�?
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
}


//-----------------------------------------------------------------------------
// onVSCPMessage
//-----------------------------------------------------------------------------
// handle VSCP websocket incoming message/event.	
vscpws_Event.prototype.onVSCPMessage = function(msg) 
{	 
    if (vscpws_debug) console.log('onVSCPMessage -' + this.instanceName + 
                                    " " + msg.data);
	
    msgitems = msg.data.split(';');
				
    if ("+" == msgitems[0]){        // check for positive reply
        
        if (vscpws_debug) console.log("Positive reply "+msg.data);
        if ( null !== this.fncallbackresponse ) {
            this.fncallbackresponse.call( this, true, msgitems );                          
        }
        
        respone = msgitems[0].split(";");
        
        if ( "AUTH0" == msgitems[1] ) {
            var msg = "C;AUTH;" + this.username + ";" + 
                    vscp_make_websocket_auth_hash( this.username, 
                                                    this.passwordhash, 
                                                    msgitems[2] );
			this.socket_vscp.send(msg);
        }
        else if ( "AUTH1" == msgitems[1] ) {
        
            // We are authenticated and ready to go to work         
            this.socket_vscp.send("C;" + "OPEN");
       
            // Set filter
            //this.setFilter();
        }
        else if ( "OPEN" == msgitems[1] ) {
            // Open confirmation => We are connected
            this.bConnected = true;
        }
        else if ( "CLOSE" == msgitems[1] ) {
            // Close confirmation => We are NOT connected
            this.bConnected = false;
        }
    }
    else if ("-" == msgitems[0]){   // Check for negative reply
        if (vscpws_debug) console.log("Negative reply " + msg.data);
        if ( null !== this.fncallbackresponse ) {
            this.fncallbackresponse.call( this, false, msgitems );                         
        }
        respone = msgitems[0].split(";");
    }
    else if ("E" == msgitems[0]){   // Check for event
        
        var offset = 0;
 
        //head;class;type;guid,data
        var vscpitems = msgitems[1].split(",");
        
        var vscphead = parseInt(vscpitems[0]);
        var vscpclass = parseInt(vscpitems[1]);
        var vscptype = parseInt(vscpitems[2]);
        var vscpobid = parseInt(vscpitems[3]);
        var vscptimestamp = parseInt(vscpitems[4]);
        var vscpguid = vscpitems[5];
        
        // Check if we have Level I events over Level II
        if ( vscpclass >= 512 && vscpclass < 1024 ) {
            offset = 16;    // Offset into data
            //vscpclass -= 512;
        }
        
        var vscpdata = new Array();
        for (i=0;i<vscpitems.length-6-offset;i++){
            vscpdata[i] = parseInt(vscpitems[offset+6+i]);
            //if (vscpws_debug) console.log("index="+i.toString()+
            //                                " data="+vscpdata[i]);
        }
                    
        if (vscpws_debug) console.log("CLASS = " + vscpclass + 
                " TYPE = " + vscptype + "\n " + msg.data);      
        
        if ( null !== this.fncallbackevent ) {
            this.fncallbackevent.call( this, vscphead,
                                             vscpclass,
                                             vscptype,
                                             vscpobid,
                                             vscptimestamp,
                                             vscpguid,
                                             vscpdata  );
            return;                           
        }
         
    }
}

//-----------------------------------------------------------------------------
// openConnection
//-----------------------------------------------------------------------------
// Open/close event traffic	
vscpws_Event.prototype.openConnection = function() 
{
	this.socket_vscp.send("C;" + "open");
}
    
//-----------------------------------------------------------------------------
// closeConnection
//-----------------------------------------------------------------------------    
vscpws_Event.prototype.closeConnection = function() 
{
	this.socket_vscp.send("C;" + "close");
}


//-----------------------------------------------------------------------------
// sendEvent
//-----------------------------------------------------------------------------

vscpws_Event.prototype.sendEvent = function( vscphead,
                                             vscpclass,
                                             vscptype,
                                             vscpobid,
                                             vscptimestamp,
                                             vscpguid,       // string
                                             vscpdata )      // array or string
{
    var cmd = "E;";
    
    cmd += vscphead.toString() + ",";
    cmd += vscpclass.toString() + ",";
    cmd += vscptype.toString() + ",";
    cmd += vscpobid.toString() + ",";
    cmd += vscptimestamp.toString() + ",";
    cmd += vscpguid + ",";
    
    if ( typeof(vscpdata) == 'object' ) {
        for (i=0;i<vscpdata.length;i++) {
            cmd += vscpdata[i].toString();
            if (i<vscpdata.length-1) cmd += ",";   // No comma for last
        }
    }
    else if ( typeof(vscpdata) == 'string' ) {
        cmd += vscpdata;
    }
    else {
        throw  "vscpws_Event : event data not a valid type.";
    }
    
    // Send command
    if (vscpws_debug) console.log(cmd);
    this.socket_vscp.send(cmd);
}