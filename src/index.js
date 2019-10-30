import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Coin from "./components/Coin.jsx"

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(coinData)
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact render={(props)=><Charts {...props} coinData={coinData} />} />
        <Route path="/:coin" exact render={(props)=> <Coin {...props}/>} />
        {/* <Charts coinData={coinData} /> */}
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
