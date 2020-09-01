import React, { Component } from 'react';

import TempInput from './components/TempInput'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state={
    temp:'',
    scale:''
  }

  handleChange=(event)=>{
      const {value, name}=event.target;

      this.setState({
        temp:value, 
        scale:name
      })
  }

  converter=(name)=>{
    let temp;
    if(this.state.temp===''){
      return ''
    }else{
      if(this.state.scale===name){
        temp= this.state.temp
    }else{
        if(name==='celsius'){
          temp=((parseFloat(this.state.temp)-32.00)/1.8000).toString()
          //*1.8000+32.00)
        }else{
          temp=(parseFloat(this.state.temp)*1.8000+32.00).toString()
          //-32.00)/1.8000)
        }
    }
    return temp;
    }

    //if(temp===NaN){
    
    }
    
  //}

  render(){
    return (
      <div id='main' className='d-flex justify-content-center align-items-center'>
        <div className="container p-4">
          <form>
            <h3 className='mb-3 pb-2 px-0  mt-0'>Temperature converter</h3>
            <TempInput data={{
              handleChange:this.handleChange,
              name:'celsius',
              state:this.state,
              converter:this.converter
              }}/>
            <TempInput data={{
              handleChange:this.handleChange,
              name:'fahrenheit',
              state:this.state,
              converter:this.converter
            }}/>
        </form>

      </div>
      </div>
 
    );
  }
 
 
}

export default App;
