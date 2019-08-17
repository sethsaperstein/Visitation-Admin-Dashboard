import React, { Component } from 'react';

// Import styling
import '../styles/ListDisplay.css';

class ListDisplay extends Component {
    render() {
        return (
            // Render a wrapper around the children that are passed
            <ul className="ListDisplay">
                {this.props.children}
            </ul>
        )
    }
}

// Enforce the type of props to send to this component
ListDisplay.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
}

export default ListDisplay;