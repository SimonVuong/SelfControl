function SCOWSiteObj(){
    this.SCOWSiteObjAddition = window.prompt("Enter website");
    
    if (this.SCOWSiteObjAddition != null) {
        
        if (SCOWSiteObj.count == undefined){
            SCOWSiteObj.count = 1;
        }else{
            SCOWSiteObj.count++;
        }
  
    }
}


function SCOWCreateSiteList(event){
    var SCOWSite = new SCOWSiteObj();
    var SCOWSiteAddition = SCOWSite.SCOWSiteObjAddition;
    
    if (SCOWSiteAddition != null) {
        var SCOWSiteListElement = document.getElementById("SCOWListOfSites");
        SCOWSiteListElement.appendItem(SCOWSiteAddition)
    
    }
    
    
    
}

function SCOWRevealSiteProperties(event) {
    this.selectedItem.
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