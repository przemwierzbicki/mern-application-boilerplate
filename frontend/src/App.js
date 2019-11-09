import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { changeName } from './redux/actions';

function App(props) {
  const { name, changeName } = props;

  useEffect(() => {
    changeName('michal');
  }, [ ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { name }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps, {
  changeName,
})(App);
