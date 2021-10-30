import React, { useState } from "react";
import './BirthLucky.css'
const BirthLucky = () => {
    const [getBrithdate,setBrithdate] = useState('');
    const [getLuckynumber,setLuckynumber] = useState('');
    const [totalSum,settotalSum] = useState(0);
    const [printString,setprintString] = useState('')

    const getDatehandler = (e) => {
        setBrithdate(e.target.value);
        let birthDate = e.target.value;
        birthDate =birthDate.replaceAll('-','');
        let sumDigits = 0;
        for(let i=0;i<birthDate.length;i++){
            sumDigits += Number(birthDate.charAt(i));
        }
        settotalSum(sumDigits);
        setBrithdate(e.target.value);
    
    }

    const getLuckyhandler = (e) => {
        setLuckynumber(e.target.value);
    }

    const sumbitHandler = () => {
        let updateString;
        if(totalSum%getLuckynumber === 0){
            updateString = "Your birth date is lucky 🥳🥳 ";
        }
        else{
            updateString = 'Birth Date is not lucky 😓😓';
        } 
        setprintString(updateString);
        setBrithdate('');
        setLuckynumber('');
    }

    return(
        <div className="birthDate">
            <h3>Date of Birth:</h3>
            <input className="inputBirth" type='date' onChange={(e) => getDatehandler(e)} value={getBrithdate} />
            <h3>Lucky Number</h3>
            <input className="inputNumber" type='number' onChange={(e) => getLuckyhandler(e)} value={getLuckynumber} />
            <br/>
            <button className="btn-clicked" onClick={sumbitHandler}>Check Number</button>
            {printString.length>1 && 
                <h3>{printString}</h3>
            }
        </div>
    )
}

export default BirthLucky;