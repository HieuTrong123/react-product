import React from 'react'
import './list.css'
import Item from '../itemproduct/item'
export default function List(props) {
    var id = 1;

    return (
        <div className='list'>
            <div className='title'>{props.title}</div>
            <ul className='listproduct'>
                {
                    props.items.map((i) => (
                        <li key={id++} className='items'>
                            <Item name={i.name} notes={i.notes} image={i.image} especes={i.especes} images={i.images} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
