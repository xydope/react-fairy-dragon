import React from 'react';

export default ({ children }) => {
    return (
        <>
            {children.sort((a, b) => a.props.index - b.props.index)}
        </>
    )
};

//children.map(({ props }) => ({ id: props.id, index: props.index })).sort((a, b) => a.index - b.index)
//state.map(({ id }) => children.find((element) => element.props.id === id))