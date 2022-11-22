import { useState } from "react";
import "./App.css";
import { numbers, operaters } from "./constants";
function App() {
  const [result, setResult] = useState('');
  const [operater, setOperater] = useState("");
  const [caculate, setCaculate] = useState('');


  const handleSetCaculate = (e) => {
    // console.log(e.target);
    if(result===''){
      setCaculate(caculate+ (e.target.value))

    }
    else {
      if(operater!==''){
        setCaculate(caculate+ e.target.value)
      }
    }
  }
  const handleSetOperater = (e) => {
    // console.log(e.target);
    if(caculate!=='' || (caculate ==='' && result!=='')){
      setOperater((e.target.value))
      if(result===''){
        setResult(caculate);
        setCaculate('')
      }
    }
  }
  const handleCaculating = (e) => {
    let resultFinal= 0;
    switch (operater) {
      case '+':{
        resultFinal= Number(result) + Number(caculate);
        setResult(resultFinal.toString())
        break;
      }
      case '-':{
        resultFinal= Number(result) - Number(caculate);
        setResult(resultFinal.toString())
        break;
      }
      case '*':{
        if(caculate!==''){
          resultFinal= Number(result) * Number(caculate);
          setResult(resultFinal.toString())
        }
        else{
          setResult(Number(result).toString())
        }
        
        break;
      }
      case '/':{
        if(caculate!==''){
          resultFinal= Number(result) / Number(caculate);
          setResult(resultFinal.toString())
        }
        else{
          setResult(Number(result).toString())
        }
        
        break;
      }
      case '':{
        resultFinal= Number(caculate);
        setResult(resultFinal.toString())
        break;
      }
        
    
      default:
        break;
    }
    setCaculate('');
    setOperater('');
  }
  const handleReSet=() =>{
    setCaculate('')
    setOperater('');
    setResult('');
  }
  return (
    <div className="App container flex min-h-screen justify-center items-center m-auto">
      <div className="caculater w-full max-w-md m-auto shadow-2xl rounded-xl overflow-hidden">
        <div className="display h-60 bg-gray-800 flex flex-col justify-around text-white">

          <h1 className="p-4 pr-4 bg-transparent text-4xl text-right">{result}</h1>
          <h1 className="p-4 pr-4 bg-transparent text-4xl text-right">{operater}</h1>
          <h1 className="p-4 pr-4 bg-transparent text-4xl text-right">{caculate}</h1>

        </div>
        <div className="bt grid mt-4 p-4 ">
          <div className="numbers grid ">
            {numbers.map((num) => (
              <button
              value={num.value}
                onClick={handleSetCaculate}
                className="text-2xl w-full h-16 flex justify-center items-center bg-orange-500  rounded-full">
                {num.value}
              </button>
            ))}
            <button
              onClick={handleReSet}

              value={'ac'}
              className="text-2xl w-full h-16 flex justify-center items-center bg-orange-500  rounded-full">
              {'AC'}
            </button>
            <button
              onClick={handleSetCaculate}

              value={0}
              className="text-2xl w-full h-16 flex justify-center items-center bg-orange-500  rounded-full">
              {'0'}
            </button>
            <button
              onClick={handleCaculating}

              value={'='}
              className="text-2xl w-full h-16 flex justify-center items-center bg-orange-500  rounded-full">
              {'='}
            </button>
          </div>
          <div className="caculater ml-4 grid ">
            {operaters.map((op) => (
              <button 
                onClick={handleSetOperater}
                value={op.operater}
                className="text-2xl w-full h-16  flex justify-center items-center bg-orange-500  rounded-full">
                {op.operater}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
