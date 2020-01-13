//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Box from './Components/box'


class App extends React.Component {
    render() {
        return (
            <div className="reactdnd" style={{ display: "flex" }}>
                <Box name="Block 1" />
                <Box name="Block 2" />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
