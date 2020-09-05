import React, {useEffect, useState} from 'react'
//import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getUserRequest 
} from '../actions/users';

function App() {
  const disPatch = useDispatch();
  useEffect(()=> {
    disPatch(getUserRequest())
  }, [])

  return (
    <div />
  );
}

export default App;
