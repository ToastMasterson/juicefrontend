import React from 'react'
// import React, {useState} from 'react'
import '../Cards.css'

const PowderCard = ({powder}) => {

    const linkTo = (brand, name, flavor) => {
        return `https://www.amazon.com/s?k=${brand}%20${name}%20${flavor}`
    }

    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1 className="card-header"><a href={linkTo(powder.brand, powder.name, powder.flavor)} target="_blank">{powder.brand}</a></h1>
                    <h3 className="card-sub-header">{powder.name}</h3>
                    <img className="card-front-image" alt="powder" src={powder.productImage} />
                    <p className="card-flavor">Flavor: {powder.flavor}</p>
                    <p className="card-price">Price: ${powder.price}</p>
                </div>
                <div className="flip-card-back">
                    <img className="card-back-image" alt="nutrition" src={powder.nutritionImage} />
                </div>
            </div>
        </div>
    )
    //     <div className={ activeCard ? 'active-card' : 'card'} onClick ={() => setActiveCard(powder)}>
    //         <h1>{powder.name}</h1>
    //         <img alt="powder" src={powder.productImage} />
    //         <p>{powder.price}</p>
    //         <p>{powder.flavor}</p>
    //         {activeCard
    //         ? (<section className = 'details'>
    //             <img alt="nutrition" src={powder.nutritionImage} />
    //         </section>)
    //         : null}
    //     </div>
    // )
}

export default PowderCard