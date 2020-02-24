import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import FoodList from "./components/food-list.component";
import EditFood from "./components/edit-food.component";
import ExerciseList from "./components/home.component";
import RecipeList from "./components/recipe-list.component";
import Navbar2 from "./components/navbar2.component";


function App() {
  return (
    <Router>
      <Navbar2/>
     <div className="container">
        <br/>
        <Route path="/foods" exact component={FoodList} />
        <Route path="/edit/:id" component={EditFood} />
        <Route path="/recipes" component={RecipeList} />
      </div>
    </Router>
  );
}

export default App;
