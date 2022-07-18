import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Slide from './slide';

const Search = () => {
    const [searchList, setSearchList] = useState("")

    return (
        <div className='search_bar'>


            <input type='search' placeholder='Search' className='search' onChange={(e) => setSearchList(e.target.value.toLowerCase())}></input>
            <button className='search_icon'><FaSearch /></button>


            <section>
                {/* <Slide input={searchList} /> */}
            </section>
        </div >
    )
}

export default Search