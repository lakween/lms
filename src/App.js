import logo from './logo.svg';
import './App.css';
import {Card} from "react-bootstrap";
import NavBar from "./common/layout/nav-bar/nav-bar";
import SideBar from "./common/layout/side-bar/side-bar";

function App() {
  return (
      <>
          <div style={{minHeight:'100vh' ,display:'flex',flexDirection:'column' ,boxSizing:'border-box'}}>
              <NavBar/>
              <div style={{display:'flex',flexDirection:'row', flexGrow: 1}}>
              <SideBar/>
              <text>scscscscscs</text>
              </div>
          </div>
      </>
  );
}

export default App;
