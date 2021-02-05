import React from 'react';

const Filter = ({count, size, sort, filterProducts, sortProducts}) => {



    return (
        <div className='filter'>
            <div className='filter-result'>
                {count} Products
            </div>
            <div className='filter-sort'>
                Order {" "}
                <select value={sort} onChange={sortProducts}>
                    <option value=''>Latest</option>
                    <option value='lowest'>Lowest</option>
                    <option value='highest'>Highest</option>
                </select>
            </div>
            <div className='filter-size'>
                Filter {" "}
                <select value={size} onChange={filterProducts}>
                    <option value=''>ALL</option>
                    <option value='40'>40</option>
                    <option value='41'>41</option>
                    <option value='42'>42</option>
                    <option value='43'>43</option>
                    <option value='44'>44</option>
                    <option value='45'>45</option>
                    <option value='46'>46</option>
                    <option value='47'>47</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;

