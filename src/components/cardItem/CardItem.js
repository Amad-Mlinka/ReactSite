import React from 'react'
import { Link } from 'react-router-dom'


export const CardItem = (props) => {
    return (
        <>
            <li className="cards_item col-6 col-md-4">
                <Link className="cards_item_link" to={props.path}>
                    <figure className="cards_item_pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel" className="cards_item_img" />
                    </figure>
                    <div className="cards_item_info">
                        <div className="cards_item_text">
                            {props.text}
                        </div>
                    </div>

                </Link>
            </li>
        </>
    )
}
