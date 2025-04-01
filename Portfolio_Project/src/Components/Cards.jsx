import { useState} from 'react'
import '../Styles/Cards.css'
function Cards(){

    return(
        <>
            <h1>Projects</h1>
            <div className="card">  
                <div className="container">
                    <h1>This is my project</h1>
                    <p>Languages utilized</p>
                    <p>Description</p>
                </div>
            </div>
            <div id="buttons">
                <button>&#8592;</button>
                <button>&#8594;</button>   
            </div>
        </>
    )
}

export default Cards