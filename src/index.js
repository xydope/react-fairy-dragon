//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Box from './Components/box'


const data = [
    { id: 1, val: "Block1", box: 'boxFirst' },
    { id: 2, val: "Block2", box: 'boxFirst' },
    { id: 3, val: "Block3", box: 'boxSecond' }
];

class App extends React.Component {
    render() {
        let dataS = {
            boxFirst: [],
            boxSecond: [],
        }

        data.forEach((item) => {
            dataS[item.box].push(item);
        })

        let renderData = Object.keys(dataS).slice().map((boxName) => {
            return (
                <Box key={boxName} name={boxName} blocks={dataS[boxName]} />
            )
        })

        return (
            <div className="reactdnd" style={{ display: "flex" }}>
                {renderData}
            </div >
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
/*

Object.keys(dataS).slice().forEach((item) => {
            renderData.push(
                <Box key={item} name={item} blocks={dataS[item]} />
            )
        })
*/