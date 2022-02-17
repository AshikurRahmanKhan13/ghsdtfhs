function getInputValue(inputId) {
    debugger;
    // if (inputId != number && inputId < 0) {

    //     alert();
    // }


    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    // inputField.value = '';
    return amountValue;
}






document.getElementById('calculate-button').addEventListener('click', function () {

    const incomeInput = getInputValue('income-input');


    const expenseInput = getInputValue('expenses-input');

    const rentInput = getInputValue('rent-input');


    const clothesInput = getInputValue('clothes-input');



    // Total Expenses

    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousexpensesTotal = parseFloat(expensesTotalText);



    // expensesTotal.innerText = expenseAmount + clothesAmount + rentAmount;
    expensesTotal.innerText = expenseInput + rentInput + clothesInput;






    // Balance

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


    // Total Expenses

    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousexpensesTotal = parseFloat(expensesTotalText);

    expensesTotal.innerText = expenseInput + rentInput + clothesInput;





    // Balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = incomeInput - expensesTotal.innerText;

    // Saving Part


    const saveInput = getInputValue('save-input');



    // Saving Amount

    const SavingTotal = document.getElementById('Saving-total');
    const SavingTotalText = SavingTotal.innerText;
    const previouSavingTotal = parseFloat(SavingTotalText);

    SavingTotal.innerText = (incomeInput * saveInput) / 100;



    // Remaining Balance

    const RemainingTotal = document.getElementById('Remaining');
    const RemainingTotalText = RemainingeTotal.innerText;
    const previousRemainingTotal = parseFloat(RemainingTotalText);

    // RemainingTotal.innerText = (incomeInput - expensesTotal.innerText) - ((incomeInput * saveInput) / 100);
    SavingTotal.innerText = (incomeInput * saveInput) / 100;
    balanceTotal.innerText = incomeInput - expensesTotal.innerText;

    RemainingTotal.innerText = balanceTotal.innerText - SavingTotal.innerText;




})
