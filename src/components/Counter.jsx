import {useState} from "react";

export default function MyCounter(){

    const [count, setCount]=useState(1);
    const [childModule, setChildModule]=useState(0);
    const [infantModule, setInfantModule]=useState(0);

    const [isVisable, setIsVisable] = useState(false);

    const ShowModule =()=>{
        setIsVisable(true);
    }

    const hideModule = ( )=>{
        setIsVisable(false);
    }


    return(
        <div className="txt-passenger">
        {isVisable &&(
        <div>
        <h2>Passengers</h2>
        <hr />
        <h3>
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)} >
        ➖
      </button>{' '}
      {count} Adult{' '}
      <button
        onClick={() => setCount(count < 9 ? count + 1 : 9)} >
        ➕
      </button>
    </h3>
        <p>Age 12+</p>

        <h3><button onClick={()=>setChildModule(childModule-1)}>➖</button>  {childModule} Childern<button onClick={()=>setChildModule(childModule+1)}>➕</button></h3> 
        <p>Ages 2 - 11</p>

        <h3><button onClick={()=>setInfantModule(infantModule-1)}>➖</button>  {infantModule} Infant <button onClick={()=>setInfantModule(infantModule+1)}>➕</button></h3> 
        <p>Ages under 2</p>

        <p><strong>Please note:</strong>  You can book a maximum of 9 passengers per booking.</p>

        <p>Total Travel Cost ${count*150+childModule*100+infantModule*80}</p>
        {/* <button onClick={hideModule}>Passenger</button> */}
        </div>
        )}
       
        <button onClick={ShowModule}>Passenger</button>
    
        </div>

    );
}