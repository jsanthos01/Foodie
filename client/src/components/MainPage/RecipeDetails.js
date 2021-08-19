import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Image, Segment, Label } from 'semantic-ui-react'
import axios from "axios";

const RecipeDetails = () => {
    let { id } = useParams();
    const [ recipeInfo, setRecipeInfo ] = useState({});
    const [ steps, setSteps ] = useState([]);
    const [ ingredients, setIngredients ] = useState([]);
    
    const fetchRecipes = async () => {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=556407e82d7a4c338fd48608e83a53ce`).catch(err => {
            console.log(err)
        });
    
        setRecipeInfo(response.data);
        setSteps(response.data.analyzedInstructions[0].steps)
        setIngredients(response.data.extendedIngredients)
    }
    useEffect(() => {
        fetchRecipes();
    }, []);

    
    return (
      
        <div className="ui container">
            { recipeInfo && 
            <>
                <div className="ui grid">
                    <div className="ui two column stackable center grid">
                        <div className="row">
                            <div className="column rp ui big header relaxed centered ">
                                <h1>{recipeInfo.title}</h1>
                                <div className="grid ui internally celled">
                                    <div className="three column row centered">
                                        <div className="column">
                                            <h1 style={{margin: 0, padding: 0}}>{recipeInfo.readyInMinutes}</h1>
                                            <p>minutes</p>
                                        </div>
                                        <div className="column">
                                            <h1 style={{margin: 0, padding: 0}}>{recipeInfo.servings}</h1>
                                            <p>serves</p>
                                        </div>
                                        <div className="column">
                                            <h1 style={{margin: 0, padding: 0}}>{recipeInfo.spoonacularScore}</h1>
                                            <p>score</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column lp">
                                <img className="ui fluid image rounded" src={recipeInfo.image} />
                                <div className="ui row">
                                    <a class="ui large basic teal label">Smart</a>
                                    <a class="ui large basic teal label">Smart</a>
                                    <a class="ui large basic teal label">Smart</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <div className="ui column grid ">
            <div className="six wide column padded">
                <Segment raised >
                    <Label as='a' color='teal' size="huge" ribbon style={{margin: "20px 0"}}>
                        Ingredients
                    </Label>
                    <Image.Group size='tiny' style={{display: "flex", flexWrap: "wrap", overflow: 'auto', maxHeight: 500}} >
                        {ingredients.map( obj => (
                            <div className="imageContainer" >
                                <Image src={obj.image ? `https://spoonacular.com/cdn/ingredients_100x100/${obj.image}`: "https://ultkitchen.ca/wp-content/uploads/2018/08/food-image-placeholder.png"} />
                                <Label style={{textAlign: "center"}}>
                                    {obj.original}
                                </Label>
                            </div>
                        ))}
                    </Image.Group>
                </Segment>
            </div>
            <div className="nine wide column ">
                <div className="ui very padded segment">
                    <h2>Instructions</h2>
                    <div className="ui relaxed list"  style={{ overflow: 'auto', maxHeight: 500}}>
                        {steps.map( obj => (
                            <div className="item">
                                <div className="content" style={{lineHeight: "25px"}}>
                                    <div className="header" style={{fontSize: "16px"}}>
                                        <i className="check circle outline icon" style={{color: "#22BB9C"}}></i>
                                        Step {obj.number}
                                    </div>
                                    <div className="description " style={{fontSize: "14px", fontWeight: "500", marginLeft: "20px"}}>
                                        {obj.step}
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
            </div>
            </>
            }
        </div>
    
    )
}

export default RecipeDetails
