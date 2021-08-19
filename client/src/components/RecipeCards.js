import React from 'react'
import { Rating, Button } from 'semantic-ui-react'

const RecipeCards = (props) => {
    // const { id, title, summary, image, servings, sourceUrl, healthScore, pricePerServing, readyInMinutes, extendedIngredients } = props.recipe;

    return (
        <div className="ui items segment">
            <div className="item">
                <div className="image">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" />
                </div>
                <div className="content" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between',}}>
                        <h3 style={{ margin: 0}} className="header">Spinach Salad</h3>
                        <Button circular icon='heart outline' color="red"  />                    
                    </div>
                    <div className="meta">
                        <span>Simple recipes for an overnight or weekend celebration table. 
                            I promise that it will be the easiest salads you will ever make! 
                        </span>
                    </div>
                    <div className="description">
                        <Rating icon='star' defaultRating={3} maxRating={4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCards
