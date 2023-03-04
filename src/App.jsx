import { useState } from "react"
import './index.css';

function App() {

  const [result, setResult] = useState("");

 //Pimera funcion 


/**const handleClick = (e) => {...}: Define la función handleClick como una función flecha constante que toma un argumento e (el evento del clic).
setResult(...): Este es un método que actualiza el estado del componente. La función concat se utiliza para agregar el ID del elemento que se hizo clic al array result en el estado del componente. La función concat crea un nuevo array con todos los elementos del array original y el nuevo elemento que se agregó.
e.target.id: Accede al ID del elemento que se hizo clic y lo agrega al array result en el estado del componente.
En resumen, la función handleClick se utiliza para agregar el ID del elemento que se hizo clic al array result en el estado de un componente de React. */

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  /**const clear = () => {...}: Define la función clear como una función flecha constante.
setResult(""): Este es un método que actualiza el estado del componente. La función setResult se utiliza para establecer el estado del componente en una cadena vacía. Esto tiene el efecto de borrar el contenido del estado del componente.
En resumen, la función clear se utiliza para borrar el contenido del estado del componente de React */

  const clear = () => {
    setResult("");
  };

  /**const deleteElement = () => {...}: Define la función deleteElement como una función flecha constante.
setResult(...): Este es un método que actualiza el estado del componente. La función slice se utiliza para eliminar el último carácter del estado actual del componente y devuelve una nueva cadena sin el último carácter.
result.slice(0, -1): Accede al valor actual del estado result y utiliza el método slice para eliminar el último carácter del valor actual. El segundo parámetro -1 se utiliza para especificar que se debe eliminar el último carácter.
En resumen, la función deleteElement se utiliza para eliminar el último carácter del estado de un componente de React. */

  const deleteElement = () => {
    setResult(result.slice(0, -1));
  };


  /**const calculate = () => {...}: Define la función calculate como una función flecha constante.
try {...} catch (error) {...}: Este es un bloque de código try-catch que se utiliza para manejar errores que puedan ocurrir al evaluar la expresión.
eval(result): El método eval() se utiliza para evaluar la expresión matemática en la variable result. El resultado de la evaluación es un número.
.toString(): El método toString() se utiliza para convertir el número en una cadena.
setResult(...): Este es un método que actualiza el estado del componente. La función setResult se utiliza para establecer el estado del componente en la cadena del resultado calculado.
catch (error) {...}: Si ocurre un error durante la evaluación de la expresión, se captura y se establece el estado del componente en "Invalid" usando la función setResult.
En resumen, la función calculate se utiliza para evaluar una expresión matemática y actualizar el estado de un componente de React con el resultado. Si ocurre un error durante la evaluación, el estado se establece en "Invalid". */
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Invalid");
    }

  };

  return (

    <div className="flex justify-center items-center mt-20">
     
    <div className="calculator ">
      <input type="text" value={result} disabled />

      <div className="buttons">
        <button className="operator" onClick={clear}>AC</button>
        <button className="operator" onClick={deleteElement}>DE</button>
        <button id="." className="operator" onClick={handleClick}>.</button>
        <button id="/" className="operator" onClick={handleClick}>/</button>


        <button id="7" className="number" onClick={handleClick}>7</button>
        <button id="8" className="number" onClick={handleClick}>8</button>
        <button id="9" className="number" onClick={handleClick}>9</button>
        <button id="*" className="operator" onClick={handleClick}>*</button>


        <button id="4" className="number" onClick={handleClick}>4</button>
        <button id="5" className="number" onClick={handleClick}>5</button>
        <button id="6" className="number" onClick={handleClick}>6</button>
        <button id="-" className="operator" onClick={handleClick}>-</button>


        <button id="1" className="number" onClick={handleClick}>1</button>
        <button id="2" className="number" onClick={handleClick}>2</button>
        <button id="3" className="number" onClick={handleClick}>3</button>
        <button id="+" className="operator" onClick={handleClick}>+</button>

        <button id="00"className="number"  onClick={handleClick}>00</button>
        <button id="0" className="number" onClick={handleClick}>0</button>
        <button id="=" className="operator" onClick={calculate}>=</button>

      </div>
      </div>













    </div>
  )












}

export default App
