import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const DebounceExample = () => {
    const [query, setQuery] = useState("");
    const debounceQuery = useDebounce(query, 1000);

    useEffect(()=>{
        if(debounceQuery){
            console.log("called API.....", debounceQuery)
        }
    }, [debounceQuery]);

    return (
        <div>
            <input 
                type='text'
                placeholder='Searching....'
                onChange={(e) => setQuery(e.target.value)}
                className='p-2 m-4 border rounded-lg border-black'
            />
        </div>
    )
}

export default DebounceExample