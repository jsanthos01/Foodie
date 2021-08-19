import React, { useState } from 'react'
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'

const RecipeComponent = (props) => {
    const [toggle, setToggle] = useState({id: null, active: false});
    const { recipes } = props;
    const handleClick = (id) =>{
        setToggle({ id: id, active: true});
    }
    
    console.log("recipes", recipes)
    var regex = /(<([^>]+)>)/ig
    return (
        <>
            {
                recipes.length > 0  && recipes.map( recipe => {
                    const { id, title, summary, image, servings, sourceUrl, healthScore, pricePerServing, readyInMinutes, extendedIngredients } = recipe;
                    return (
                        <div key={id} className="card">
                            <div className="image" style={{  height: "220px"}}>
                                <img src={image} />
                            </div>
                            <div style={{ zIndex: 1000, padding: "0 50px"}} className="right floated column grid ui">
                            <Button  size='large' color="red" toggle circular centered onClick={() => handleClick(id)}>
                                { toggle.id === id && toggle.active ? <Icon style={{margin: 0}} name='heart' /> : <Icon style={{margin: 0}} name='plus' /> }
                            </Button>
                            </div>
                            <div className="content " >
                                <h3 className="header">{title}</h3>
                                <div className="ui three column grid" style={{margin: "10px 0"}}>
                                    <div className="column" style={{textAlign: "center", fontWeight: "bold"}}>
                                        <div className="value">
                                            <div style={{fontWeight: "bold", color: "orange", fontSize:"1.3rem"}}>
                                            <i className="clock outline inline icon"></i>
                                                <b>{readyInMinutes}</b>
                                            </div>
                                            <div className="label">
                                                Minutes
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column" style={{textAlign: "center", fontWeight: "bold"}}>
                                        <div className="value">
                                        <div style={{fontWeight: "bold", color: "orange", fontSize:"1.3rem"}}>
                                                <i className="book inline icon"></i>
                                                {extendedIngredients.length}
                                            </div>
                                            <div className="label">
                                                Ingredients
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column" style={{textAlign: "center", fontWeight: "bold"}}>
                                        <div className="value">
                                        <div style={{fontWeight: "bold", color: "orange", fontSize:"1.3rem"}}>
                                            <i className="user inline icon"></i>
                                                {servings}
                                            </div>
                                            <div className="label">
                                                Servings
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <div className="description">
                                    {summary.replace(regex, "")}
                                </div>
                            </div>
                            <div className="ui floated" style={{padding: "20px", display: "flex", justifyContent: "flex-end"}}>
                                <Link to={`/recipe/${id}`}>
                                    <button className="teal floated center ui button">View Recipe</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecipeComponent
