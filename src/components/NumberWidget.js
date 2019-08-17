import React, { Component } from 'react';

// Import components
import Widget from '../components/Widget';
import NumberDisplay from '../components/NumberDisplay';
import Progress from '../components/Progress';

//Import styling
import '../styles/NumberWidget.css';

class NumberWidget extends Component {
    // Decide whether to show widget
    showWidget() {
        // Show loading indicator while initial data is being fetched
        if (this.props.value === undefined) {
            return <p>Loading...</p>;
        }

        return <div className="NumberWidget">
            <NumberDisplay max={this.props.max} value={this.props.value} />
            {/* Conditionally show the progress bar */}
            {this.showProgress()}
        </div>
    }

    // Decide whether to show a progress bar
    showProgress() {
        // Only show if the required min, max and value props are supplied
        if (this.props.min !== undefined && this.props.max !== undefined && this.props.value !== undefined) {
            return <Progress min={this.props.min} max={this.props.max} value={this.props.value} />;
        }
        return null;
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                {this.showWidget()}
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
NumberWidget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    loading: React.PropTypes.bool.isRequired,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default NumberWidget;