import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import FormObj from './Components/FormObj';

function App() {
  function OnHandleClick(e){
    e.target.style.color ="red"
    e.target.innerText = "GANDI KUNDAI HAUCHI KIRE MGH";
  }

  return (
    <>
    <h1 onClick={OnHandleClick}>Click karile mgh maribu</h1>
    <Form />
    {/* <FormObj /> */}
    
    </>
  );
}

export default App;
