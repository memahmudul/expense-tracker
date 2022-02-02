import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        const newTransaction = {
            id : Date.now(),
            label: label,
            amount: +amount,
        };
        setLabel('');
        setAmount('');

        addTransaction(newTransaction)
    }
  return(
      <>
          <h3>Add new transaction</h3>
          <form action="" onSubmit={onSubmit}>
              <div className="form-control">
                  <label htmlFor="">Label</label>
                  <input type="text" value={label} onChange={(e)=>setLabel(e.target.value)} placeholder='Enter label...' />
              </div>
              <div className="form-control">
                  <label htmlFor="">(<b>-</b>/<b>+</b>)Amount [-expense,+income]</label>
                  <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount...' />
              </div>
              <button className='btn'>Add Transaction</button>
          </form>
      </>
  );
}

export default AddTransaction;
