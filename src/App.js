import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';



class App extends Component{

	constructor(){
		console.log("App Constructor")
		super();
		this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);

        this.state = { 
            counters: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 4 }
            ]
        }; 
	}

	componentDidMount(){
		console.log("App Mounted");
	}


    handleDelete(counterId){
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
    };

    handleReset(){
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});  
    };

    handleIncrement(counter){
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };
	
    render (){
		console.log("App Rendered")
      	return (
			<>
			<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
			<main className='container'>
				<Counters
					onReset={this.handleReset}
					onIncrement={this.handleIncrement}
					onDelete={this.handleDelete}
					counters={this.state.counters}
				/>
			</main>
			</>
        
      	);
    };
      
    
}

export default App;
