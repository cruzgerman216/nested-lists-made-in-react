import React from "react"
import Section from "./components/Section"

const categories ={
    name: "Categories",
    style: "category",
    cooking:{
        name: "Cooking",
        style: "category",
        recipes:{
            name: "recipes",
            style: "subcategory",
            blue_berry_muffins:{
                name:"Blue Berry Muffins",
                style: "list"
            },
            burrito:{
                name: "Burrito",
                style: "list"
            },
            milkshake:{
                name:"Strawberry Milkshake",
                style: "list"
            }
        }
    }
}


function App(){
    return(
        <div style={{margin:"20px"}}>
            <Section category={categories} key={categories.name}/>
        </div>
    )
}

export default App;