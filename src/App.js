// import logo from './logo.svg';
// import './App.css';
//import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Chart from "./components/Chart";
import Comment from "./components/Comment";
import Analytics from "./components/Analytics";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Login></Login>
      <Dashboard></Dashboard> */}
      
      {/* <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar></Sidebar>
      </div> */}
      {/* <Router>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
        <Route index element={<Layout></Layout>}></Route>
        <Route path="products" element={<Product></Product>}></Route>
        </Route>
      </Routes>
      </Router> */}

      <Routes>
        <Route path="/" element={ <Login></Login> } />
        <Route path="dashboard" element={ <Dashboard></Dashboard> } />
        <Route path="table" element={<Table></Table>}></Route>
        <Route path="comment" element={<Comment></Comment>}></Route>
        <Route path="chart" element={<Chart></Chart>}></Route>
        <Route path="analytics" element={<Analytics></Analytics>}></Route>
      </Routes>

      
    </div>
    
  );
}

export default App;
