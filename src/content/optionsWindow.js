var SCOWBlockVboxArray = new Array();
var SCOWTimeVboxArray = new Array();
var SCOWSiteListCount = undefined;


function SCOWCreateNewBlockCheckbox(){
    var SCOWNewBlockCheckboxEle = document.createElement("checkbox");
    
    //SCOWNewBlockCheckboxEle.setAttribute("id", SCOWNewSiteName+"Id"+SCOWSiteListCount)
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWNewCheckboxLabel = SCOWStringBundle.getString("SCOWBlockCheckboxLabel");
    SCOWNewBlockCheckboxEle.setAttribute("label", SCOWNewCheckboxLabel);
    
    SCOWNewBlockCheckboxEle.setAttribute("hidden", "false");
    SCOWNewBlockCheckboxEle.setAttribute("disabled", "false");
    SCOWNewBlockCheckboxEle.setAttribute("oncommand", "SCOWSwitchBlockInputs()");
    
    return SCOWNewBlockCheckboxEle;
}

function SCOWCreateSetDateBlockButton(){
    var SCOWNewSetDateBlockButtonEle = document.createElement("button");
    
    //SCOWNewHoursBlockButtonEle.setAttribute("id", SCOWNewSiteName+"Id"+SCOWSiteListCount);
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWSetDateBlockButtonLabel = SCOWStringBundle.getString("SCOWSetDateBlockButtonLabel");
    SCOWNewSetDateBlockButtonEle.setAttribute("label", SCOWSetDateBlockButtonLabel);
    
    SCOWNewSetDateBlockButtonEle.setAttribute("hidden", "false");
    SCOWNewSetDateBlockButtonEle.setAttribute("disabled", "true");
    //SCOWNewUntilBlockButtonEle.setAttribute("oncommand", SCOWInputUntil());
    
    return SCOWNewSetDateBlockButtonEle;
}

function SCOWCreateDatepicker(){
    var SCOWNewDatepickerEle = document.createElement("datepicker");
    SCOWNewDatepickerEle.setAttribute("disabled", "true");
    SCOWNewDatepickerEle.setAttribute("type", "grid");
    
    return SCOWNewDatepickerEle;
}

