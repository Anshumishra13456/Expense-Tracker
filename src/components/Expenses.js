
import React from 'react-dom';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props){
    return(
        <div className="expenses">
        {

            props.item && props.item.map((expense)=>(
                <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount} />
                
            ))
                
       
                
            
        }
        

                </div>
            )
            }
            export default Expenses;
        
        
    
        
        

        
      
    

        


