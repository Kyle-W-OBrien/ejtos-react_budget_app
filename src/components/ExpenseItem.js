import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {IoIosAddCircle} from "react-icons/io";
import {IoIosRemoveCircle} from "react-icons/io";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }



    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoIosAddCircle color='green' size='5em'    onMouseOver={({target})=>target.style.color='lightgreen'}
                                                        onMouseOut={({target})=>target.style.color='green'}
                                                        onClick={event=> increaseAllocation(props.name)}>
        </IoIosAddCircle></td>
        <td><IoIosRemoveCircle color='red' size='5em'   onMouseOver={({target})=>target.style.color='salmon'}
                                                        onMouseOut={({target})=>target.style.color='red'}
                                                        onClick={event=> decreaseAllocation(props.name)}>
        </IoIosRemoveCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
