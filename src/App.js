import React from 'react';
import ProfileContainer from './components/Profile/ProfileContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import {Route} from "react-router-dom";
import './App.css';
//import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader.jsx';
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
      if(!this.props.initialized) {
        return <Preloader/>
      }

      return (
        <div  className="app-wrapper">
          <HeaderContainer />
          <Navbar/>
          <div className="app-wrapper-content">
            <Route 
              path="/login" 
              render={() => <Login/>}/>
            <Route 
              path="/profile/:userId?" 
              render={ () => <ProfileContainer/> }/>
            <Route 
              path="/dialogs" 
              exact 
              render={withSuspense(DialogsContainer)}/>
            <Route
              path="/users"
              render={ () => <UsersContainer/> }/>
            {/* <Route path="/news" component={News}/> */}
            {/* <Route path="/music" component={Music}/> */}
            {/* <Route path="/settings" component={Settings}/> */}
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