function SCOWCreateTimepicker(){
    var SCOWNewTimepickerEle = document.createElement("timepicker");
    SCOWNewTimepickerEle.setAttribute("hideseconds","true");
    SCOWNewTimepickerEle.setAttribute("disabled","true");
    
    return SCOWNewTimepickerEle;
/*
    var SCOWNewTimepickerEle = document.createElement("hbox");
    var SCOWNewHourspickerEle = document.createElement("textbox");
    SCOWNewHourspickerEle.setAttribute("disabled", "true");
    SCOWNewHourspickerEle.setAttribute("type", "number");
    SCOWNewHourspickerEle.min = "0";
    SCOWNewHourspickerEle.max = "12";
    SCOWNewHourspickerEle.setAttribute("width","50");
    
    var SCOWNewTimeColon = document.createElement("description");
    SCOWNewTimeColon.setAttribute("value",":");
    
    var SCOWNewMinutespickerEle = document.createElement("textbox");
    SCOWNewMinutespickerEle.setAttribute("disabled", "true");
    SCOWNewMinutespickerEle.setAttribute("type", "number");
    SCOWNewMinutespickerEle.setAttribute("min", "0");
    SCOWNewMinutespickerEle.setAttribute("max", "59");
    SCOWNewMinutespickerEle.setAttribute("width","50");
    
    var SCOWNewAMPMMenulist = document.createElement("menulist");
    SCOWNewAMPMMenulist.setAttribute("disabled", "true");
    var SCOWNewAMPMMenupopup = document.createElement("menupopup");
    
    var SCOWNewAMOption = document.createElement("menuitem");
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWNewAMOptionLabel = SCOWStringBundle.getString("SCOWNewAMOptionLabel");
    SCOWNewAMOption.setAttribute("label",SCOWNewAMOptionLabel);

    var SCOWNewPMOption = document.createElement("menuitem");
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWNewPMOptionLabel = SCOWStringBundle.getString("SCOWNewPMOptionLabel");
    SCOWNewPMOption.setAttribute("label",SCOWNewPMOptionLabel);

    
    SCOWNewAMPMMenupopup.appendChild(SCOWNewAMOption);
    SCOWNewAMPMMenupopup.appendChild(SCOWNewPMOption);
    SCOWNewAMPMMenulist.appendChild(SCOWNewAMPMMenupopup);
    
    SCOWNewTimepickerEle.appendChild(SCOWNewHourspickerEle);
    SCOWNewTimepickerEle.appendChild(SCOWNewTimeColon);
    SCOWNewTimepickerEle.appendChild(SCOWNewMinutespickerEle);
    SCOWNewTimepickerEle.appendChild(SCOWNewAMPMMenulist);
    
    
    return SCOWNewTimepickerEle;
*/
}
/*
function SCOWCreateMinutesBlockButton(SCOWNewSiteName){
    var SCOWNewMinutesBlockButtonEle = document.createElement("button");
    
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWMinutesBlockButtonLabel = SCOWStringBundle.getString("SCOWMinutesBlockButtonLabel");
    SCOWNewMinutesBlockButtonEle.setAttribute("label", SCOWMinutesBlockButtonLabel);
    
    SCOWNewMinutesBlockButtonEle.setAttribute("hidden", "false");
    SCOWNewMinutesBlockButtonEle.setAttribute("disabled", "false");
    SCOWNewMinutesBlockButtonEle.setAttribute("oncommand", SCOWInputMinutes());
    
    return SCOWNewMinutesBlockButtonEle;
}
*/

function SCOWCreateUntilLabel(){
    var SCOWNewUntilLabelEle = document.createElement("label");
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWUntilLabelValue = SCOWStringBundle.getString("SCOWUntilLabelValue");
    SCOWNewUntilLabelEle.setAttribute("value",SCOWUntilLabelValue);
    
    return SCOWNewUntilLabelEle;
}

function SCOWCreateBlockVbox(SCOWNewBlockCheckbox, SCOWNewSetDateButton,
                             SCOWNewUntilLabel, SCOWNewDatepicker, SCOWNewTimepicker){
    var SCOWNewBlockVboxEle = document.createElement("vbox");
   // SCOWNewBlockVboxEle.setAttribute("id", SCOWNewSiteName+"Id"+SCOWSiteListCount);
    SCOWNewBlockVboxEle.appendChild(SCOWNewBlockCheckbox);
    SCOWNewBlockVboxEle.appendChild(SCOWNewUntilLabel);
    SCOWNewBlockVboxEle.appendChild(SCOWNewDatepicker);
    SCOWNewBlockVboxEle.appendChild(SCOWNewTimepicker);
    SCOWNewBlockVboxEle.appendChild(SCOWNewSetDateButton);
   // SCOWNewBlockVboxEle.appendChild(SCOWNewMinutesButton);
    
    return SCOWNewBlockVboxEle;
}


function SCOWCreateNewBlockVbox(){
    var SCOWNewBlockCheckboxEle = SCOWCreateNewBlockCheckbox();
    var SCOWNewSetDateButtonEle = SCOWCreateSetDateBlockButton();
    var SCOWNewUntilLabelEle = SCOWCreateUntilLabel();
   // var SCOWNewMinutesButtonEle = SCOWCreateMinutesBlockButton(SCOWNewSiteName);
    var SCOWNewDatepickerEle = SCOWCreateDatepicker();
    var SCOWNewTimepickerEle = SCOWCreateTimepicker();
    var SCOWNewBlockVboxEle = SCOWCreateBlockVbox(SCOWNewBlockCheckboxEle, SCOWNewSetDateButtonEle,
                                                  SCOWNewUntilLabelEle, SCOWNewDatepickerEle, SCOWNewTimepickerEle);

    return SCOWNewBlockVboxEle;
}

