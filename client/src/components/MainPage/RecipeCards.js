import React, { useState } from 'react'
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'

const RecipeCards = (props) => {
    const [toggle, setToggle] = useState({id: null, active: false});
    const { recipes } = props;
    const handleClick = (id) =>{
        setToggle({ id: id, active: true});
    }

    console.log("recipes", recipes)
    return (
        <>
            {
                recipes.length > 0 && recipes.map( recipe => {
                    const { id, title, image } = recipe;
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

export default RecipeCards
