import './Keypad.css';

const Keypad=({symbol,color,handleClick})=>{
    return ( 
    <div 
    onClick={()=>handleClick(symbol)}
    className="button-wrapper" 
    style={{backgroundColor: color}}
    >
        {symbol}
    </div>
    );
}

export default Keypad;