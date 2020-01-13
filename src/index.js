//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Box from './Components/box'
import Block from './Components/block'


class App extends React.Component {

    render() {
        return (
            <div className="reactdnd">
                <Box />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
