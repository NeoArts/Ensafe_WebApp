import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const handProtectionProducts = [
    {
        productName: "GUANTE NITRILO FLOCADO ALGODÓN",
        productPrice: "9,690",
        productDescription: "Nitrilo flocado de algodón. Longitud : 33 cm. Espesor: 0,40 mm.",
        procuctColors: ["Verde"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "GUANTE NITRILO SOPORTE POLIAMIDA",
        productPrice: "33,150",
        productDescription: "Doble impregnación de nitrilo en soporte poliamida. Tercera impregnación de nitrilo en espuma rugosa sobre la palma y punta de los dedos. Longitud: 35 cm. Espesor: 1,15 mm sobre el manguito- 1,30 mm sobre la palma.",
        procuctColors: ["Verde"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "GUANTE TEJIDO POLIÉSTER / PALMA DE NITRILO",
        productPrice: "7,650",
        productDescription: "100% poliéster. Impregnación de nitrilo en palma y punta de los dedos. Galga 13.",
        procuctColors: ["Negro-Gris"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "GUANTE DE POLIAMIDA",
        productPrice: "16,660",
        productDescription: "100% poliamida. Mano totalmente impregnada de nitrilo. Segunda impregnación de nitrilo espuma en palma y punta de los dedos. Galga 15.",
        procuctColors: ["Azul-Negro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "GUANTE DE PUNTO POLIAMIDA SPANDEX",
        productPrice: "15,470",
        productDescription: "Poliamida/Spandex. Impregnación de nitrilo/poliuretano en palma y punta de los dedos. Galga 15.",
        procuctColors: ["Gris-Negro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function HandProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={handProtectionProducts}/>
        </>
    )
}

export default HandProtectionComponent