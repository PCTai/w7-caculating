import { useState } from "react";
import "./App.css";
import { numbers, operaters } from "./constants";
function App() {
  // const [result, setResult] = useState('');
  // const [operater, setOperater] = useState("");
  // const [caculate, setCaculate] = useState('');


  // const handleSetCaculate = (e) => {
  //   // console.log(e.target);
  //   if (result === '') {
  //     setCaculate(caculate + (e.target.value))

  //   }
  //   else {
  //     if (operater !== '') {
  //       setCaculate(caculate + e.target.value)
  //     }
  //   }
  // }
  // const handleSetOperater = (e) => {
  //   // console.log(e.target);
  //   if (caculate !== '' || (caculate === '' && result !== '')) {
  //     setOperater((e.target.value))
  //     if (result === '') {
  //       setResult(caculate);
  //       setCaculate('')
  //     }
  //   }
  // }
  // const handleCaculating = (e) => {
  //   let resultFinal = 0;
  //   switch (operater) {
  //     case '+': {
  //       resultFinal = Number(result) + Number(caculate);
  //       setResult(resultFinal.toString())
  //       break;
  //     }
  //     case '-': {
  //       resultFinal = Number(result) - Number(caculate);
  //       setResult(resultFinal.toString())
  //       break;
  //     }
  //     case '*': {
  //       if (caculate !== '') {
  //         resultFinal = Number(result) * Number(caculate);
  //         setResult(resultFinal.toString())
  //       }
  //       else {
  //         setResult(Number(result).toString())
  //       }

  //       break;
  //     }
  //     case '/': {
  //       if (caculate !== '') {
  //         resultFinal = Number(result) / Number(caculate);
  //         setResult(resultFinal.toString())
  //       }
  //       else {
  //         setResult(Number(result).toString())
  //       }

  //       break;
  //     }
  //     case '': {
  //       resultFinal = Number(caculate);
  //       setResult(resultFinal.toString())
  //       break;
  //     }


  //     default:
  //       break;
  //   }
  //   setCaculate('');
  //   setOperater('');
  // }
  // const handleReSet = () => {
  //   setCaculate('')
  //   setOperater('');
  //   setResult('');
  // }
  const [caculate, setCaculate] = useState('');
  const [result, setResult]=useState('0');


  const checkIsOperater= (key) =>{
    return  key==='+' ||key==='-' || key==='*' || key==='/';
  }

  const handleSetCaculateNumber = (e) =>{
    const newCaculater= caculate + e.target.value;
    setCaculate(newCaculater);
  }
  const handleSetCaculateOperater = (e) =>{
    
    if(checkIsOperater(caculate[caculate.length-1])){
      setCaculate(() =>{
        const newCaculater= caculate.slice(0,caculate.length-1) +e.target.value;
        return newCaculater;
      })
    }else{
      setCaculate(caculate + e.target.value);
    }
  }
  const handleReSet = () => {
    setCaculate('')
    setResult('0');
  }
  function evil(fn) {
    return new Function('return ' + fn)();
  }
  
  
  const handleCaculating = () => {
    if(checkIsOperater(caculate[caculate.length-1]) || caculate[0] ==='/' || caculate[0]=== '*'){
      setResult('Error');
      setCaculate('');
    }else{
      if(caculate===''){
        setResult('0');
      }
      else{
        const rs= caculate+ ' = ' + evil(caculate);
      setResult(rs)
      setCaculate('');
      }
    }
  }

  return (
    <div className="App container flex min-h-screen justify-center items-center m-auto">
      <div className="caculater w-full max-w-md m-auto shadow-2xl rounded-xl overflow-hidden">
        <div className="display h-60 bg-gray-800 flex flex-col justify-around text-white">

          <h1 className="h-16 pr-4 bg-transparent text-4xl text-right ">{result}</h1>
          {/* <h1 className="h-16 pr-4 bg-transparent text-4xl text-right">{operater}</h1> */}
          <h1 className="h-16 pr-4 bg-transparent text-4xl text-right">{caculate}</h1>

        </div>
        <div className="bt grid mt-4 p-4 ">
          <div className="numbers grid ">
            {numbers.map((num) => (
              <button
                key={num.id}
                value={num.value}
                // onClick={handleSetCaculate}
                onClick={handleSetCaculateNumber}
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
              
              // onClick={handleSetCaculate}
              onClick={handleSetCaculateNumber}
              value={0}
              className="text-2xl w-full h-16 flex justify-center items-center bg-orange-500  rounded-full">
              {'0'}
            </button>
            <button
              
              // onClick={handleCaculating}
              onClick={handleCaculating}
              value={'='}
              className="text-2xl w-full h-16 flex justify-center items-center bg-orange-500  rounded-full">
              {'='}
            </button>
          </div>
          <div className="caculater ml-4 grid ">
            {operaters.map((op) => (
              <button
                key={op.operater}
                // onClick={handleSetOperater}
                onClick={handleSetCaculateOperater}
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
