import React, { Component } from 'react';


class NavBar extends Component {

    render() { 
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">My Counter</span>
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </div>
            </nav>
            
        );
    }
}
 
export default NavBar;