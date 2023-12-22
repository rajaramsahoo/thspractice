import React, { useContext } from 'react'
import Globalcontext from '../Context/GlobalContext'

function Third() {

    const name = useContext(Globalcontext)
    return (
        <>
            <h1>this is a third context:{name}</h1>
        </>
    )
}

export default Third