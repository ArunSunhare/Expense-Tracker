import React from 'react';
import Navbar from './componets/ Navbar';
import ExpenseProvider from './componets/ExpenseContext';
import AddExpenseForm from './componets/AddExpenseForm';
import ExpenseList from './componets/ExpenseList';
import ExpenseChart from './componets/ExpenseChart';

const App = () => {
  return (
    <ExpenseProvider>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>
          <AddExpenseForm />
          <ExpenseList />
          <ExpenseChart />
        </div>
      </div>
    </ExpenseProvider>
  );
};

export default App;
