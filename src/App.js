import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import "./styles/App.css";

// const API_KEY = "fce04e28a961089bf89104513faf081b";
const URL =
  "http://www.apilayer.net/api/live?access_key=fce04e28a961089bf89104513faf081b&currencies=USD, EUR, UAH, PLN, RUB, BTC";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const json = await result.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data === "" ? null : <Form data={data} />}
    </div>
  );
};

export default App;
