import logo from './logo.svg';
import './App.css';

function App() {

  const getServerResponse = async () => {

    const url = `${process.env.REACT_APP_PUBLIC_URL}`
    const resp = await fetch(url, {
      method: 'GET',
    })

    const data = await resp.json();
    console.log("Data is " + data.message);
    const message = data.message
    console.log(typeof(message));
    alert(message);
    return data.message;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>

          This project is ownership <b><i>Michael</i></b> and cannot be copyrighed in anyway. Ignore the spinning react logo

          <br/>

          <button onClick={getServerResponse}> Get server response</button>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
