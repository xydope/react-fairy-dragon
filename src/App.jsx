import React from 'react';
import Draggable from './Components/Draggable';
import Droppable from './Components/Droppable';

const App = () => {
    return (
        <Droppable>
            <Draggable />
        </Droppable>
    )
}

export default App;