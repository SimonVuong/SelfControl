
var SCOWSiteHolderArray = [];

function SCOWCreateSiteList(event){

    var SCOWNewSiteLabel = window.prompt("Enter website");
    
    if (SCOWNewSiteLabel != null) {
        var SCOWSiteListElement = document.getElementById("SCOWListOfSites");
        SCOWSiteListElement.appendItem(SCOWNewSiteLabel);
        SCOWSiteHolderArray.push()
    
        SCOWCreateNewCheckboxHidden(SCOWNewSiteLabel);
        
    }  
}

function SCOWCreateNewCheckboxHidden(SCOWNewSiteLabel){
    var SCOWNewCheckbox = document.createElement("checkbox");
    SCOWNewCheckbox.setAttribute("id", "SCOW"+SCOWNewSiteLabel+"BlockCheckboxId");
    SCOWNewCheckbox.setAttribute("hidden", "true");
    SCOWNewCheckbox.setAttribute("disabled", "false");
    
    var SCOWStringBundle = document.getElementById("SCOWStringBundle");
    var SCOWNewCheckboxLabel = SCOWStringBundle.getString("SCOWBlockCheckboxLabel");
    SCOWNewCheckbox.setAttribute("label",SCOWNewCheckboxLabel);
    
    var SCOWDocBlockingVbox = document.getElementById("SCOWBlockingVboxID");
    SCOWDocBlockingVbox.appendChild(SCOWNewCheckbox);
}



function SCOWRevealSiteProperties(event) {
    var SCOWCurrBlockCheckboxEle = document.getElementById("SCOWBlockCheckbox");
    SCOWCurrBlockCheckboxEle.hidden = "true";
    
    var SCOWSiteListEle = document.getElementById("SCOWListOfSites");
    var SCOWSelectedSiteBlockCheckboxId = "SCOW"+SCOWSiteListEle.selectedItem.label+"BlockCheckboxId";
    
    var SCOWSelectedSiteBlockCheckboxEle = document.getElementById(SCOWSelectedSiteBlockCheckboxId);
    SCOWSelectedSiteBlockCheckboxEle.setAttribute("hidden", "false");
    SCOWSelectedSiteBlockCheckboxEle.setAttribute("disabled", "false");
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