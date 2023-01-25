import React, { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400"
    const btnClasses = ["py-2 px-4 border", btnBgClassName]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={ product.image } className="w-1/6" alt={ product.title } />
            <p>{ product.title }</p>
            <span className="font-bold">{product.price}</span>
            {/* <p>{ product.description }</p> */}
            <button
                // className="py-2 px-4 border bg-yellow-400"
                className={btnClasses.join(" ")}
                // onClick={() => setDetails(!details)}
                onClick={() => setDetails(prev => !prev)}
            >
                <p>{ details ? "Hide" : "Show" } Details</p>
            </button>

            {details && <div>
                <p>{ product.description }</p>
                <p>Rate: <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}