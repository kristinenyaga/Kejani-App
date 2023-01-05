import React, {useEffect, useState} from 'react'
import BookUnit from './bookUnit';

function Transact(){

    const [transaction, setTransaction] = useState([])

    useEffect(()=>{
        fetch('/transactions')
        .then(res=>res.json)
        .then((transaction)=>{
            setTransaction(transaction)
        })
      }, [])

      console.log(transaction)
  
    // function update(){
    //     const updateTransact = transaction.map((updates)=>
    //     updates.id===updateTransact.id? updateTransact:updates);
    //     setTransaction(updateTransact)
    // }
    return (
        <>
        <BookUnit transaction = {transaction} setTransaction = {setTransaction}/>
        </>
    )
}

export default Transact;