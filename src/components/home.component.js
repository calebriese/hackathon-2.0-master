import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = props => (
  <tr>
  
  </tr>
)

export default class HomeList extends Component {
  constructor(props) {
    super(props);



    this.state = {home: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/home')
      .then(response => {
        this.setState({ home: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

 

  homeList() {
    return this.state.home.map(currentHome => {
      return <Home home={currentHome} deleteHome={this.deleteHome} key={currentHome._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>HOME SCREEN</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
             
            </tr>
          </thead>
          <tbody>
            { this.homeList() }
          </tbody>
        </table>
      </div>
    )
  }
}