// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");
var callsTtl = 0;
var smsTtl = 0;

function textBillTtl (){
  
//get a reference to the add button
if (radioBillAddBtn){
    var billItemType = document.querySelector("input[name='billItemType']:checked");
    // billItemType will be 'call' or 'sms'

    }
    if (billItemType.value === "call"){
        callsTtl += 2.75;
    }
    else if (billItemType.value === "sms"){
        smsTtl += 0.75;
    }
    callTotalTwo.innerHTML = callsTtl.toFixed(2);
    smsTotalTwo.innerHTML = smsTtl.toFixed(2);
    var totlCost = callsTtl+ smsTtl;
    totalTwo.innerHTML = totlCost.toFixed(2);
    if (totlCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if (totlCost >= 30){
        totalTwo.classList.add("warning");
    
}
}
radioBillAddBtn.addEventListener('click',textBillTtl);
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
