import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { GlobalContext } from '../context/GlobalState';



function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map((transaction)=>{
    return transaction.amount
  });

  const total = amount.reduce((acc,item)=>{
    return acc+item
  },0);
  return <div>
      <h4>Balance</h4>
      <h1>{total}</h1>
  </div>;
}

export default Balance;
