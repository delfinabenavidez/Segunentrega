import React from 'react'

const Product = ({nombre, descripcion, precio}) => {

    return (
        <div className="Product">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>
        </div>
    )
}

export default Product