
import './App.css';
import Navbar from './Navbar';
import ListItem from './ListItem';
import FormData from './FormData';

function App() {
  return (
    <div className="App">
      <div id='main'>
        <Navbar/>
        <div id='formDiv'>
        <form id='form'>
          <input placeholder='name of person' className='input'>
          </input>
          <input placeholder='name of person' className='input'>
          </input>
          <button type="submit" className='btn'>
            Add in List
          </button>
        </form>
        </div>
        <div id='listDiv'>
          <ListItem/>
        </div>
        <div id='findDiv'>
        <FormData/>
        </div>
      </div>
    </div>
  );
}

export default App;
