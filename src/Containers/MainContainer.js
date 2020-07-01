import React from 'react';
import Nav from '../Components/navigationbar';
import Banner from '../Components/header'
import CardContainer from './CardContainer'
import Aboutme from '../Components/aboutme'

export default class MainContainer extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    description = () => {
        if (this.state.clicked){
            return <Aboutme />        
        } else {
            return
        }
    }

    render() {
        return (
        <div className = "main">
            <Banner />
            <Nav handleClick={this.handleClick}/>
            {this.description()}
            <p id="discount">Special Promotion: Buy 12 and Get Your 13th Peice Free!!!!</p>
            <CardContainer />
        </div>
        )
    }
}