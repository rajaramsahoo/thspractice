import logo from './logo.svg';
import './App.css';
import Count from './Components/Count';
import Countreduce from './Components/Countreduce';
import First from './Components/First';
import Globalcontext from './Context/GlobalContext';

function App() {
  const name = "THE HACKING SCHOOL"
  return (
    // <>
    //   <h1>This is app component</h1>
    //   <h1>kia dela udai jinu suna chadhaee</h1>
    // </>
    <>
      <Count />
      <hr />
      <Countreduce />
      <hr />
      <Globalcontext.Provider value ={name}>
        <First />
      </Globalcontext.Provider>


    </>


  );
}

export default App;
