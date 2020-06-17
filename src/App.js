import React from 'react';
import './App.css';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home';
import Add from './Components/Add';
import View from './Components/View';
import Stud from './Components/Stud';
export default class App extends React.Component
{
  constructor(props)
  {
    super(props)
    {
      this.state={
        studs:[],
        new:{
          name:'',
          age:'',
          gender:'',
          cf:''
        }
      }
    }
  }
  SetNew=(dat)=>{
    this.setState({
      new:dat
    })
  }
  editName=(e)=>{
    let data=this.state.new;
    data.name = e.target.value;
    this.SetNew(data);
  }
  editAge = (e) => {
    let data = this.state.new;
    data.age = e.target.value;
    this.SetNew(data);
  }
  editGender = (e) => {
    let data = this.state.new;
    data.gender = e.target.value;
    this.SetNew(data);
  }
  editCF = (e) => {
    let data = this.state.new;
    data.cf = e.target.value;
    this.SetNew(data);
  }
  RESET=(e)=>{
    let data={
      name:'',
      age:'',
      gender:'',
      cf:''
    }
    this.SetNew(data);
  }
  SUBMIT=(e)=>{
    axios.post('http://localhost:5000/add',this.state.new)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    this.RESET();
  }
  componentDidMount=()=>{
    axios.get('http://localhost:5000/view')
    .then(res=>this.setState({
      studs:res.data
    }))
    .catch(err=>console.log(err))
    console.log(this.state.studs);
  }
  render=()=>{
    return(
    <div class="test-app">
          <Router>
            <Switch>
              <Route path='/add'><Add Name={this.editName} Age={this.editAge} Gender={this.editGender} CF={this.editCF} RESET={this.RESET} SUBMIT={this.SUBMIT} new={this.state.new}/></Route>
              <Route path='/view'><View data={this.state.studs}/></Route>
              <Route path='/stud/'><Stud data={this.state.studs}/></Route>
              <Route path='/'><Home /></Route>
            </Switch>
          </Router>
    </div>
    )
  }
}
