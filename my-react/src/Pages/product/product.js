import React from 'react'
import './product.css'
import List from '../../components/listproduct/list'
export default function Product() {
    const products = [
        {

            title: 'Themes',
            items: [
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
            ]
        },
        {

            title: 'Europe',
            items: [
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
                {
                    name: 'Flore mondiale',
                    image: 'https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/world.jpg',
                    notes: 'Flore du monde',
                    especes: '37 023',
                    images: '9 802 268 ',
                },
            ]
        }
    ]

    return (
        <div>
            <ul>
                {products.map(p => (
                    <List title={p.title} items={p.items} />
                ))}
            </ul>

        </div>
    )
}
