import React, { useState, useEffect } from 'react';
import '../styles/Expenses.css';
import { Loader } from './Widget/Loader/Loader';
import ProfileHeader from './ProfileHeader';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

function Expenses({ expenses, setExpenses, categories, setCategories, loading }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Load expenses from localStorage on component mount
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, [setExpenses]);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateCategoriesStorage();
  }, [expenses]);

  // Categories handling
  const updateCategoriesStorage = () => {
    const uniqueCategories = [...new Set(expenses.map(expense => expense.category))];
    setCategories(uniqueCategories);
    localStorage.setItem('categories', JSON.stringify(uniqueCategories));
  };

  const addExpense = () => {
    if (category && amount > 0 && date) {
      const newExpense = { 
        id: Date.now(),
        category, 
        amount: Number(amount), 
        date 
      };
      setExpenses(prev => [...prev, newExpense]);
      resetForm();
    }
  };

  const removeExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const clearAllExpenses = () => {
    setExpenses([]);
    localStorage.removeItem('expenses');
  };

  const resetForm = () => {
    setCategory('');
    setAmount('');
    setDate('');
  };

  const totalAmount = expenses.reduce((acc, current) => acc + current.amount, 0);

  return (
    <div className='expense--page'>
      <div className="expense--headerWrap">
        <h1 className='expenses--header'> Your Expense </h1>
        <ProfileHeader/>
      </div>

      <div className="expense--body">
        <div className='input-wrap'>
          <div className='category--box'>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category (e.g., Food)" />
            <FaPencilAlt className='icon' />
          </div>
          <div className='value--box' >
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter amount" />
            <FaPencilAlt className='icon' />

          </div>
          <div className='date--box'>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date" />
            <FaPencilAlt  className='icon'/>

          </div>
          <div className="expense-button">
            <button className="expense-button" onClick={addExpense}>Add Expense</button>
          </div>
        </div>

        <div className="expense--left">
          <h2 className='all--expensesHead'>All Expenses</h2>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.category}</td>
                    <td>${expense.amount}</td>
                    <td>{new Date(expense.date).toLocaleDateString()}</td>
                    <td>
                      <button 
                        onClick={() => removeExpense(expense.id)}
                        className="delete-button"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>Total:</td>
                  <td>${totalAmount}</td>
                  <td>
                    <button 
                      onClick={clearAllExpenses}
                      className="clear-all-button"
                    >
                      Clear All
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Expenses;