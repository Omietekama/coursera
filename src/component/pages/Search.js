import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useFetch from '../../custom_hooks/useFetch';
import { Link } from 'react-router-dom';
const Search = () => {
    const [searchList, setSearchList] = useState([]);


    const data = useFetch("http://localhost:3000/results");

    const handleFilter =(event)=>{
        const searchWord = event.target.value;
        const newFilter = data.filter((value)=>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord ==="") {
            setSearchList([])
        }else{
            setSearchList(newFilter);
        }

        
    }

    return (
        <div className='search_bar'>


            <input type='search' placeholder='What do you want to learn' className='search' onChange={handleFilter}></input>
            <button className='search_icon'><FaSearch /></button>
            {searchList.length != 0 &&(
                <div className='dataResult'>
                {searchList.slice(0,15).map((value,key)=>{
                    return <Link to={`/${value.id}`} className='dataItem'>{value.name}</Link>
                })}

            </div>
            )

            }
            
            


        </div >
    )
}

export default Search