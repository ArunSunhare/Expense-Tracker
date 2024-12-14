import React, { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Expense List</h2>
      {expenses.length > 0 ? (
        <ul className="list-none p-0">
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between p-2 border-b border-gray-200"
            >
              <span>{expense.title}</span>
              <span>{expense.amount} INR</span>
              <span>{expense.category}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No expenses recorded yet!</p>
      )}
    </div>
  );
};

export default ExpenseList;
