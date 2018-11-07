import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };
 
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getRecipes(this.state.recipeSearch)
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ recipes: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };


  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        console.log(res);
        console.log("--------------");
        console.log(res.data.docs);
        this.setState({ recipes: res.data.docs });
        console.log(this.state.recipes);
      })
      .catch(err => console.log(err));
  };




  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="lg-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Articles</h1>
                ) : (
                  <RecipeList>
                    {this.state.recipes.map(recipe => {
                      return (
                        <RecipeListItem
                        key={recipe.title}
                        title={recipe.headline.main}
                        href={recipe.web_url}
                        ingredients={recipe.pub_date}
                        // thumbnail={"https://static01.nyt.com/" + recipe.multimedia[2].url}
                        />
                      );
                    })}
                  </RecipeList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;