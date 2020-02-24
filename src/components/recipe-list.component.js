import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
  <tr>
    <td>{props.recipe.recipeName}</td>
    <td>{props.recipe.foodname}</td>
    <td>{props.recipe.foodname2}</td>
    <td>{props.recipe.foodname3}</td>
    <td>{props.recipe.foodname4}</td>
    <td>{props.recipe.foodname5}</td>
    <td>{props.recipe.foodname6}</td>
    <td>
      <Link to={"/edit/"+props.recipe._id}>edit</Link> | <button onClick={() => { props.deleteRecipe(props.recipe._id) }}>delete</button>
    </td>
  </tr>
)

export default class recipeList extends Component {
  constructor(props) {
    super(props);

    this.deleteRecipe = this.deleteRecipe.bind(this)

    this.state = {recipes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/recipes')
      .then(response => {
        this.setState({ recipes: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteRecipe(id) {
    axios.delete('http://localhost:5000/recipes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      recipes: this.state.recipes.filter(el => el._id !== id)
    })
  }

  recipeList() {
    return this.state.recipes.map(currentrecipe => {
      return <Recipe recipe={currentrecipe} deleteRecipe={this.deleteRecipe} key={currentrecipe._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Recipe Inventory</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Recipe</th>
              <th>Ingredient</th>
              <th>Ingredient</th>
              <th>Ingredient</th>
              <th>Ingredient</th>
              <th>Ingredient</th>
              <th>Ingredient</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.recipeList() }
          </tbody>
        </table>
      </div>
    )
  }
}