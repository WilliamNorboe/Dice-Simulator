import {useState, useEffect} from 'react';
import './dice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dice1 from "./dice-one-solid.svg";
import dice2 from "./dice-two-solid.svg";
import dice3 from "./dice-three-solid.svg";
import dice4 from "./dice-four-solid.svg";
import dice5 from "./dice-five-solid.svg";
import dice6 from "./dice-six-solid.svg";

let getFace = (top)=>{
    switch (top) {
        case "one":
            return dice1;
        case "two":
            return dice2;
        case "three":
            return dice3;
        case "four":
            return dice4;
        case "five":
            return dice5;
        case "six":
            return dice6;
        default:
            return 0;
      }
}
function Dice (props){ 

    let iconPath = "./dice-" + props.top + "-solid.svg";
    return(
        <div>
            <img src = {getFace(props.top)} className="die" alt = {props.top}/>
            {/* <svg xmlns={iconPath} height="16" width="14" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <FontAwesomeIcon icon={['fas', `fa-dice-${props.top}`]} className={`Die  
                ${props.rolling && 'Die-shaking'}`} />  */}
        </div>
    )
}


export default Dice