import React from 'react'
import PowderCard from './PowderCard'

const PowderList = ({powders}) => {

    const createCards = () => {
        return powders.map(powder => (
            <PowderCard key={powder.id} powder={powder} />
        ))
    }

    return(
        <div className="powder-list">
            {createCards()}
        </div>
    )
}

export default PowderList