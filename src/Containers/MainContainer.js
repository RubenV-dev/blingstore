import React from 'react';
import Nav from '../Components/navigationbar';

export default class MainContainer extends React.Component {
    render() {
        return (
        <div className = "main">
            <Nav />
            Hello World!
        </div>
        )
    }
}