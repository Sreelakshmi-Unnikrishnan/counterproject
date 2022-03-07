import React,{Component} from "react";
import randomColor from "randomcolor";
import "./style.css";
class App extends Component{

  constructor()
  {
    super()
    this.state = {
      count : 0,
      color:""
    }
    this.incrementHandler = this.incrementHandler.bind(this)
    // this.decrementHandler = this.decrementHandler.bind(this)
  }
  componentDidMount(){
    this.setState({color:"red"})
    console.log("mounted and color changed")
  }

  componentDidUpdate(prevProps,prevState){
    console.log("1-current count state",this.state.count);
    console.log("2-previous count state",prevState.count);
    if(prevState.count !== this.state.count)
    {
      this.setState({color:randomColor()})
    }
    
  }

  incrementHandler(){
    this.setState((prevState)=>{
      return {
        count : prevState.count + 1
      }
    })
  }
  decrementHandler =() => {
    this.setState((prevState)=>{
      return {
        count : prevState.count - 1
      }
    })
  }

  render(){
      return(
        <div className="counter">
          {console.log("rendering completed")}
          <h1 style={{color:this.state.color}}>{this.state.count}</h1>
          <div className="btn-actions">
            <button onClick={this.incrementHandler}>Increment</button>
            <button onClick={this.decrementHandler}>Decrement</button>
          </div>
        </div>
      )
  }
}

export default App;
