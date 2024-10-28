import './Input.css';

const Input = ({text, result}) =>{
    return (
    <div className="input-wrapper">
        <div className="display">

        </div>
        <div className="result">
            <h1>{result}</h1>
        </div>

        <div className="text">
            <h2>{text}</h2>
        </div>
    </div>
    );
}

export default Input;