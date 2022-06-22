import React from "react";

function getRecords(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(["Abacaxi","Uva","Melão"])
            },2000)
    })
}


export default class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            total:0,
            frutas:[]
        }
        console.log('Construtor Chamado...');
    }

    onIncrementHandler = ()=>{
        this.setState({
            total: this.state.total +1,
        })
    }

    render(){
        console.log('render Chamado...')
        return (
            <div>
                <h3>Total: {this.state.total}</h3>
                <button onClick={this.onIncrementHandler}>Incrementar</button>
                <ul>
                    {this.state.frutas && this.state.frutas.map((fruta,index)=><li key={index}>{fruta}</li>)}
                </ul>
            </div>
        )
    }

    async componentDidMount(){
       const frutas = await getRecords();
       this.setState({frutas});
    }

    componentDidUpdate(){
        console.log("Componente atualizado!!!!");
    }

    componentWillUnmount(){
        console.log("Componente está sendo desmontado!!!");
    }

}