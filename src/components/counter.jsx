import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
       
      };

        handleIncrement= () => {
            this.setState({ count: this.state.count + 1 });
        };

    render() { 
        return (
        <div className="container-fluid mb-4">
        <h1 className="mt-4 mb-4 bg-dark text-center text-light"> Feria Chilena del Libro</h1>
            <img className="my-block-center" src="https://www.feriachilenadellibro.cl/pub/media/catalog/product//3/0/301822.jpg" alt=""/>
            <p className="container mt-4 pb-3">Cuando la neoyorquina Rachel Chu acepta pasar el verano en Singapur con su novio, Nicholas Young, imagina un hogar familiar humilde y tiempo a solas con el hombre con el que espera casarse. Pero Nick ha olvidado facilitar ciertos detalles a su novia. En primer lugar, que la casa en la que creció parece un palacio; segundo, que está más acostumbrado a viajar en aviones privados que en coche; tercero, que, aparentemente, es el hombre soltero más codiciado del país. Y, tan pronto como aterriza de su brazo, Rachel se da cuenta de que en ese mundo de riqueza inimaginable sus vacaciones acaban de convertirse en una delirante carrera de obstáculos. «Una arrebatadora comedia para adictos a las compras... Perversamente deliciosa.» The New York Times</p>
            </div>
            <div className="container text-center pt-4 mb-6">
            <h3>Precio</h3>
            <span>$15.990</span>
            <span className="badge badge-success m-2">{this.state.count}</span>
            <button className="mb-6" 
            onClick={this.handleIncrement}
            className="btn btn-dark btn-sm"> Agregar</button>
        </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <span> 0 </span> : count;
    }
}
 
export default Counter;