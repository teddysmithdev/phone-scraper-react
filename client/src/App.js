import React, { Component } from 'react'
import axios from 'axios';
import NumberList from './../src/components/NumberList'
import NavBar from './../src/components/NavBar'
import Header from './components/Header'
import Grid from './components/Grid'

export default class App extends Component {
  state = {
    fname: '',
    lname: '',
    areaCode: '',
    results: []
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }


  submitHandler = e => {
    e.preventDefault()
    axios
    .get(`http://localhost:5000/api?first=${this.state.fname}&last=${this.state.lname}&areacode=${this.state.areaCode}`)
    .then(data => {
      this.setState({ results: data.data.numbers })
    }).catch(err => console.log(err))
    console.log(this.state.results)
  }

 
  render() {
    const { fname, lname, areaCode } = this.state;
    return (
      <>
      <NavBar />
      <Header />
      <div classname="overlay"></div>
      <div className="container">
      <form onSubmit={this.submitHandler}>
        <div class="form-group mt-3">
        <label for="exampleInputEmail1"><h4>First Name</h4></label>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={this.onChange}
              class="form-control"
            />
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1"><h4>Last Name</h4></label>
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={this.onChange}
              class="form-control"
            />
          </div>
          <div class="form-group">
          <label for="exampleInputPassword1"><h4>Area Code</h4></label>
            <input
              type="text"
              name="areaCode"
              value={areaCode}
              onChange={this.onChange}
              class="form-control"
            />
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
            <NumberList results={this.state.results} />
          </form>
          </div>
      </>
    )
  }
}
