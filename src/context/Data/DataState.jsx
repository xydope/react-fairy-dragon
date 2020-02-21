import React, { useReducer } from 'react';
import DataContext from './DataContext';
import dataReducer from './dataReducer';

let someData = [{ id: 0, value: 'item 1' }, { id: 1, value: 'item 2' }, { id: 2, value: 'item 3' }]

export default ({ children }) => {

    const initState = {
        data: someData
    }

    const [state, dispatch] = useReducer(dataReducer, initState);

    return (
        <DataContext.Provider value={{
            ...state
        }}>
            {children}
        </DataContext.Provider>
    )
};
