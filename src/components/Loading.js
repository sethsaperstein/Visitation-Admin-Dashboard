import React, { Component } from 'react';

// Import styling
import '../styles/Loading.css';

class Loading extends Component {
    render() {
        return (
            // Display a simple SVG image 
            <svg className="Loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" version="1.1" y="0px" x="0px" enableBackground="new 0 0 42 42">
                <rect height="10" width="7" y=".5" x="17.5" />
                <rect height="10" width="7" y="31.5" x="17.5" />
                <rect transform="matrix(.707 .707 -.707 .707 16.4 -19.6)" height="9.89" width="6.38" y="5.02" x="28.6" />
                <rect transform="matrix(.707 .707 -.707 .707 25.4 2.26)" height="9.89" width="6.38" y="26.8" x="6.77" />
                <rect height="7" width="10" y="17.5" x="31.5" />
                <rect height="7" width="10" y="17.5" x=".5" />
                <rect transform="matrix(-.707 .707 -.707 -.707 76.7 31.8)" height="9.89" width="6.38" y="26.8" x="28.6" />
                <rect transform="matrix(-.707 .707 -.707 -.707 24.1 9.96)" height="9.89" width="6.38" y="5.02" x="6.77" />
            </svg>
        );
    }
}

export default Loading;