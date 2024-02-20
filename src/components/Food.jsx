import React from 'react'
import { data } from '../data/data.js'

const Food = () => {
    console.log(data);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-800 text-4xl font-bold text-center'>Top Rated Menu Items</h1>

      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between w-full'>
        {/* filter by type */}
        <div>
            <p>Filter By Type</p>
            <div>
                <button>All</button>
            <button>Burger</button>
            <button>Pizza</button>
            <button>Salads</button>
            <button>Chicken</button>
            </div>
        </div>
        {/* filter by price */}
        <p>Filter By Price</p>
        <div>
            <button>$</button>
        <button>$$</button>
        <button>$$$</button>
        <button>$$$$</button>
        <button>$$$$$</button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Food
