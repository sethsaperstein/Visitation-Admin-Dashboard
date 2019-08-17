import React, { Component } from 'react';
// Import widgets being used in this component
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';

// Add in styles
import '../styles/App.css';
import '../styles/Widget.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            	<ListWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/top-visited" heading="Top Visited Places" rowspan={4} />
                <NumberWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/dau-today" heading="Daily Active Users Today"/>
                <GraphWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/dau-graph" heading="DAUs Over Time" colspan={2} rowspan={2} />
        		<NumberWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/points-today" heading="Location Points Today"/>
        		<NumberWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/total-points" heading="Location Points All Time" />
        		<GraphWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/mau-graph" heading="MAUs Over Time" colspan={2} rowspan={2} />
        		<NumberWidgetContainer href="https://z4kqm8veeh.execute-api.us-east-1.amazonaws.com/test-dashboard/dashboard/dau-today" heading="TBD" />
            </div>
        );
    }
}

export default App;