import {useState} from 'react'
import './dice.css'
// import Dice from './Dice.js'
  
function DiceRoll (){ 

    let [props, setProps] = useState({
        sides: ['one', 'two', 'three', 'four', 'five', 'six'],
        diceA: "one",
        diceB: "two",
        rolling: false 
    })

    let roll = () =>{
        setProps(prevState => {
            return {
                ...prevState,
            diceA: props.sides[(Math.floor(Math.random() * props.sides.length))],
            diceB: props.sides[(Math.floor(Math.random() * props.sides.length))],
            rolling: true
            }
        })

        setTimeout(()=>{
            setProps(prevState => {
                return {
                    ...prevState,
                    rolling: false
            }
        })
        },1000);
    }



    return(
        <div className='rolling'>
            <div className = "dice">
                |Dice here
            </div>
        <button
        disabled = {props.rolling}
        onClick = {roll}>
            {props.rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
        </div>
    )
}


export default DiceRoll