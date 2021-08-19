import React from 'react'
import cooking from "../images/cooks.png"
import RecipeCards from "./RecipeCards"

const Bookmark = () => {
    const style = {
        val: {
            display: "flex", 
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        img : {
            width: "40%",
        }
    }

    // const randomRecipes = useSelector(state => state.allRecipes.recipes);
    // console.log("rANDOM", randomRecipes)

    return (
      <div className="ui">
        <div className="ui row container grid ">
            <div className="column">
                <div className="ui large" style={style.val}>
                    <div className="ui" style={{width: "40%"}}>
                        <div className="ui medium header" style={style.header}><h1>Bookmarked Recipes</h1></div>                        
                        <p>This example is a quick exercise to illustrate how the default, static navbar
                            and fixed to top navbar work. It includes the responsive CSS and HTML, 
                            so it also adapts to your viewport and device.
                        </p>
                        <a href="" className="ui blue button">View navbar docs &raquo;</a>
                    </div>
                    <img src={cooking} className="ui large circular right image " style={style.img}/>
                </div>
            </div>
        </div>
        <div class="ui grid container full wide">
            <div class="column row"  >
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
                <div class="eight wide column" style={{paddingBottom: "25px"}} ><RecipeCards /></div>
            </div>
        </div>
      </div>
    )
}

export default Bookmark
