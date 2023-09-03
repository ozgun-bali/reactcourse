import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const newExpenseHandler = () => {
    setFormVisible(true);
  };
  const cancelHandler = () => {
    setFormVisible(false);
  };
  return (
    <div className="new-expense">
      {!formVisible && <button onClick={newExpenseHandler}>Add New Expense</button>}
      {formVisible && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
