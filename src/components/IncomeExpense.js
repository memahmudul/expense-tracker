import React,{ useContext } from 'react';
import {GlobalContext} from "../context/GlobalState"

function IncomeExpense() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map((transaction)=>{
    return transaction.amount;
  });

  const income = amounts.filter((item)=>item>0).reduce((acc,item)=>{
    return acc+item
  },0)

  const expense = amounts.filter((item)=>item<0).reduce((acc,item)=>{
    return acc+item
  },0)* -1;
  return <div className='inc-exp-container'>
  <div className=''>
      <h4>Income</h4>
      <p className='money plus'>{income}</p>
  </div>
  <div className=''>
      <h4>Expense</h4>
      <p className='money minus'>{expense}</p>
  </div>

  </div>;
}

export default IncomeExpense;
