import './App.css';
import CakeView from './components/CakeView';
import UserView from './components/UserView';
import IcecreamView from './components/IcecreamView';
function App() {
  return (
    <div className="App">
      <CakeView />
      <br/>
      <br/>
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
