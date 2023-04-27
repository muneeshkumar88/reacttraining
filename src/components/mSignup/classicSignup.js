import React, { useState } from "react";

const ClassicSignup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getValues = () => {
    console.log(fullname);
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <h1>React Js Classic Signup Form</h1>
      <div>
        <input
          type="text"
          name="fullname"
          placeholder="fullname"
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={getValues}>Show Values</button>
    </>
  );
};

export default ClassicSignup;
