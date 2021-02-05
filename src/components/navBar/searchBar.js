import React, {useContext, useState, useEffect} from 'react';
import {TitleContext} from '../../index';
import Modal from 'react-modal';
import axios from 'axios';

export const SearchBar = () => {
    

    const title = useContext(TitleContext)
    console.log("TITLE-->", title);

    // const product = title;
    // console.log("PRODSB-->", product);

    
      
    // useEffect(() => {
    //     async function fetchData() {
    //         let product = await axios.get(title)
    //         console.log("PETER-->", product)
    //          return product
    //     }
    //   fetchData();
    // },[])

    

    // const [search, setSearch] = useState('')

    // const handleChange = (e) => {
    //     console.log("SEARCHBAR-->", e.target.value);
    //     e.preventDefault();
    //     if (search.length > 0) {
    //         title = title.filter( t => {
    //             return t.title.match(search)
    //         })
    //     }
    //     setSearch(e.target.value)
    // };

    

    return (
        <div>
            <input 
                className='searchBar'
                placeholder='Search Items...'
                type='text'
                // onChange={handleChange}
                // value={search}
            >
            </input>
            
            {/* {
                title.map( item => ( 
                        <div>
                            <Modal>
                                <ul>
                                    <li>
                                        <div>
                                            <img src={item.image}/>
                                        </div>
                                    </li>
                                </ul>
                            </Modal>
                        </div>
                    )
                )
            } */}
                
            
            
        </div>
    )
};

export default SearchBar;
