import React, { useState } from 'react';
//DND Components
import DndContainer from './components/DndContainer';
import DndItem from './components/DndItem';

import TestElem from './TestElem';


const App = () => {

    const [state, setState] = useState([{ id: "edf12", value: 'item 1', index: 1 }, { id: "dsf33", value: 'item 2', index: 2 }, { id: "gfg01", value: 'item 3', index: 0 }]);

    const handleSwap = (a, b) => {
        let item1 = state.find((item) => item.id === a)
        let item2 = state.find((item) => item.id === b)
        let temp = item1.index;
        item1.index = item2.index;
        item2.index = temp;
        setState([...state]);
    }

    return (
        <div className="app">
            <DndContainer>
                {
                    state.map((item) =>
                        <DndItem key={item.id} id={item.id} index={item.index}>
                            <TestElem value={`id: ${item.id} Idx: ${item.index}`} />
                        </DndItem>
                    )
                }
            </DndContainer>
        </div>
    )
}

export default App;