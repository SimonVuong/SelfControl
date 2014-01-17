function SCOWCreateSiteList(event){

    var SCOWNewSiteLabel = window.prompt("Enter website");
    
    if (SCOWNewSite != null) {
        var SCOWSiteListElement = document.getElementById("SCOWListOfSites");
        SCOWSiteListElement.appendItem(SCOWNewSiteLabel);
    
        SCOWCreateNewCheckboxHidden(SCOWNewSiteLabel);
        
    }
    
}

function SCOWCreateNewCheckboxHidden(SCOWNewSiteLabel){
    var SCOWNewCheckbox = document.createElement("checkbox");
    SCOWNewCheckbox.setAttribute("id", SCOW+SCOWNewSiteLabel+BlockCheckbox);
    SCOWNewCheckbox.setAttribute("hidden", "true");
    SCOWNewCheckbox.setAttribute("disabled", "false");
    SCOWNewCheckbox.setAttribute("label",SelfControlBlockCheckboxLabel);
    
    SCOWDocBlockingVbox = document.getElementByID("SCOWBlockingVboxID");
    SCOWDocBLockingVbox.appendChild("checkbox", SCOWNewCheckbox);
}



function SCOWRevealSiteProperties(event) {
    SCOWCurrBlockCheckbox.hidden = "true";
    
    SCOWSelectedSiteBlockCheckboxID = "SCOW"+this.selectedItem.label+"BlockCheckbox";
    SCOWSelectedSiteBlockCheckboxElement = document.getElementById("SCOWSelectedSiteBlockCheckboxID");
    SCOWSelectedSiteBlockCheckboxElement.hidden = "false";
    SCOWSelectedSiteBLockCheckboxElement.disabled = "false";
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