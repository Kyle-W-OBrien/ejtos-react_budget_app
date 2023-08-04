import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyType = () => {
    const {dispatch} = useContext(AppContext);

    return(
    <div>
        <select style={{
                        borderRadius:"5px",
                        background:"#d1e7dd", 
                        width:"100%", height:"60px"
                    }} 
                name="currency" 
                id="currency"
                defaultValue={"£"} 
                onChange={
                            e=>dispatch({
                                     type: 'CHG_CURRENCY',
                                     payload :   e.target.value
                            }) 
        }>
        <option value="$" >$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
        </select>
    </div>

    );

}

export default CurrencyType;