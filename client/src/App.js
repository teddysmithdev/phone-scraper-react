import React, { Component } from 'react'
import axios from 'axios';
import NumberList from './NumberList'

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
    const { fname, lname, areaCode, results } = this.state;
    return (
      <div className="container">
        <h1>Phone Number Finder</h1>
        <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={this.onChange}
              placeholder="fname"
            />
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={this.onChange}
              placeholder="lname"
            />
            <input
              type="text"
              name="areaCode"
              value={areaCode}
              onChange={this.onChange}
              placeholder="areacode"
            />
            <button type="submit">Submit</button>
            <NumberList results={this.state.results} />
          </form>
      </div>
    )
  }
}
