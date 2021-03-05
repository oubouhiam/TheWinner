  import React, { Component } from "react";
  import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
  import UserService from "../services/user.service";
  import { Link, withRouter } from 'react-router-dom';
  import foot from '../images/foot.jpg';
  export default class BoardUser extends Component {
      constructor(props) {
        super(props)
        this.state = {
          item :[],
          isloaded:false, 
          currentStep: 1,
        }
      }
    
   componentDidMount(){
        
        fetch('api/Questions')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isloaded :true,
            items: json,
          })
        });
      }
       
  
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 11? 11: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <4){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      return null;
    }
      

    render() {    
      var { isloaded,items}=this.state;
      if(!isloaded){
        return <div> Loading... </div>
      }else{
        return(
          // <div>
          //   <ul>
          //     {items.map(item => (
          //       <li key ={item.id}>
          //       {item.main_question}|{item.anser_quesion}</li>
          //     ))};
          //   </ul>
          //  </div>
          <div className="form-group">
              <label>Question 1</label>
              <div className="form2">
              <img src={foot} width="400" height="200" position="relative" left ="28%" />
               </div>
             {items.map(item => (
                <li key ={item.id}>
                {item.main_question}{item.anser_quesion}</li>
              ))}
             <br></br>
             <div className="form2" > 
               <button className="butn1"><a href="">11 joueurs</a></button>
             <button className="butn1"><a href="">13 joueurs</a></button>
            <button className="butn1"><a href="">14 joueurs</a></button>
             <button className="butn1"><a href="">15 joueurs</a></button></div>
      
           </div>

        )
      };

    }
  }


    //       <React.Fragment>
         
    
    //       <form onSubmit={this.handleSubmit}>
    //       {/* 
    //         render the form steps and pass required props in
    //       */}
    //         <Step1 
    //           currentStep={this.state.currentStep} 
    //           handleChange={this.handleChange}
    //           qts={this.state.qts}
    //           correctAns={this.state.correctAns}
    //           IncorrectAns={this.state.IncorrectAns}
    //         />
    //         <Step2 
    //           currentStep={this.state.currentStep} 
    //           handleChange={this.handleChange}
    //           qts1={this.state.qts1}
    //           correctAns1={this.state.correctAns1}
    //           IncorrectAns1={this.state.IncorrectAns1}
    //         />
    //         <Step3 
    //           currentStep={this.state.currentStep} 
    //           handleChange={this.handleChange}
    //           qts2={this.state.qts2}
    //           correctAns2={this.state.correctAns2}
    //           IncorrectAns2={this.state.IncorrectAns2}
    //         />
    //          <Step4 
    //           currentStep={this.state.currentStep} 
    //           handleChange={this.handleChange}
    //           qts2={this.state.qts2}
    //           correctAns2={this.state.correctAns2}
    //           IncorrectAns2={this.state.IncorrectAns2}
    //         />
    //      <Step5
    //           currentStep={this.state.currentStep} 
    //           handleChange={this.handleChange}
    //           qts2={this.state.qts2}
    //           correctAns2={this.state.correctAns2}
    //           IncorrectAns2={this.state.IncorrectAns2}
    //         />
    //         {this.previousButton()}
    //         {this.nextButton()}
    
    //       </form>
    //       </React.Fragment>
    //     );
    //   }
    // }
    
    // function Step1(props) {
    //   if (props.currentStep !== 1) {
    //     return null
    //   } 
    //   return(
        
    //     <div className="form-group">
    //              <h1> Your name </h1>
    //          <input
    //       className="form-control"
    //       id="Yourname"
    //       name="Yourname"
    //       type="text"
    //       required
    //       placeholder="Enter Your Name"
    //       value={props.qts3}
    //       onChange={props.handleChange}
    //       />
    //     </div>
    //   );
    // }
    
    // function Step2(props) {
    //   if (props.currentStep !== 2) {
    //     return null
    //   } 
    //   return(
    //     <div className="form-group">
    //      <select  className="form-control" id="categories" name="categories" >
    //         <option value="select">Select Catgories</option>
    //         <option value={props.correctAns9}>tech</option>
    //         <option value={props.correctAns9}>sport</option>
    //         <option value={props.correctAns9}>movies</option>
    //       </select>
    //     </div>
    //   );
    // }
    // function Step3(props) {
    //   if (props.currentStep !== 3) {
    //     return null
    //   } 
    //   return(
    //     <div className="form-group">
    //     <label>Question 1</label>
    //     <div className="form2">
    //     <img src={foot} width="400" height="200" position="relative" left ="28%" />
    //     </div>
    //     <h1>De combien de joueurs se compose une équipe de football ?</h1>
    //    <br></br>
    //    <div className="form2" > 
    //      <button className="butn1"><a href="">11 joueurs</a></button>
    //     <button className="butn1"><a href="">13 joueurs</a></button>
    //     <button className="butn1"><a href="">14 joueurs</a></button>
    //     <button className="butn1"><a href="">15 joueurs</a></button></div>

    //   </div>
    //   );
    // }

   


    // function Step5(props) {
    //   if (props.currentStep !== 5) {
    //     return null
    //   } 
    //   return(
    //     <div className="form-group">
    //     <h1>Your soccer </h1>
    //   </div>
    //   );
    // }
  