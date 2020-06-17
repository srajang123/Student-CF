import React,{useState, useEffect} from 'react';
import './App.css';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home';
import Add from './Components/Add';
import View from './Components/View';
import Stud from './Components/Stud';

function App() {
  const [studs, setStud] = useState([]);
  const [New, setNew] = useState({
    name: '',
    age: '',
    gender: '',
    cf: ''
  });
  useEffect(() => {
    axios.get('http://localhost:5000/view')
      .then(res => setStud(res.data))
      .catch(err => console.log(err))
  });
  const SetNew = (dat) => {
    setNew(dat);
  }
  const editName = (e) => {
    let data = New;
    data.name = e.target.value;
    SetNew(data);
  }
  const editAge = (e) => {
    let data = New;
    data.age = e.target.value;
    SetNew(data);
  }
  const editGender = (e) => {
    let data = New;
    data.gender = e.target.value;
    SetNew(data);
  }
  const editCF = (e) => {
    let data = New;
    data.cf = e.target.value;
    SetNew(data);
  }
  const RESET = (e) => {
    let data = {
      name: '',
      age: '',
      gender: '',
      cf: ''
    }
    SetNew(data);
  }
  const SUBMIT = (e) => {
    axios.post('http://localhost:5000/add', New)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    RESET();
  }
  return (
    <div class="test-app">
      <Router>
        <Switch>
          <Route path='/add'><Add Name={editName} Age={editAge} Gender={editGender} CF={editCF} RESET={RESET} SUBMIT={SUBMIT} New={New} /></Route>
          <Route path='/view'><View data={studs} /></Route>
          <Route path='/stud/'><Stud data={studs} /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;