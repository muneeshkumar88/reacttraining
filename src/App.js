import logo from "./logo.svg";
import "./App.css";
import ThirdComoponent, {
  SecondComoponent,
  FirstComoponent,
} from "./components";
import Login from "./components/classComponent";
import Header from "./components/header";
import Child1 from "./components/child1";
import { createContext, useEffect, useState } from "react";
import LearnUseeffect from "./components/useEffect";
import Child2 from "./components/child2";
import LoginForm from "./components/loginForm";
import BasicForm from "./components/loginForm/formik";
import Signup from "./components/mSignup";
import ClassicSignup from "./components/mSignup/classicSignup";

const data1 = createContext();
const data2 = createContext();

function App() {
  const [obj, setObj] = useState({
    name: "John doe",
    age: 12,
  });

  // useEffect(()=>{

  //   setObj({name:"Ajay"})

  // },[obj])

  setTimeout(() => {
    setObj({ name: "Ajay" });
  }, 5000);

  const address = "123,park street, California";

  return (
    <div className="App">
      {/* <FirstComoponent/>
      <SecondComoponent/> */}
      {/* <Login/> */}
      {/* <ThirdComoponent/> */}
      {/* <Header/> */}
      {/* <data2.Provider value={address}>
      <data1.Provider value={obj}>  
      <Child1/>
      </data1.Provider>
      </data2.Provider> */}
      {/* <Child1 name={obj?.name} age={obj?.age}/>
      <Child2 name={obj?.name}/> */}

      {/* <LearnUseeffect/> */}

      {/* <LoginForm/> */}
      {/* <BasicForm /> */}
      {/* <Signup /> */}

      <ClassicSignup />
    </div>
  );
}

export default App;

export { data1, data2 };
