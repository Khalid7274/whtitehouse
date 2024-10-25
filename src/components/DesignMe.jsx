import {useState} from "react";


export default function PassengerMod(){
    const [styleClick, setStyleClick] = useState(false);
     
    const clickHandler =()=>{
        setStyleClick(priviteState => !priviteState);
    };

    return(
        <div className="txt-design">
            <h3 className={styleClick ? 'active' : ''}>Look at my design!</h3>
            <button onClick={clickHandler}>click Me</button>
        </div>
    )
   
}