import React, { Component } from 'react';

// Import components
import Widget from '../components/Widget';

//Import graphing component
import { Line } from 'react-chartjs-2';

// Import styling
import '../styles/GraphWidget.css';

class GraphWidget extends Component {
    constructor(props) {
        super(props);

        // Set the initial state for the graphing component
        this.state = {
            values: {
                labels: [],
                datasets: []
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scaleShowGridLines: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            fontFamily: "'Didact Gothic', sans-serif",
                            fontSize: 18,
                            fontColor: "#ecf0f1",
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontFamily: "'Didact Gothic', sans-serif",
                            fontSize: 18,
                            fontColor: "#ecf0f1",
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        }
    }

    // Update the state based on changing props
    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.generateDatasets(nextProps);
        }
    }

    //Convert the data received in props to a format the graphing component likes
    generateDatasets(props) {
        let datasets = [];
        let labels = []
        //Create a dataset object that Chart.js to understand
        props.data.forEach(function (data) {
            datasets.push({
                label:data.label,
                data: data.data,
                fill: false,
                borderColor: data.color,
                pointRadius: 0,
                pointHitRadius: 10
            });
            labels = data.labels
        }, this);

        //Let the React wrapper for Chart.js update the view
        this.setState({
            values: {
                datasets,
                labels
            }
        });
    }

    render() {
        return (
            // Wrap the graphing component in the generic wrapper
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                <div className="GraphWidget">
                    <Line data={this.state.values} options={this.state.chartOptions} />
                </div>
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
GraphWidget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    loading: React.PropTypes.bool.isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default GraphWidget;