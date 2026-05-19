//Knappar
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

//Inputfält
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");

//UL- listor
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");

//Listor
const incomes = [];
const expenses = [];

//Saldo
const balanceLbl = document.getElementById("balance");
let balance = 0; 

incomeBtn.addEventListener("click", () => {
  let descTxt = descInput.value.trim();
  let amountTxt = amountInput.value.trim();

  if (!descTxt || !amountTxt) {
    return;
  }

  if (isNaN(amountTxt)) {
    return;
  }

  const amount = Number(amountTxt);

  if (amount < 0) {
    return;
  }

  incomes.push({ descTxt, amount });

  incomeList.innerHTML = "";

  for (let income of incomes) {
    let incomeLi = document.createElement("li");
    incomeLi.innerHTML = `${income.descTxt} - ${income.amount} kr (Inkomst)`;

    incomeList.appendChild(incomeLi);
  }
  balance += amount;
  balanceLbl.innerHTML = balance;

  descInput.value = "";
  amountInput.value = "";
});

expenseBtn.addEventListener("click", () => {
  let descTxt = descInput.value.trim();
  let amountTxt = amountInput.value.trim();

  if (!descTxt || !amountTxt) {
    return;
  }

  if (isNaN(amountTxt)) {
    return;
  }

  const amount = Number(amountTxt);

  if (amount < 0) {
    return;
  }

  expenses.push({ descTxt, amount });

  expenseList.innerHTML = "";

  for (let expense of expenses) {
    let expenseLi = document.createElement("li");
    expenseLi.innerHTML = `${expense.descTxt} - ${expense.amount} kr (Utgift)`;

    expenseList.appendChild(expenseLi);
  }
  balance -= amount;
  balanceLbl.innerHTML = balance;

  descInput.value = "";
  amountInput.value = "";
});
