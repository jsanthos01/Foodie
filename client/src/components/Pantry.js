import React from 'react'
import cooking from "../images/pantry.jpg"

const Pantry = () => {
    const style = {
        val: {
            display: "flex", 
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        img : {
            width: "30%",
        },
        
    }

    return (
        <div className="ui container" style={{marginTop: "33px"}}>
            <div className="ui row container grid ">
                <div className="column">
                    <div className="ui large" style={style.val}>
                        <div className="ui" style={{width: "40%"}}>
                            <div className="ui medium header" style={style.header}><h1>Pantry Organizer</h1></div>                        
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
            <div class="ui stackable two column grid">
                <div class="column">
                    <h3 class="ui header">Fresh Zone</h3>
                    <div class="ui three doubling cards">
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div class="column">
                    <h3 class="ui header">Freezer</h3>
                    <div class="ui three doubling cards">
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div class="column">
                    <h3 class="ui header">Kitchen</h3>
                    <div class="ui three doubling cards">
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                        <div class="card">
                            {/* <div class="image"> */}
                            <img className="small" src="https://images.unsplash.com/photo-1608155798697-dac53c12afc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    )
}

export default Pantry
