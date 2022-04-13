import React from 'react'

function ProductStock(props) {
    return (
        <div className={(props.amount > 0) ? "product-info__stock in-stock" : "product-info__stock no-stock"}>
            {(props.amount > 0) && "In stock: " + props.amount}
            {(props.amount <= 0) && "Sin stock"}
        </div>
    )
}

export default ProductStock