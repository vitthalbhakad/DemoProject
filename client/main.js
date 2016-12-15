//this code run automatically at client side
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

class App extends Component{
  render(){
    return(
      //<Game />
      <div>
      Hello form main.js
      </div>
    );
  }
};

Meteor.startup(()=>{
  ReactDOM.render(<App/>,document.querySelector('.container'));
});
