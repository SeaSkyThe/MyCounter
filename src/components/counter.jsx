import React, { Component } from "react";

class Counter extends Component{
   
    
    getBadgeClasses() {
        let classes = "badge m-2";

        if (this.props.counter.value === 0) {
            classes += " badge-warning";
        }
        else {
            classes += " badge-primary";
        }
        return classes;
    };

    formatValue(){
        const { value: value } = this.props.counter;

        if(value === 0){
            return 'Zero'
        }
        else{
            return value
        }
        
    };

   
    render(){
        //console.log('props', this.props);

        return(
        <div>
            <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
            
       
        );
    };
}

export default Counter;