import React, { useEffect, useState } from 'react'
import Header from './Sidebar'
import Carousel from './Carousel'
import RecipeComponent from './RecipeComponent'
import axios from "axios";
import { Button } from 'semantic-ui-react'
import RecipeCards from './RecipeCards';

const MainPage = () => {
    const [buttonState, setButtonState] = useState("random");
    const [active, setActive] = useState(0);
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        let url = buttonState == "random" ? `https://api.spoonacular.com/recipes/random?number=9&apiKey=556407e82d7a4c338fd48608e83a53ce` :
        `https://api.spoonacular.com/recipes/random?number=9&query=${buttonState}&apiKey=556407e82d7a4c338fd48608e83a53ce`;

        const response = await axios.get(url).catch(err => {
            console.log(err)
        });

        setRecipes(response.data.recipes)
    }

    const handleButtonActive = (state, i) => {
        setButtonState(state);
        setActive(i);
    }
    useEffect(() => {
        fetchRecipes();
    }, [buttonState])
    return (
        <div className="ui container">
            <Carousel setRecipes={setRecipes} setButtonState={setButtonState} />
            <div className=" ui big header relaxed centered">
                <h1>Recipe Wall</h1>
                <div style={{margin: "20px"}}>
                    <Button onClick={() => handleButtonActive("random", 0)} size='large'color={active == 0 ? "orange": null} >Random Recipes</Button>
                    <Button onClick={() => handleButtonActive("breakfast", 1)} size='large' color={active == 1 ? "orange": null} >Breakfast </Button>
                    <Button onClick={() => handleButtonActive("main course", 2)} size='large' color={active == 2 ? "orange": null} >Lunch </Button>
                    <Button onClick={() => handleButtonActive("dessert", 3)} size='large' color={active == 3 ? "orange": null} >Dessert </Button>
                </div>

            </div>
            <div className="ui grid">
                <div className="sixteen wide stretched column">
                    <div className="ui three wide cards">
                        {   buttonState == "complexSearch" ? 
                                <RecipeCards recipes={recipes} />
                            :  <RecipeComponent recipes={recipes} />

                        }
                    </div>
                </div>
            </div>
            <div className="ui container" style={{margin: "50px 0 50px 0", justifyContent:"center", display: "flex"}}>
                <Button size='large' color={active == 3 ? "orange": null} >More Results </Button>
            </div>


        </div>
    )
}

export default MainPage
