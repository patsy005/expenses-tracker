import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExtenseData) => {
    const expenseData = {
      ...enteredExtenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setVisibleForm(false);
  };

  const [visibleForm, setVisibleForm] = useState(false);


  const showFormHandler = () => {
    setVisibleForm(true);
  };

  const hideFormHandler = () => {
      setVisibleForm(false)
  }

  return (
    <div className="new-expense">
      {visibleForm && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      )}
      {!visibleForm && <button onClick={showFormHandler} onCancel={hideFormHandler}>Add new expense</button>}
    </div>
  );
};

export default NewExpense;
