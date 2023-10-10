

import React, {useEffect, useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';

// import Expenses from './components/ExpenseItem';

 
  
  // const DUMMY_EXPENSE = [
  //   {
  //     id: 'e1',
  //     title: 'School Fee',
  //     amount: 250,
  //     date: new Date(2021, 5, 12),
  //   },
  //   {
  //     id: 'e2',
  //     title: 'Books',
  //     amount: 350,
  //     date: new Date(2021, 5, 12),
  //   },
  //   {
  //     id: 'e3',
  //     title: 'Copy',
  //     amount: 350,
  //     date: new Date(2021, 5, 12),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'Library',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   }
  // ];

  function App() {
    const [expenses, setExpenses] =useState([]);
 

    const addExpenseHandler=(expense)=>{
      const updatedExpense = [expense, ...expenses];
      setExpenses(updatedExpense);
      localStorage.setItem("expenses",JSON.stringify(updatedExpense))
    }
    useEffect(()=>{
      
      const data= JSON.parse(localStorage.getItem("expenses"))
      if (Array.isArray(data)) {
        // Update the state with the data from localStorage
        setExpenses(data);
      }

      // setExpenses(data)
    },[])

  return (
    <div>
   <NewExpense onAddExpense={addExpenseHandler} />
   <Expenses item={expenses} />
   
  </div>
)
  }

  
    

 export default App;

// import React, {useState, useEffect} from 'react';

// import NewExpense from './components/NewExpense/NewExpense';

// import Expenses from './components/Expenses';




// const App = () => {
    
//     const [expenses, setExpenses] = useState("");

//     function fetchData(){
//         fetch('https://techgun.website/sample/api/read.php').then(
//             response => {
//                 return response.json();
//             }
//         ).then(
//             data => {
//                 //console.log(data);
//                 setExpenses(data);
//             }
//         );
//     }

//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const addExpenseHandler = (expense) => {
//         fetch('https://techgun.website/sample/api/create.php', {
//             method: 'POST',
//             body: JSON.stringify(expense),
//             headers: {
//                 'content-Type' : 'application/json'
//             }
//         }).then(
//             response => {
//                 fetchData();
//             }
//         );
//     };

//     return (
//         <div>
//             <NewExpense onAddExpense={addExpenseHandler} />
//             <Expenses item={expenses} />
//         </div>    
//     );
// }

// export default App;

