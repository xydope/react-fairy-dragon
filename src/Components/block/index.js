import React from 'react';
import './style.css'


export default class Block extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="reactdnd__block">BLOCK</div>
        )
    }
}