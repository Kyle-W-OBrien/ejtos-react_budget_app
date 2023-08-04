import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, dispatch, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const currentBudget = budget;

 /*   if(totalExpenses > currentBudget){
        currentBudget = totalExpenses;
        console.log("Budget cannot be less than current expenses!")
    }*/


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input 
                    type="number" 
                    id="budget" 
                    name="budget" 
                    min={totalExpenses} 
                    max="20000" 
                    step="10" 
                    value={currentBudget}
                    onBlur={e => dispatch({
                        type : 'SET_BUDGET_BLUR',
                        payload : e.target.value
                    })}  
                    onChange={e => dispatch({
                        type : 'SET_BUDGET',
                        payload : e.target.value
                    })}></input>
                </span>
        </div>
    );
};
export default Budget;
