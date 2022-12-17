//getinputs and buttons and outputs
//inputs
const totalBillElement = document.getElementById("billplaceholder");
const totalPeople = document.getElementById("peopleplaceholder");
const invalidtextelement = document.getElementById("invalidtext");
const customInput = document.getElementById("custom");
const initialTotalBillElement = document.getElementById("initialtotalamount");
const initialTotalTip = document.getElementById("totaltipamount");
//buttons
const fiveButton = document.getElementById("five");
const tenButon = document.getElementById("ten");
const fifteenButton = document.getElementById("fifteen");
const twentyFiveButton = document.getElementById("twentyfive");
const fifityButton = document.getElementById("fifty");
//outputs
const totalPerPersonElement = document.getElementById("totalamount");
const tipPerPersonElement = document.getElementById("tipamount");
//get values of all variables
// const numberOfPeople = Number(totalPeople.value);
// console.log(totalPeople.value);
let tipPercentage = 0;
const calculateBill = ()=>{
    if (totalPeople.value <= 0) {
        totalPeople.classList.add("invalid");
        invalidtextelement.style.display = "block";
        console.log("less than zereo");
        return;
    }
    totalPeople.classList.remove("invalid");
    invalidtextelement.style.display = "none";
    const totalBill = Number(totalBillElement.value);
    // console.log(totalBill);
    const tip = tipPercentage;
    totalTip = totalBill * tip / 100;
    // console.log(totalTip);
    const totalPeoplePresent = Number(totalPeople.value);
    tipPerPerson = (totalTip / totalPeoplePresent).toFixed(2);
    // console.log(tipPerPerson);
    const totalBillPerPerson = ((totalBill + totalTip) / totalPeoplePresent).toFixed(2);
    tipPerPersonElement.innerHTML = `$${tipPerPerson}`;
    totalPerPersonElement.innerHTML = `$${totalBillPerPerson}`;
    initialTotalBillElement.innerHTML = `$${(totalBill + totalTip).toFixed(2)}`;
    initialTotalTip.innerHTML = `$${totalTip.toFixed(2)}`;
};
const five = ()=>{
    tipPercentage = 5;
    fiveButton.classList.add("buttonclicked");
    // fiveButton.classList.remove('buttonclicked')
    tenButon.classList.remove("buttonclicked");
    fifteenButton.classList.remove("buttonclicked");
    twentyFiveButton.classList.remove("buttonclicked");
    fifityButton.classList.remove("buttonclicked");
    calculateBill();
};
const ten = ()=>{
    tipPercentage = 10;
    tenButon.classList.add("buttonclicked");
    fiveButton.classList.remove("buttonclicked");
    // tenButon.classList.remove('buttonclicked')
    fifteenButton.classList.remove("buttonclicked");
    twentyFiveButton.classList.remove("buttonclicked");
    fifityButton.classList.remove("buttonclicked");
    calculateBill();
};
const fifteen = ()=>{
    tipPercentage = 15;
    fifteenButton.classList.add("buttonclicked");
    fiveButton.classList.remove("buttonclicked");
    tenButon.classList.remove("buttonclicked");
    // fifteenButton.classList.remove('buttonclicked')
    twentyFiveButton.classList.remove("buttonclicked");
    fifityButton.classList.remove("buttonclicked");
    calculateBill();
};
const twentyfive = ()=>{
    tipPercentage = 25;
    twentyFiveButton.classList.add("buttonclicked");
    fiveButton.classList.remove("buttonclicked");
    tenButon.classList.remove("buttonclicked");
    fifteenButton.classList.remove("buttonclicked");
    // twentyFiveButton.classList.remove('buttonclicked')
    fifityButton.classList.remove("buttonclicked");
    calculateBill();
};
const fifty = ()=>{
    tipPercentage = 50;
    fifityButton.classList.add("buttonclicked");
    fiveButton.classList.remove("buttonclicked");
    tenButon.classList.remove("buttonclicked");
    fifteenButton.classList.remove("buttonclicked");
    twentyFiveButton.classList.remove("buttonclicked");
    // fifityButton.classList.remove('buttonclicked')
    calculateBill();
};
const customTip = ()=>{
    // console.log('custominout called');
    const customtip = Number(customInput.value);
    // console.log(customTip);
    tipPercentage = customtip;
};
const reset = ()=>{
    tipPercentage = 0;
    totalBillElement.value = 0;
    totalPeople.value = 1;
    customInput.value = "Custom";
    totalPerPersonElement.innerHTML = `$0.00`;
    tipPerPersonElement.innerText = `$0.00`;
    initialTotalBillElement.innerText = `$0.00`;
    initialTotalTip.innerText = `$0.00`;
    fiveButton.classList.remove("buttonclicked");
    tenButon.classList.remove("buttonclicked");
    fifteenButton.classList.remove("buttonclicked");
    twentyFiveButton.classList.remove("buttonclicked");
    fifityButton.classList.remove("buttonclicked");
};

//# sourceMappingURL=index.c36f364e.js.map
