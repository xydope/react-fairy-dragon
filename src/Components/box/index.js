import React from 'react';
import './style.css';


export default class Box extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="reactdnd__box">BOX</div>
        )
    }
}