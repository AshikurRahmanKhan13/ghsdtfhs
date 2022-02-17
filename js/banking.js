document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;

    const incomeAmount = parseFloat(incomeAmountText);

    // console.log(incomeAmountText)

    // // get income
    // const expenses-total=
    // const deposi
    // nt = parseFloat(incomeAmountText);
    const expenseInput = document.getElementById('expenses-input');
    const expenseAmountText = expenseInput.value;
    const expenseAmount = parseFloat(expenseAmountText);

    const rentInput = document.getElementById('rent-input');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);

    const clothesInput = document.getElementById('clothes-input');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);



    // get and update deposit total

    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousexpensesTotal = parseFloat(expensesTotalText);

    expensesTotal.innerText = expenseAmount + clothesAmount + rentAmount;





    // get and update deposit total

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = incomeAmount - expensesTotal.innerText;

})
