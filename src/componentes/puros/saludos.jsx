import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludos extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡hola rola ! {this.props.name}
                </h1>
                <h2>
                    tu edad es de: {this.props.age}
                </h2>
                <div>
                    <button onClick={this.cumpleaño}>
                        cumplir años 
                    </button>
                </div>
            </div>
        );
    }

        cumpleaño = () => {
            this.setState((prevState) => (
        {
                age: prevState.age +1
            }
        ))
    }
}

Saludos.propTypes = {
    name: PropTypes.string,
};


export default Saludos;
