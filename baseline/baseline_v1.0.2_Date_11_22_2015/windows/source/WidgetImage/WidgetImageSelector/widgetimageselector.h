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


#ifndef WIDGETIMAGESELECTOR_H
#define WIDGETIMAGESELECTOR_H

#include <QtGui>
#include <QDialog>

#define SET_COLUMN_ZERO_HEADER_TEXT "ON   Image              "
#define SET_COLUMN_ONE_HEADER_TEXT  "OFF  Image              "
#define SET_COLUMN_TWO_HEADER_TEXT  "Image Text"

#define TOTAL_BUTTON_TYPES 96

namespace Ui {
class WidgetImageSelector;
}

class WidgetImageSelector : public QDialog
{
    Q_OBJECT
    
public:
    explicit WidgetImageSelector( QString &imageData ,QWidget *parent = 0);
    ~WidgetImageSelector();

    void AddRoot();

    QString &imageDataRef;

private slots:

    void on_WidgetImageSelectorPushButtonOk_clicked();

private:
    Ui::WidgetImageSelector *ui;
};

#endif // WIDGETIMAGESELECTOR_H