function SCOWCreateNewTimeVbox(){
    var SCOWNewTodayTimeDesEle = SCOWCreateTodayTime();
    var SCOWNewWeekTimeDesEle = SCOWCreateWeekTime();
    var SCOWNewMonthTimeDesEle = SCOWCreateMonthTime();
    var SCOWNewYearTimeDesEle = SCOWCreateYearTime();
    var SCOWNewRemainingTimeDesEle = SCOWCreateRemainingTime();
    var SCOWNewTimeVboxEle = SCOWCreateTimeVbox(SCOWNewTodayTimeDesEle, SCOWNewWeekTimeDesEle,
                              SCOWNewMonthTimeDesEle, SCOWNewYearTimeDesEle, SCOWNewRemainingTimeDesEle);
    
    return SCOWNewTimeVboxEle;
}

function SCOWCreateTimeVbox(SCOWNewTodayTimeDesEle, SCOWNewWeekTimeDesEle,
                            SCOWNewMonthTimeDesEle, SCOWNewYearTimeDesEle, SCOWNewSetDateTimeDesEle) {
    var SCOWNewTimeVboxEle = document.createElement("vbox");
    //SCOWNewTimeVboxEle.setAttribute("id", SCOWNewSiteName+)
    SCOWNewTimeVboxEle.appendChild(SCOWNewTodayTimeDesEle);
    SCOWNewTimeVboxEle.appendChild(SCOWNewWeekTimeDesEle);
    SCOWNewTimeVboxEle.appendChild(SCOWNewMonthTimeDesEle);
    SCOWNewTimeVboxEle.appendChild(SCOWNewYearTimeDesEle);
    SCOWNewTimeVboxEle.appendChild(SCOWNewSetDateTimeDesEle);
    
    return SCOWNewTimeVboxEle;
}

function SCOWCreateTodayTime() {
    var SCOWNewTodayDescriptEle = document.createElement("description");
    //SCOWNewTodayDescriptEle.setAttribute("id", SCOWNewSiteName+"TodayTimeId"+SCOWSiteListCount);
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWTodayTimeValue = SCOWStringBundle.getString("SCOWTodayTime");
    SCOWNewTodayDescriptEle.setAttribute("value", SCOWTodayTimeValue)
    
    return SCOWNewTodayDescriptEle;
}

function SCOWCreateWeekTime() {
    var SCOWNewWeekDescriptEle = document.createElement("description");
   // SCOWNewWeekDescriptEle.setAttribute("id", SCOWNewSiteName+"WeekTimeId"+SCOWSiteListCount);
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWWeekTimeValue = SCOWStringBundle.getString("SCOWWeekTime");
    SCOWNewWeekDescriptEle.setAttribute("value", SCOWWeekTimeValue)
    
    return SCOWNewWeekDescriptEle;
}

function SCOWCreateMonthTime() {
    var SCOWNewMonthDescriptEle = document.createElement("description");
   // SCOWNewMonthDescriptEle.setAttribute("id", SCOWNewSiteName+"MonthTimeId"+SCOWSiteListCount);
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWMonthTimeValue = SCOWStringBundle.getString("SCOWMonthTime");
    SCOWNewMonthDescriptEle.setAttribute("value", SCOWMonthTimeValue)
    
    return SCOWNewMonthDescriptEle;
}

function SCOWCreateYearTime() {
    var SCOWNewYearDescriptEle = document.createElement("description");
   // SCOWNewYearDescriptEle.setAttribute("id", SCOWNewSiteName+"YearTimeId"+SCOWSiteListCount);
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWYearTimeValue = SCOWStringBundle.getString("SCOWYearTime");
    SCOWNewYearDescriptEle.setAttribute("value", SCOWYearTimeValue)
    
    return SCOWNewYearDescriptEle;
}

