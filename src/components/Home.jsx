
// import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world! From Home Component
            </h1>
            <button>
                <Link to='/about'>Go to about Page</Link>
            </button>
        </>
    )
}

export default Home