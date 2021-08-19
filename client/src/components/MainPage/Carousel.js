import React, { useState } from 'react'
import image1 from "../../images/image1.jpg"
import image2 from "../../images/image2.jpg"
import image3 from "../../images/image3.jpg"
import image4 from "../../images/image4.jpg"
import chefHat from "../../images/chef-hat.png"
import axios from "axios";
import {Button,Input, Divider, Form, Label } from 'semantic-ui-react'

const Carousel = (props) => {
    const { setRecipes, setButtonState } = props;
    const [ input , setInput ] = useState("");
    const [ error , setError ] = useState(0);
    const handleInputChange = (e) => {
        if(error != 0){
            setError(0)
        }
        setInput(e.target.value);
    }

    const handleSubmit = async () => {
        if (input.length > 0 ){
            let url = `https://api.spoonacular.com/recipes/complexSearch?number=9&query=${input}&apiKey=556407e82d7a4c338fd48608e83a53ce`;
            let response = await axios.get(url).catch(err => {
                console.log(err)
            });

            console.log("carousal = ", response.data.results)
            console.log("carousal = ", response.data.results.length)
            response = response.data.results ? response.data.results : [];
            setRecipes(response);
            setButtonState("complexSearch")
            setError(0)
        } else {
            setError(1)
        }
    }
    return (
        <div className="ui equal width grid" style={{ paddingTop: "100px"}}>
            <div className="equal width row">
                <div className="column centered" style={{display: 'flex'}}>
                <div className="ui sizer vertical segment">
                    <div className="ui huge header"><h1>Food <img src={chefHat} /> Mood</h1></div>
                    <div className="ui large header"><h2>Want to learn how to cook but confused how to start? Not to Worry!</h2></div>
                    <div className="ui hidden divider"></div>
                            { error ? 
                                <Label basic color='red' >
                                    Please enter a value
                                </Label> : null 
                            }
                        <div className="ui icon big input">
                            <input style={{marginRight: "24px"}} type="text" onChange={handleInputChange} placeholder="Search..." />
                            <Button onClick={handleSubmit} basic color='grey' content='Search ' /> 
                        </div>                  
                    <div className="ui hidden divider"></div>
                    <div className="ui row" style={{display: "flex", justifyContent: "center"}}>
                        <button className="ui button large" style={{ backgroundColor: "#FF912C", color: "#fff"}}>
                            Add Search Filters 
                        </button>                            
                            <div className="ui floating labeled icon dropdown button" style={{ backgroundColor: "#FFEDDA"}}>
                                <i className="filter icon"></i>
                                <span className="text ">Search By Options</span>
                                <div className="menu">
                                    <div className="header">
                                    Search Issues
                                    </div>
                                    <div className="ui left icon input">
                                    <i className="search icon"></i>
                                    <input type="text" name="search" placeholder="Search..." />
                                    </div>
                                    <div className="header">
                                    <i className="tags icon"></i>
                                        Ingredients
                                    </div>
                                    <div className="item">
                                    <div className="ui red empty circular label"></div>
                                        Cuisine
                                    </div>
                                    <div className="item">
                                    <div className="ui blue empty circular label"></div>
                                        Diet
                                    </div>

                                </div>
                            </div>
                        {/* </button> */}
                    </div>                    
                </div>
                </div>
                <div className="column " style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className="ui slide masked reveal image large">
                        <img src={image1} className="ui visible content image medium" />
                        <img src={image2} className="ui hidden content image medium" />
                        <img src={image3} className="ui hidden content image medium" />
                        <img src={image4} className="ui hidden content image medium" />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Carousel
