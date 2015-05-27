/*---------------------------------------------------------------------------
** Project Name: UiMagician
** #Archive:
** #Author: # Dinesh Guleria
** #Date: # 15-03-2013
** Copyright (C) 2012-2014 Dinesh Guleria, VSCP Developer
**----------------------------------------------------------------------------
** #Revision: 1 #
**----------------------------------------------------------------------------
** Target system: QT - 4.8.1
** Compiler:
**----------------------------------------------------------------------------
**               A U T H O R   I D E N T I T Y
**----------------------------------------------------------------------------
** Initials           Name                     Project
** --------           ---------------------    -------------------------------
** DINESH.GULERIA     Dinesh Guleria           UiMagician
**----------------------------------------------------------------------------
**               R E V I S I O N   H I S T O R Y
**----------------------------------------------------------------------------
** #Log:
** 1. Creation of the file.
** 2. Review the implementation to bring it to 100%.
**--------------------------------------------------------------------------*/


#ifndef WIDGETWEBSOCKETPACKETSWITCH_H
#define WIDGETWEBSOCKETPACKETSWITCH_H

#include <QtGui>
#include <QDialog>
#include "../../uiMagicianConfiguration.h"

namespace Ui {
class WidgetWebsocketPacketSwitch;
}

class WidgetWebsocketPacketSwitch : public QDialog
{
    Q_OBJECT
    
public:
    explicit WidgetWebsocketPacketSwitch(T_widgetWebsocketPacketSwitch &switchPacket, QWidget *parent = 0);
    ~WidgetWebsocketPacketSwitch();

    T_widgetWebsocketPacketSwitch &switchPacket_modify;

    //Copy switch packet to Dialog
    void CopySwitchPacket();
    
    //Routines to get value of class & types
    vscpClassTypeObject ClassTypeObject;

private:
    Ui::WidgetWebsocketPacketSwitch *ui;

    QList<QString> listTrueFalse;
    QList<QString> listClass;
    QList<QString> listType;
    QList<QString> listAction;
    QList<QString> listPriority;

    void setListValue();

private slots :
    //void txOnClassListWidgetcurrentItemChanged_slot();
    //void txOffClassListWidgetcurrentItemChanged_slot();
    //void rxOnClassListWidgetcurrentItemChanged_slot();
    //void rxOffClassListWidgetcurrentItemChanged_slot();
    void on_OkPushButton_clicked();
    void on_CancelPushButton_clicked();
};

#endif // WIDGETWEBSOCKETPACKETSWITCH_H
