import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{
  componentWillMount(){

    const config = {
      apiKey: 'AIzaSyCat7UMk9Ov8NGD6xeZ-kUzz34S5eV7qIc',
      authDomain: 'manager-fa83b.firebaseapp.com',
      databaseURL: 'https://manager-fa83b.firebaseio.com',
      projectId: 'manager-fa83b',
      storageBucket: '',
      messagingSenderId: '148528090336'
    };
    firebase.initializeApp(config);

  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>

          <Router />

      </Provider>
    );
  }
}

export default App;