function SCOWCreateRemainingTime() {
    var SCOWNewRemainingDescriptEle = document.createElement("description");
   // SCOWNewRemaingingDescriptEle.setAttribute("id", SCOWNewSiteName+"RemaingingTimeId"+SCOWSiteListCount);
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundleId");
    var SCOWRemainingTimeValue = SCOWStringBundle.getString("SCOWRemainingTime");
    SCOWNewRemainingDescriptEle.setAttribute("value", SCOWRemainingTimeValue)
    
    return SCOWNewRemainingDescriptEle;
}

function SCOWCreateSiteList(event){
    
    var SCOWNewSiteName = window.prompt("Enter website");
    
    if (SCOWNewSiteName != null) {
        
        if (SCOWSiteListCount == undefined) {
            SCOWSiteListCount = 0;
        }else{
            SCOWSiteListCount++;
        }
        
        var SCOWSiteListElement = document.getElementById("SCOWListOfSites");
        SCOWSiteListElement.appendItem(SCOWNewSiteName);
        
        var SCOWNewBlockVboxEle = SCOWCreateNewBlockVbox(SCOWNewSiteName);
        var SCOWNewTimeVboxEle = SCOWCreateNewTimeVbox(SCOWNewSiteName);
        
        SCOWBlockVboxArray.push(SCOWNewBlockVboxEle);
        SCOWTimeVboxArray.push(SCOWNewTimeVboxEle);
        
    }  
}

function SCOWSwitchBlockInputs(){
    var SCOWSelectedSiteIndex = document.getElementById("SCOWListOfSites").selectedIndex;
    var SCOWSelectedSiteVbox = SCOWBlockVboxArray[SCOWSelectedSiteIndex];
    
    //firstChild is BlockCheckbox
    if (SCOWSelectedSiteVbox.firstChild.checked) {
        //set date button
        SCOWSelectedSiteVbox.lastChild.setAttribute("disabled", "false");
        
        //datepick
        SCOWSelectedSiteVbox.lastChild.previousSibling.previousSibling.setAttribute("disabled", "false");
        
        //timepick
        SCOWSelectedSiteVbox.lastChild.previousSibling.removeAttribute("disabled");
/*      
        //timepick.menulist
        SCOWSelectedSiteVbox.lastChild.previousSibling.lastChild.setAttribute("disabled", "false");
        //timepick.hours
        SCOWSelectedSiteVbox.lastChild.previousSibling.firstChild.setAttribute("disabled","false")
        //timepick.minutes
        SCOWSelectedSiteVbox.lastChild.previousSibling.lastChild.previousSibling.setAttribute("disabled", "false");
*/

    }else{
         //set date button
        SCOWSelectedSiteVbox.lastChild.setAttribute("disabled", "true");
        
        //datepick
        SCOWSelectedSiteVbox.lastChild.previousSibling.previousSibling.setAttribute("disabled", "true"); 
        
        //timepick
        SCOWSelectedSiteVbox.lastChild.previousSibling.removeAttribute("disabled");
/*
        //timepick.menulist
        SCOWSelectedSiteVbox.lastChild.previousSibling.lastChild.setAttribute("disabled", "true");
        //timepick.hours
        SCOWSelectedSiteVbox.lastChild.previousSibling.firstChild.setAttribute("disabled","true")
        //timepick.minutes
        SCOWSelectedSiteVbox.lastChild.previousSibling.lastChild.previousSibling.setAttribute("disabled", "true");        
*/       
      
    }
    
    
    
}

