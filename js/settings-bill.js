// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var updateSettings = document.querySelector(".updateSettings");
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettinElem = document.querySelector(".smsCostSetting");
var callTotalSettingElem = document.querySelector(".callTotalSettings");
var smsTotalSettingElem = document.querySelector(".smsTotalSettings");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettings = document.querySelector(".updateSettings");
var updateSettingsBtn = document.querySelector(".updateSettingsBtn");
var totalSettingsElem =  document.querySelector(".totalSettings");
var updateSettngs = document.querySelector(".updateSettngs");



var callsTt = 0;
var smsTt = 0;
var totlCost = 0;
var totalCostSettings = 0;


// get refences to all the settings fields
function textBillTt(){
 
 // get a reference to the add button
    if (updateSettingsBtn){
        var billItemType = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        // billItemType will be 'call' or 'sms'
    console.log(billItemType.value)
        }
        if (billItemType.value === "call"){
            callsTt += Number(callCostSettingElem.value);
        }
        else if (billItemType.value === "sms"){
            smsTt += Number(smsCostSettinElem.value);
        }
        console.log(callsTt)
        callTotalSettingElem.innerHTML = callsTt.toFixed(2);
        smsTotalSettingElem.innerHTML = smsTt.toFixed(2);
        var totalCostSettings = callsTt + smsTt;
        totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);

        var criticalLevel = criticalLevelSetting.value
        var warningLevel = warningLevelSetting.value
        if (totalCostSettings >= criticalLevel){
            // adding the danger class will make the text red
            totalSettingsElem.classList.add("danger");
            updateSettingsBtn.disabled = true;
        }
        if (totalCostSettings >= warningLevel){
            totalSettingsElem.classList.add("warning");
    
    }  
    
    }
function update(){
    var criticalLevel = criticalLevelSetting.value;
    var warningLevel = warningLevelSetting.value;
    var call = callTotalSettingElem.value;
    var sms =  smsTotalSettingElem.value;

    if (updateSettngs){
        totalSettingsElem.classList.remove('danger'); 
    }
    
}

    updateSettingsBtn.addEventListener('click',textBillTt);
    updateSettngs.addEventListener('click',update);
//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
