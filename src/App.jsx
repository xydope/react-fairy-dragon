import React from 'react';
//DND Components
import DndContainer from './components/DndContainer';
import DndItem from './components/DndItem';

import TestElem from './TestElem';


const App = () => {

    const state = [{ id: "edf12", value: 'item 1', index: 1 }, { id: "dsf33", value: 'item 2', index: 2 }, { id: "gfg01", value: 'item 3', index: 0 }];

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