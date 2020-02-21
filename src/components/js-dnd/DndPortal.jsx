import React from 'react';
import DndContext from '../../context/Dnd/DndContext';

export default ({ children }) => {

    const context = useContext(contextValue)

    return <div className="dnd-portal">{children}</div>
};
