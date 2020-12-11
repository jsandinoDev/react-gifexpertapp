import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    //efetos no pueden ser async
    useEffect(() => {

        getGifs( category )
        .then(imgs => {

                setstate({
                    data:imgs,
                    loading:false
                });
    
        })

    }, [ category ]) 

    return state; // {data: [], loading: true }

}