function SCOWRevealSiteProperties(event) {
    var SCOWSelectedSiteIndex = document.getElementById("SCOWListOfSites").selectedIndex;
    
    var SCOWHboxEle = document.getElementById("SCOWHboxId");
    var SCOWOldBlockVbox = SCOWHboxEle.lastChild;
    var SCOWNewBlockVbox = SCOWBlockVboxArray[SCOWSelectedSiteIndex];
    SCOWOldBlockVbox = SCOWHboxEle.replaceChild(SCOWNewBlockVbox, SCOWOldBlockVbox);
    
    var SCOWGroupboxEle = document.getElementById("SCOWGroupboxId");
    var SCOWOldTimeVbox = SCOWGroupboxEle.lastChild;
    var SCOWNewTimeVbox = SCOWTimeVboxArray[SCOWSelectedSiteIndex];
    SCOWOldTimeVbox = SCOWGroupboxEle.replaceChild(SCOWNewTimeVbox, SCOWOldTimeVbox);
    
    
    
    //var SCOWOldBlockVboxIndex = SCOWOldBlockVbox.id.
    
    /*
    var SCOWCurrBlockCheckboxEle = document.getElementById("SCOWBlockCheckbox");
    SCOWCurrBlockCheckboxEle.hidden = "true";
    
    var SCOWSiteListEle = document.getElementById("SCOWListOfSites");
    var SCOWSelectedSiteBlockCheckboxId = "SCOW"+SCOWSiteListEle.selectedItem.label+"BlockCheckboxId";
    
    var SCOWSelectedSiteBlockCheckboxEle = document.getElementById(SCOWSelectedSiteBlockCheckboxId);
    SCOWSelectedSiteBlockCheckboxEle.setAttribute("hidden", "false");
    SCOWSelectedSiteBlockCheckboxEle.setAttribute("disabled", "false");
    */
}



 /*       
        var SCOWTodayDurationElement = document.getElementById(SCOWDurationTodayID);
        var SCOWTodayDuration = SCOWTodayDurationElement.getAttribute(value);
        SCOWTodayDuration = SCOWTodayDuration + "0";
        SCOWTodayDurationElement.setAttribute(value, SCOWTodayDuration)
        
        var SCOWWeekDurationElement = document.getElementById(SCOWDurationWeekID);
        var SCOWWeekDuration = SCOWWeekDurationElement.getAttribute(value);
        SCOWWeekDuration = SCOWWeekDuration + "0";
        SCOWWeekDurationElement.setAttribute(value, SCOWWeekDuration)
        
        var SCOWMonthDurationElement = document.getElementById(SCOWDurationMonthID);
        var SCOWMonthDuration = SCOWTodayDurationElement.getAttribute(value);
        SCOWMonthDuration = SCOWTodayDuration + "0";
        SCOWMonthDurationElement.setAttribute(value, SCOWTodayDuration)
        
        var SCOWYearDurationElement = document.getElementById(SCOWDurationYearID);
        var SCOWYearDuration = SCOWYearDurationElement.getAttribute(value);
        SCOWYearDuration = SCOWYearDuration + "0";
        SCOWYearDurationElement.setAttribute(value, SCOWYearDuration)
        
        var SCOWRemainingDurationElement = document.getElementById(SCOWDurationRemainingID);
        var SCOWRemainingDuration = SCOWRemainingDurationElement.getAttribute(value);
        SCOWRemainingDuration = SCOWRemainingDuration + "0";
        SCOWRemainingDurationElement.setAttribute(value, SCOWRemainingDuration)
*/
 
 
 
 /*
  *
  *okay, everytime you make a site, append it to the list.
  *make site.vboxDuration
  *make site.vboxBlocking
  *extend DurrationArray
  *extend BlockingArray
  *
  *
  *
  *revealsite
  * replaceVBoxDuration curr with selected
  *     get selected
  *         get selectedIndex
  *         access arrayIndex
  *     x = curr
  *     num = curr.idnumber
  *     put curr in propper array spot num
  *
  * replace VboxBlocking curr with selected
  *     get selected
  *         get selectedIndex
  *         access arrayIndex
  *     x = curr
  *     num = curr.idnumber
  *     put curr in propper array spot num
  */