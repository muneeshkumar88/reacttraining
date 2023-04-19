import logo from './logo.svg';
import './App.css';
import ThirdComoponent,{SecondComoponent,FirstComoponent} from './components';
import Login from './components/classComponent';
import Header from './components/header';
import Child1 from './components/child1';
import { createContext } from 'react';

const data1=createContext();
const data2=createContext();

function App() {
  const obj={
    name:"John doe",
    age:12
  }

  const address="123,park street, California"

  return (
    <div className="App">
      {/* <FirstComoponent/>
      <SecondComoponent/> */}
      {/* <Login/> */}
      {/* <ThirdComoponent/> */}
      {/* <Header/> */}
      <data2.Provider value={address}>
      <data1.Provider value={obj}>  
      <Child1/>
      </data1.Provider>
      </data2.Provider>
      
    </div>
  );
}

export default App;

export {data1,data2}
