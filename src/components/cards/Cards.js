import React from 'react'
import { CardItem } from '../cardItem/CardItem'
import "./Cards.scss"



export const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these epic destinations</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items row">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-2.jpg"
                        text="Travel to the Islands of Bali"
                        label="Travel"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-2.jpg"
                        text="Travel to the Islands of Bali"
                        label="Travel"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-3.jpg"
                        text="Explore the infinite ocean"
                        label="Explore"
                        path="/services"
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
