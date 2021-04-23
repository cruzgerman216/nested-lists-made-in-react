import React from 'react';
import Section from './Section'
class Block extends React.Component{
    state ={
        on: false,
        data:[],
        style:{
            category:{
                fontSize: "30px",
                cursor: "pointer"
            },
            subcategory: {
                fontSize: "20px",
                cursor: "pointer"
            },
            list: {
                fontSize: "12px",
                cursor: "pointer"
            }
        }
    }
    expand(){
        let arr = [];
        this.setState({on:!this.state.on})
        Object.keys(this.props.data).forEach(key=>{
            if(key != "name" && key != "style"){
                arr.push(<Section category={this.props.data[key]}  key={this.props.data[key].name}/>)
            }
        })
        this.setState({data: arr});
    }
        
    render(){
        return (
            <div key={this.props.data.name} >
                <div style={this.state.style[this.props.data.style]}onClick={()=>{this.expand()}}>{this.props.data.name}</div>
                {this.state.on ? this.state.data : ""}
            </div>
        )
    }
}

  export default Block;