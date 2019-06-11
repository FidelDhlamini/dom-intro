// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var updateSettings = document.querySelector(".updateSettings");
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var callTotalSettingElem = document.querySelector(".callTotalSettings");
var smsTotalSettingElem = document.querySelector(".smsTotalSettings");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettings = document.querySelector(".updateSettings");
var addBtn = document.querySelector(".addBtn");
var totalSettingsElem = document.querySelector(".totalSettings");
var updateSettngs = document.querySelector(".updateSettngs");

var criticalLevel = criticalLevelSetting.value
var warningLevel = warningLevelSetting.value
var callSetting = callCostSettingElem.value;
var smsSetting = smsCostSettingElem.value;

var callsTt = 0;
var smsTt = 0;
var totlCost = 0;
var totalCostSettings = smsTt+callsTt;


// get refences to all the settings fields
function updateBill() {

    var billItemType = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    // billItemType will be 'call' or 'sms'
    if (billItemType.value === "call") {
        callsTt += Number(callCostSettingElem.value);
    } else if (billItemType.value === "sms") {
        smsTt += Number(smsCostSettingElem.value);
    }
    // totalCostSettings = callsTt+smsTt;
    updateTotals();
}


function updateLevels() {
     criticalLevel = Number(criticalLevelSetting.value);
     warningLevel = Number(warningLevelSetting.value);
     updateStyles()

}


function updateStyles() {
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.remove("danger");



    if (totalCostSettings >= warningLevel && totalCostSettings < criticalLevel) {
        totalSettingsElem.classList.add("warning");
        addBtn.disabled = false;
    }
    if (totalCostSettings >= criticalLevel) {
        totalSettingsElem.classList.add("danger");
        addBtn.disabled = true;
    }



}

function updateTotals() {
    callTotalSettingElem.innerHTML = callsTt.toFixed(2);
    smsTotalSettingElem.innerHTML = smsTt.toFixed(2);
    totalCostSettings = callsTt + smsTt;
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);
    updateStyles();
}




addBtn.addEventListener('click', updateBill);
updateSettngs.addEventListener('click', updateLevels);
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