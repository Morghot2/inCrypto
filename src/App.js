import React from "react";
import { Switch, Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Trackfolio,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/trackfolio" element={<Trackfolio />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<CryptoDetails />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
      
        <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          <Link to="/">
            inCrypto
          </Link>
         
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/trackfolio">Trackfolio</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
};

export default App;
