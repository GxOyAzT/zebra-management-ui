import './App.css';
import MainLayout from './components/layouts/MainLayout';
import PopupContext from './contexts/PopupContext';

function App() {
  return (
    <div className="App">
      <PopupContext>
        <MainLayout/>
      </PopupContext>
    </div>
  );
}

export default App;