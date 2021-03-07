// import Counter from './Counter'
import React from 'react';
import './App.css';
// import Header from './Header';
// import Main from './MainWithFunction';
// // import CounterFunction from './counterbyfunction';
// // import Hook from './Hook';
// // import Fetch from './Fetch';
// // import Contextapi from './Contextapi';
// import ThemeContext from './ThemeContext';
import { useDataLayerValue } from "./DataLayer";



function App() {
  // const themeHook = useState("light");
  const [{ data }, dispatch] = useDataLayerValue();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INSC" })}>-1</button>
      <button onClick={() => dispatch({ type: "DESC" })}>+1</button>

      <h1>{data} </h1>
      {/* <Counter />
    <CounterFunction />
    <Hook />
    <Fetch />
    <Contextapi /> */}

      {/* <ThemeContext.Provider value={themeHook}>
       <Header />
        <Main />
      </ThemeContext.Provider> */}



    </div>
  );
}

export default App;

