import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
        <div className = "cards">
            <img src="https://www.trustyetc.com/trustyblog/wp-content/uploads/2012/10/Google-Drive1.png" alt="ring" max-width="100%"/>
            <ul>
                <li>Price: $1 </li>
                <li>Description: Looks hella Good</li>
            </ul>
            <button>
                Buy Now
            </button>
        </div>
        )
    }
}