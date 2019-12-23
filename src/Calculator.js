import React, {Component} from 'react'
 class Calculator extends Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.mult = this.mult.bind(this);
        this.div = this.div.bind(this);
        this.state ={
            first : 0,
            second : 0,
            result: 0,
            result2: 0,
            result3:0,
            result4:0
        }
       
    }
    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }
 add(first, second){
     return  (parseFloat(first)+parseFloat(second));
    }
    mult(first, second){
        return  (parseFloat(first)*parseFloat(second));
       }
       div(first, second){
            if(parseFloat(first)===0 || parseFloat(second)===0){
                return -1;
            }
        return  (parseFloat(first)/parseFloat(second));
       }
    addition = () =>{
        const{first, second} =this.state;
        this.add(first,second);
        this.setState({
            result : (parseFloat(first)+parseFloat(second))
        })
    }
  soustraction = () =>{
        const{first, second} =this.state;
       // this.add(first,second);
        this.setState({
            result2 : (parseFloat(first)-parseFloat(second))
        })
    }
    multiplication = () =>{
        const{first, second} =this.state;
        this.add(first,second);
        var res = this.mult(first,second);
        this.setState({
            result3 : res
        })
    }
    division = () =>{
        const{first, second} =this.state;
        this.add(first,second);
        var res = this.div(first,second)
        if (res===-1){res= "Infinity"}
        this.setState({
            result4 : res
        })
    }
   
    render(){
        const {result} = this.state;
        const {result2} = this.state;
        const {result3} = this.state;
        const {result4} = this.state;
        return(
            <div>
                Addition:
                <br/>
                First Number
                <input type = "text" name= "first" onChange={this.handleChange}/>
            <br/>
            Second Number
                <input type = "text" name= "second" onChange={this.handleChange}/>
           
           <br/>
           <button onClick={this.addition}>Addition</button><br/>
           Result: <p>{this.state.result}</p>
           Soustraction:
                <br/>
                First Number
                <input type = "text" name= "first" onChange={this.handleChange}/>
            <br/>
            Second Number
                <input type = "text" name= "second" onChange={this.handleChange}/>
           
           <br/>
           <button onClick={this.soustraction}>Soustraction</button><br/>
           Result: <p>{this.state.result2}</p>
           Multiplication:
                <br/>
                First Number
                <input type = "text" name= "first" onChange={this.handleChange}/>
            <br/>
            Second Number
                <input type = "text" name= "second" onChange={this.handleChange}/>
           
           <br/>
           <button onClick={this.multiplication}>Multiplication</button><br/>
           Result: <p>{this.state.result3}</p>
           Division:
                <br/>
                First Number
                <input type = "text" name= "first" onChange={this.handleChange}/>
            <br/>
            Second Number
                <input type = "text" name= "second" onChange={this.handleChange}/>
           
           <br/>
           <button onClick={this.division}>Division</button><br/>
           Result: <p>{this.state.result4}</p>
            </div>

        )
    }
}


export default Calculator