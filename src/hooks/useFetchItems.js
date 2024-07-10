import { useEffect, useState } from "react"


export const useFetchItems = (params, get) => {

    const [state, setState] = useState({
        data: [],
        loading: true   
    });

    useEffect(( )=>{
        get(params)
            .then(comics => 
            {
                
                    setState({
                        data: comics,
                        loading: false
                    });
                
                
            })
    }, []);

    return state

}
