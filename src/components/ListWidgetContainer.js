import React, { Component } from 'react';

// Import request module
import axios from 'axios';

//Import styling
import ListWidget from '../components/ListWidget';

class ListWidgetContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            values: []
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        
        this.getData().then(_ => {
            // Re-fetch every minute
            this.interval = setInterval(this.getData, 60000);
        });
        
    }

    // Fetch new data
    getData() {
        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

        
        return axios.get(this.props.href)
            .then(response => {
                // Update state with data
                this.setState({ loading: false, values: response.data });
            })
            .catch(error => {
                // At least tell the Widget component we have stopped loading
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        console.log("LIST:", this.state.values)
        return (
            // Render the list widget
            <ListWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} listItems={this.state.values} loading={this.state.loading} />
        );
    }
}

// Enforce the type of props to send to this component
ListWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default ListWidgetContainer;