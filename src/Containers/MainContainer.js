import React from 'react';
import Nav from '../Components/navigationbar';
import Banner from '../Components/header'
import CardContainer from './CardContainer'

export default class MainContainer extends React.Component {
    render() {
        return (
        <div className = "main">
            <Banner />
            <Nav />
            <CardContainer />
        </div>
        )
    }
}