import React from "react";

export default class ButtonCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            totalClicks :0
        }
    }

    onClickHandler = (event)=>{
        this.setState({
            totalClicks: this.state.totalClicks +1
        });
    }

    render(){
        return (
            <div>
                <h1>A quantidade de cliques do botão é {this.state.totalClicks}</h1>
                <button onClick={this.onClickHandler}>Click</button>
            </div>
        )
    }
}