import React, { Component } from 'react';

// Import components
import Progress from '../components/Progress';

// Import styling
import '../styles/ListItem.css';

class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                <div className="value">{this.props.value}</div>
                <div className="label">
                    {this.props.label}
                    {/* Compare progress against others in the list */}
                    <Progress min={this.props.min} max={this.props.max} value={this.props.value} />
                </div>
            </li>
        )
    }
}

// Enforce the type of props to send to this component
ListItem.propTypes = {
    label: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default ListItem;