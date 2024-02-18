let expenses = [];

function addExpense() {
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (date && !isNaN(amount) && category) {
        const expense = { date, amount, category, description };
        expenses.push(expense);
        displayExpenses();
        updateTotalExpense();
        document.getElementById('expenseForm').reset();
    } else {
        alert('Please fill in all required fields (Date, Amount, Category)');
    }
}

function displayExpenses() {
    const tableBody = document.getElementById('expenseList');
    tableBody.innerHTML = '';

    expenses.forEach((expense, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = expense.date;
        row.insertCell(1).textContent = expense.amount.toFixed(2);
        row.insertCell(2).textContent = expense.category;
        row.insertCell(3).textContent = expense.description;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteExpense(index));
        row.insertCell(4).appendChild(deleteButton);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
    updateTotalExpense();
}

function updateTotalExpense() {
    const totalExpenseElement = document.getElementById('totalExpense');
    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    totalExpenseElement.textContent = totalExpense.toFixed(2);
}

