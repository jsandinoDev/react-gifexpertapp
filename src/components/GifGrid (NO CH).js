import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

   
    useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [category]) // Se hace para que el componente solo se renderice 1 vez




    return (
        <>
            <h3>{category}</h3>

           
            <div className="card-grid">


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
