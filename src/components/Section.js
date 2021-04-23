import Block from "./Block"


function Section(props){
console.log(props.category.name)
    return (
        <div style={{margin: "20px 0px 20px 0px"}}>
            <Block data={props.category}  key={props.category.name}/>
        </div>
    )
}

export default Section;