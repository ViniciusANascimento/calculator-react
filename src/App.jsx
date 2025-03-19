import { Container, Content, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }
  const handleOnClear = () => {
    setCurrentNumber('0')
  }
  const handleEqual = () => {
    if(firstNumber !== '0' && currentNumber !== '0') {
      let sum;
      switch (operation) {
        case '+':
          sum = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          sum = Number(firstNumber) - Number(currentNumber);
          break;
        case 'X':
          sum = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          sum = Number(firstNumber) / Number(currentNumber);
          break;
        case '%':
          sum = Number(firstNumber) * (Number(currentNumber) / 100);
        default:
          break;
      }
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  const handleInverseNumber = () => {
    if(currentNumber > 0) {
      setCurrentNumber(String(currentNumber * -1));
    }else{
      const invert = currentNumber * -1;
      setCurrentNumber(String(invert));
    }
  }
  const handleDot = () => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}.`);
  }

  // Operadores
  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      return;
    }else{
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber('0');
    }
  }
  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      return;
    }else{
    const minus = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(minus));
    setFirstNumber('0');
    }
  }
  const handleDivide = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      return;
    }else{
    const divide = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(divide));
    setFirstNumber('0');
    }
  }
  const handleMultiply = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('X');
      return;
    }
    const multiply = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(multiply));
  }
  const  handlePercent = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
      return;
    }else{
      const percent = Number(firstNumber) * (Number(currentNumber) / 100);
      setCurrentNumber(String(percent));
      setFirstNumber('0');
    }
  }
  const handleSquare = () => {
    if(firstNumber === '0') {
      const sum = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(sum));
      setOperation('');
      return;
    }
  }

  return (
    <div>
      <Container>
        <Content>  
          <Input value={currentNumber} />
          <Row>
            <Button label={"√"} onClick={() => handleSquare()}/>
            <Button label={"C"} onClick={() => handleOnClear()}/>
            <Button label={"%"} onClick={() => handlePercent()}/>
            <Button label={"/"} onClick={() => handleDivide()}/>
          </Row>
          <Row>
            <Button label={"7"} onClick={() => handleAddNumber("7")}/>
            <Button label={"8"} onClick={() => handleAddNumber("8")}/>
            <Button label={"9"} onClick={() => handleAddNumber("9")}/>
            <Button label={"X"} onClick={() => handleMultiply()}/>
          </Row>
          <Row>
            <Button label={"4"} onClick={() => handleAddNumber("4")}/>
            <Button label={"5"} onClick={() => handleAddNumber("5")}/>
            <Button label={"6"} onClick={() => handleAddNumber("6")}/>
            <Button label={"-"} onClick={() => handleMinusNumbers()}/>
          </Row>
          <Row>
            <Button label={"1"} onClick={() => handleAddNumber("1")}/>
            <Button label={"2"} onClick={() => handleAddNumber("2")}/>
            <Button label={"3"} onClick={() => handleAddNumber("3")}/>
            <Button label={"+"} onClick={() => handleSumNumbers()}/>
          </Row>
          <Row>
            <Button label={"-1"} onClick={() => handleInverseNumber()}/>
            <Button label={"0"} onClick={() => handleAddNumber("0")}/>
            <Button label={"."} onClick={() => handleDot()}/>
            <Button label={"="} onClick={() => handleEqual()}/>
          </Row>
        </Content>
      </Container>
    </div>
  )
}

export default App