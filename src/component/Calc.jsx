
import './Calc.css';
import React, { useState } from 'react';
// import Bg from './component/bg';



function Cal() {

    const [result, setResult] = useState(" ")
    const clickhandle = (event) => {

        setResult(result.concat(event.target.value))
    }

    const clear = () => {
        setResult(" ");
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

    const remove = () => {

        setResult(result.slice(0, result.length - 1));
    }

    return (


        <div className="calc">

            <h1 className='heading'>My Calculator..!</h1>
            <div className="button-parent">
                <input type="text" placeholder='0' id='answer' value={result} />
                <input type="button" value="9" className='button' onClick={clickhandle} />
                <input type="button" value="8" className='button' onClick={clickhandle} />
                <input type="button" value="7" className='button' onClick={clickhandle} />
                <input type="button" value="6" className='button' onClick={clickhandle} />
                <input type="button" value="5" className='button' onClick={clickhandle} />
                <input type="button" value="4" className='button' onClick={clickhandle} />
                <input type="button" value="3" className='button' onClick={clickhandle} />
                <input type="button" value="2" className='button' onClick={clickhandle} />
                <input type="button" value="1" className='button' onClick={clickhandle} />
                <input type="button" value="0" className='button' onClick={clickhandle} />
                <input type="button" value="+" className='button' onClick={clickhandle} />
                <input type="button" value="-" className='button' onClick={clickhandle} />
                <input type="button" value="." className='button' onClick={clickhandle} />
                <input type="button" value="*" className='button' onClick={clickhandle} />
                <input type="button" value="/" className='button' onClick={clickhandle} />
                <input type="button" value="%" className='button' onClick={clickhandle} />
                <input type="button" value="C" className='button b1' onClick={clear} />
                <input type="button" value="Ce" className='button b1' onClick={remove} />
                <input type="button" value="=" className='button b1' onClick={calculate} />
           
            </div>
        </div>
    );
}

export default Cal;
