import React from 'react';
import './App.css';
import Web3 from 'web3'
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({
    account: ""
  });

  useEffect(() => {
    async function loadBlockchainData() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
    
      setState({...state, account: accounts[0]})
    }

    loadBlockchainData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>{state.account}</h2>
      </header>
    </div>
  );
}

export default App;
