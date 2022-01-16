import React, { Component } from 'react';
import BadJokes from "./BadJokes";
import ThemeContextProvider from './ThemeContext';



class App extends Component {


  render() {


    

    return ( 
      <div>

    <ThemeContextProvider>

            <h2>Salut App </h2>

            <BadJokes/>
    </ThemeContextProvider>

      
      </div>
     );
  }
}
 
export default App;
