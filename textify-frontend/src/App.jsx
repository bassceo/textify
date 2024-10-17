import { useState } from "react";
import { computeResult } from './compute';


function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleOperation = (op) => {
        setResult(computeResult(num1,num2,op));
    };

    return (
        <div className="App">
            <h1>Calculator</h1>
            <div>
                <input
                    type="text"
                    value={num1}
                    onChange={handleNum1Change}
                    placeholder="First number"
                />
                <input
                    type="text"
                    value={num2}
                    onChange={handleNum2Change}
                    placeholder="Second number"
                />
            </div>
            <div>
                <button onClick={() => handleOperation("+")}>+</button>
                <button onClick={() => handleOperation("-")}>-</button>
                <button onClick={() => handleOperation("*")}>*</button>
                <button onClick={() => handleOperation("/")}>/</button>
            </div>
             <h2>Result: {result}</h2>
        </div>
    );
}

export default App;