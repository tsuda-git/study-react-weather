import './App.css';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Results from './Components/Results/Results';

function App() {
  return (
    <div className="App">
        <div className='header-com' ><Header /></div>
        <div className='form-com' ><Form /></div>
        <div className='resuluts-com' ><Results /></div>
    </div>
  );
}

export default App;
