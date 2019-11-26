import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import NumberList from './components/NumberList'
import EmailList from './components/EmailList'
import NavBar from './components/NavBar'


export default class App extends Component {
  state = {
    name: '',
    location: '',
    areaCode: '',
    phoneResults: [],
    emailResults: []
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }


  submitHandler = e => {
    e.preventDefault()
    axios
    .get(`http://localhost:5000/api?name=${this.state.name}&location=${this.state.location}&areacode=${this.state.areaCode}`)
    .then(data => {
      this.setState({ phoneResults: data.data.numbers, emailResults: data.data.emails  }, console.log(data))
    }).catch(err => console.log(err))
  }

 
  render() {
    const { name, location, areaCode } = this.state;
    return (
      <>
      <NavBar />
      <div className="banner d-flex align-items-center pl-3 pl-lg-5">
        <div>
          <h1 className="text-capitalize text-white">Free Phone</h1>
          <h1 className="text-uppercase font-weight-bold text-white">Search Engine</h1>
            <form onSubmit={this.submitHandler}>
              <div class="input-group mt-3">
                <span class="input-group-text">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    class="form-control"
                  />
              </div>
            <div class="input-group mt-2">
                <span class="input-group-text">Location</span>
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={this.onChange}
                    class="form-control"
                  />
              </div>
          <div class="input-group mt-2">
                <span class="input-group-text">Area Code</span>
                  <input
                    type="text"
                    name="areaCode"
                    value={areaCode}
                    onChange={this.onChange}
                    class="form-control"
                  />
            </div>
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
           </form> 
        </div>
      </div>
      {/* Search Results */}
      <section className="totals py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center text-uppercase">
              <div className="row my-3">
                {/* Single Column */}
                <div className="col-6 mx-auto col-md-2 px-3">
                  <h5>Phone Results</h5>
                  <NumberList phoneResults={this.state.phoneResults} />
                </div>
                <div className="col-6 mx-auto col-md-2">
                  <h5>Email Results</h5>
                  <EmailList emailResults={this.state.emailResults}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Info */}
      <section className="featured py-5">
        <div className="container">
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              <h1>No Expensive Software Needed!</h1>
              <p className="text-muted">Bootstrap your pipeline and meet the people you need.</p>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}
