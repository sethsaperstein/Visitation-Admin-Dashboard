import React, { Component } from 'react';

// Import request module
import axios from 'axios';

// Import components
import GraphWidget from '../components/GraphWidget';

class GraphWidgetContainer extends Component {
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
        //this.setState({ loading: true });

        // Fetch data
        
        return axios.get(this.props.href)
            .then(response => {
                // Update state with data
                this.setState({ loading: false, data: response.data });
            })
            .catch(error => {
                // At least tell the Widget component we have stopped loading
                console.log(error);
                this.setState({ loading: false });
            });
        /*
        this.fakeData = 
        [
            {
                label: "Opened Tickets",
                data: [1, 5, 10, 20, 21, 25, 44, 100],
                labels: ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"],
                color: "#e74c3c"
            }
        ]
        
        this.setState({loading: false, data:this.fakeData})
        */
    }

    render() {
        console.log("DATA", this.state.data)
        return (
            // Render the graph widget
            <GraphWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} data={this.state.data} loading={this.state.loading} />
        );
    }
}

// Enforce the type of props to send to this component
GraphWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default GraphWidgetContainer;