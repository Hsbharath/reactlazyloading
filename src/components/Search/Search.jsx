import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import SearchList from '../SearchList/SearchList';

const BASE_URL = `https://api.unsplash.com/photos/?client_id=N7eVKTUxD-n_Z9gRhGZp5pAOobIdC577-GpFULmN_mo`;

const Search = () => {

    const [results, setResults ] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setResults(data);
                setDataFetched(true);
            }catch(error){
                console.log(error);
            }
        };

        if(!dataFetched){
            fetchData();
        }

    }, [dataFetched]);

    console.log(results.length);

    return (
        <>
            <div className="w-full p-2 origin-center transition-all duration-300 bg-white">
                {/* <SearchList data={results} /> */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {
                    results.length && results.slice(0, 70).map((ele, index) => 
                            <div key={index} className='col-span-1 w-full h-full'>
                                <LazyLoadImage  className='w-full h-full object-cover'
                                    effect="blur" 
                                    src={ele.urls.regular} 
                                    alt={ele.id}
                                    height="100%"
                                />
                            </div>
                    )
                }
                </div>
            </div>
        </>
    )
}

export default Search;