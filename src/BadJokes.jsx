import React, { Component } from 'react';
import "./BadJokes.scss";
import ThemeContextProvider from './ThemeContext';

class BadJokes extends Component {


    static contextType = ThemeContext;

    
    
    render() { 

        console.log(this.context)
        return ( 
            <div>

                <h2>Salut BadJokes</h2>
        
            </div>
         );
    }
}
 
export default BadJokes;