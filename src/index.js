//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Box from './Components/box'
import Block from './Components/block'

//data template
const data = [
    { id: "1", val: "Block1", box: 'boxFirst' },
    { id: "2", val: "Block2", box: 'boxFirst' },
    { id: "3", val: "Block3", box: 'boxSecond' },
    { id: "4", val: "Block4", box: 'boxSecond' },
    { id: "5", val: "Block5", box: 'boxSecond' }
];

//state controller
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: this.props.data
        }

        this.handleDrop = this.handleDrop.bind(this);
    }
    render() {
        let sortedBlocks = {
            boxFirst: [],
            boxSecond: [],
        };

        //sorting data
        this.state.blocks.forEach((item) => {
            sortedBlocks[item.box].push(item);
        })

        //prepare data, generate boxes and blocks
        let renderData = Object.keys(sortedBlocks).slice().map((boxName) => {
            return (
                <Box key={boxName} name={boxName} handleDrop={this.handleDrop}>
                    {sortedBlocks[boxName].map((item) =>
                        <Block key={item.id} id={item.id} val={item.val} />)}
                </Box>
            )
        })

        return (
            <div className="reactdnd" style={{ display: "flex" }}>
                {renderData}
            </div >
        )
    }

    handleDrop(e, destination) {
        let id = e.dataTransfer.getData("id");
        let newState = this.state.blocks.slice().map((item) => {
            item.id === id && (item.box = destination);
            return item;
        })
        this.setState({ blocks: newState })
    }
}

ReactDOM.render(<App data={data} />, document.getElementById('root'));
