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


/*
    Licence:
    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version
    2 of the License, or (at your option) any later version.

    This file is part of the UiMagician Project (https://sites.google.com/site/uimagician/)

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this file see the file COPYING.  If not, write to
    the Free Software Foundation, 59 Temple Place - Suite 330,
    Boston, MA 02111-1307, USA.

    As a special exception, if other files instantiate templates or use macros
    or inline functions from this file, or you compile this file and link it
    with other works to produce a work based on this file, this file does not
    by itself cause the resulting work to be covered by the GNU General Public
    License. However the source code for this file must still be made available
    in accordance with section (3) of the GNU General Public License.

    This exception does not invalidate any other reasons why a work based on
    this file might be covered by the GNU General Public License.

    Alternative licenses for UiMagician may be arranged by contacting :--
    Tool Author : Dinesh Guleria
    din.gulu.er@gmail.com  https://sites.google.com/site/uimagician/
    Group : https://groups.google.com/forum/#!forum/uimagician
    Mailinglist : uimagician@googlegroups.com
*/



#include "widgetimageselectorvariableswitch.h"
#include "ui_widgetimageselectorvariableswitch.h"

WidgetImageSelectorVariableSwitch::WidgetImageSelectorVariableSwitch( QString &imageData ,QWidget *parent) :
    QDialog(parent),
    imageDataRef(imageData),
    ui(new Ui::WidgetImageSelectorVariableSwitch)
{
    ui->setupUi(this);

    int selectTopItem;

    //Set columns count
    ui->WidgetImageSelectorVariableSwitchTreeWidget->setColumnCount(3);
    if(QTreeWidgetItem* header = ui->WidgetImageSelectorVariableSwitchTreeWidget->headerItem()) {
      header->setText(0, SET_VARIABLE_SWITCH_COLUMN_ZERO_HEADER_TEXT);
      header->setText(1, SET_VARIABLE_SWITCH_COLUMN_ONE_HEADER_TEXT);
      header->setText(2, SET_VARIABLE_SWITCH_COLUMN_TWO_HEADER_TEXT);
    }
    /*Resize columns to content
    for(int i = 0; i < 3; i++){
        ui->WidgetImageSelectorTreeWidget->resizeColumnToContents(i);
    }*/
    AddRoot();

    // Select the image
    if(imageData != NULL)
    {
        selectTopItem = imageData.toInt() - 1u;
    }
    else
    {
        selectTopItem = 0;
    }

    // Select the top level Item
    ui->WidgetImageSelectorVariableSwitchTreeWidget->setCurrentItem(ui->WidgetImageSelectorVariableSwitchTreeWidget->topLevelItem(selectTopItem));

}

WidgetImageSelectorVariableSwitch::~WidgetImageSelectorVariableSwitch()
{
    delete ui;
}

void WidgetImageSelectorVariableSwitch::AddRoot()
{
    QList<QTreeWidgetItem *> items;
    QTreeWidgetItem *newItem;
    QString imageOn;
    QString imageOff;
    QString imageSlider;
    QString imageText = "0";
    //QMessageBox *msgBox 	= new QMessageBox();

    QSize t2(10, 12);
    t2.scale(60, 60, Qt::KeepAspectRatio);

    //Variable button
    for (int i = 1; i <= TOTAL_VARIABLE_SWITCH_BUTTON_TYPES; ++i)
    {
        switch ( i ) {
        case 1:
            imageOn = ":/Images/Images/button_variable/up.jpg";
            imageOff = ":/Images/Images/button_variable/down.jpg";
            imageText  = "1";
            break;

        default:
            imageOn = ":/Images/Images/button_variable/up.jpg";
            imageOff = ":/Images/Images/button_variable/down.jpg";
            imageText  = "default";
            break;

        }

        newItem = new  QTreeWidgetItem(ui->WidgetImageSelectorVariableSwitchTreeWidget);
        newItem->setIcon(0, QIcon(imageOn));
        newItem->setIcon(1, QIcon(imageOff));
        newItem->setText(2, imageText);
        items.append(newItem);

    }

    // variable slider
    imageSlider = ":/Images/Images/button_variable/sliderDefault.png";
    imageText = FIRST_SLIDER_IMAGE;
    newItem = new  QTreeWidgetItem(ui->WidgetImageSelectorVariableSwitchTreeWidget);
    newItem->setIcon(0, QIcon(imageSlider));
    newItem->setText(2, imageText);
    items.append(newItem);

    ui->WidgetImageSelectorVariableSwitchTreeWidget->insertTopLevelItems(0,items);
    ui->WidgetImageSelectorVariableSwitchTreeWidget->setIconSize(t2/*QSize(80,48)*/);

}

void WidgetImageSelectorVariableSwitch::on_WidgetImageSelectorVariableSwitchPushButtonOk_clicked()
{
    int currentNum = ui->WidgetImageSelectorVariableSwitchTreeWidget->currentIndex().row() + 1u;

    imageDataRef = QString::number(currentNum);

    //Emit a close handler
    emit close();
}
