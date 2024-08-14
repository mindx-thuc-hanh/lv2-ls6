import React from 'react'

const Tabs = (props) => {
    const { setCategory } = props
    return (
        <div className='flex gap-4'>
            <button onClick={(e) => setCategory(e.target.value)} value="cty">cty</button>
            <button onClick={(e) => setCategory(e.target.value)} value='nha'>nha</button>
            <button onClick={(e) => setCategory(e.target.value)} value='others'>others</button>
            <button onClick={(e) => setCategory(e.target.value)} value='all'>all</button>
        </div>
    )
}

export default Tabs