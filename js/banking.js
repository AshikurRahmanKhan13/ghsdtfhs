function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    // inputField.value = '';
    return amountValue;
}






document.getElementById('calculate-button').addEventListener('click', function () {
    // const incomeInput = document.getElementById('income-input');
    // const incomeAmountText = incomeInput.value;

    // const incomeAmount = parseFloat(incomeAmountText);
    const incomeInput = getInputValue('income-input');


    const expenseInput = getInputValue('expenses-input');

    const rentInput = getInputValue('rent-input');


    const clothesInput = getInputValue('clothes-input');



    // get and update deposit total

    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousexpensesTotal = parseFloat(expensesTotalText);

    // expensesTotal.innerText = expenseAmount + clothesAmount + rentAmount;
    expensesTotal.innerText = expenseInput + rentInput + clothesInput;





    // get and update deposit total

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = incomeInput - expensesTotal.innerText;



})






document.getElementById('save-button').addEventListener('click', function () {

    const incomeInput = getInputValue('income-input');


    const expenseInput = getInputValue('expenses-input');


    const rentInput = getInputValue('rent-input');

    const clothesInput = getInputValue('clothes-input');



    // get and update deposit total

    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousexpensesTotal = parseFloat(expensesTotalText);

    expensesTotal.innerText = expenseInput + rentInput + clothesInput;





    // get and update deposit total

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = incomeInput - expensesTotal.innerText;



    ////////////////////






    const saveInput = getInputValue('save-input');



    // get and update deposit total

    const SavingTotal = document.getElementById('Saving-total');
    const SavingTotalText = SavingTotal.innerText;
    const previouSavingTotal = parseFloat(SavingTotalText);

    SavingTotal.innerText = (incomeInput * saveInput) / 100;



    // get and update deposit total

    const RemainingTotal = document.getElementById('Remaining-balance-total');
    const RemainingTotalText = RemainingeTotal.innerText;
    const previousRemainingTotal = parseFloat(RemainingTotalText);

    RemainingTotal.innerText = (balanceTotal.innerText - SavingTotal.innerText);



})
