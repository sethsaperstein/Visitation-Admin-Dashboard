import React, { Component } from 'react';

// Import styling
import '../styles/Progress.css';

class Progress extends Component {
    render() {
        let value = this.props.value;

        // Limit value to min and max bounds
        if (value < this.props.min) {
            value = 0;
        } else if (value > this.props.max) {
            value = this.props.max;
        }

        // Adjust progress bar using inline styles
        let innerWidthStyle = { width: `${(value / this.props.max) * 100}%` };

        return (
            <div className="Progress">
                <div className="inner" style={innerWidthStyle} />
            </div>
        );
    }
}

// Provide a default value when one isn't supplied
Progress.defaultProps = {
    value: 0
}

// Enforce the type of props to send to this component
Progress.propTypes = {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    value: React.PropTypes.number.isRequired
}

export default Progress;