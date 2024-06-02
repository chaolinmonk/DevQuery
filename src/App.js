import './App.css';
import './components/GeneralComps/GeneralComps.css'
import Chat from './components/chat/chat';
import Apiconsumptions from './components/ApiConsumptions/apiconsumptions';
import Button from './components/GeneralComps/button';
import Cardbtn from './components/GeneralComps/Cardbtns';
function App() {
  return (
    <div className="App">
      <Apiconsumptions/>
      <Chat/>
      <Button/>
      <Button cancel={true}/>
    </div>
  );
}

export default App;
