import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Correption from './Correption';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
   <>
   
   <Router> 
      <Navbar />
     <Switch>
      <Correption />
     </Switch>
   </Router>
   
   </>
 
  );
}

export default App;
