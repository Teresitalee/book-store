import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl:'https://www.feriachilenadellibro.cl/pub/media/catalog/product//3/0/301822.jpg',
      };

    render() { 
        return (
        <div>
            <img src={this.state.imageUrl} alt=""/>
            <span className="badge badge-success m-2">{this.state.count}</span>
            <button> Agregar</button>
        </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <span> 0 </span> : count;
    }
}
 
export default Counter;