import './App.css';
import Customerlist from './components/Customerlist'
import Traininglist from './components/Traininglist'
import SimpleMenu from './components/SimpleMenu'
import {AppBar, Toolbar, Typography,} from '@material-ui/core'
import '@material-ui/icons'


function App() {
  return (
    <div className="App">
     
          <SimpleMenu/>
        
      {/* <Customerlist/> */}
      {/* <Traininglist/> */}
    </div>
  );
}

export default App;
