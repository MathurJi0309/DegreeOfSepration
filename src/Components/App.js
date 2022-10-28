import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import ListItem from './ListItem';
import FormData from './FormData';
import Create from './Create';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div id='main'>
          <Navbar/>
          <div id='formDiv'>
          <Create/>
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
}

export default App;
