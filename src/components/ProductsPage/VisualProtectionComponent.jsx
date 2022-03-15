import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const visualProtectionProducts = [
    {
        productName: "EGON CLEAR",
        productPrice: "10,030",
        productDescription: "Gafas ergonómicas. Oculares policarbonato. Look deportivo. Patillas bi-materia. Puente nasal TPE flexible extra confort.",
        procuctColors: ["Incoloro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "EGON SMOKE",
        productPrice: "10,030",
        productDescription: "Gafas ergonómicas. Oculares policarbonato. Look deportivo. Patillas bi-materia. Puente nasal TPE flexible extra confort.",
        procuctColors: ["Ahumado"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "HEKLA2",
        productPrice: "9,860",
        productDescription: "Sobregafas de policarbonato monobloque. Protecciones laterales. Puente nasal de policarbonato integrado. Patillas de policarbonato flexible. Se adaptan a todo tipo de gafas. Montura y oculares : policarbonato.",
        procuctColors: ["Incoloro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "PACAYA CLEAR LYVIZ",
        productPrice: "45,050",
        productDescription: "Gafas de policarbonato monobloque. Puente nasal policarbonato integrado. Patillas nylon abatibles. Protecciones laterales. Oculares : policarbonato. Montura : nylon.",
        procuctColors: ["Incoloro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "PITON CLEAR",
        productPrice: "6,715",
        productDescription: "Gafas de policarbonato monobloque. Ventilación directa lateral. Protecciones laterales. Perforación de las patillas para cordel. Policarbonato",
        procuctColors: ["Incoloro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function VisualProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={visualProtectionProducts}/>
        </>
    )
}

export default VisualProtectionComponent