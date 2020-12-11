import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeInTopLeft">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid animate__animated animate__fadeInTopLeft">


                {
                    images.map(img => ( //desestructuracion para //evitar poner img.id ... 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
