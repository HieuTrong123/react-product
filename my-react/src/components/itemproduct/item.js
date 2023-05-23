import React from 'react'
import './item.css'
export default function Item(props) {
    return (
        <div className='item'>
            <div className='image' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className='content'>
                <h3 className='name'>{props.name}</h3>
                <div className='notes'>{props.notes}</div>
                <div className='data'>
                    <div className='especes'> <span className='numble'>{props.especes}</span><span>especes</span></div>
                    <div className='images'> <span className='numble'>{props.images}</span><span>images</span></div>
                </div>
            </div>
        </div>
    )
}
