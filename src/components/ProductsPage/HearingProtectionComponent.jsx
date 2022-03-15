import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const hearingProtectionProducts = [
    {
        productName: "INTERLAGOS LIGHT",
        productPrice: "40,630",
        productDescription: "Casco antiruido con orejeras ABS y espuma sintética. Arnés de ABS ajustable en altura, flexible y acolchado.",
        procuctColors: ["Gris"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "INTERLAGOS FOLDABLE",
        productPrice: "67,150",
        productDescription: "Casco antiruido plegable con orejeras ABS. Almohadillas rellenas con espuma sintética. Doble arnés de plástico (POM), ajustable en altura, con refuerzo de espuma, para un mejor confort.",
        procuctColors: ["Gris"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "CASCO ANTIRUIDO - SNR 23 dB",
        productPrice: "23,440",
        productDescription: "Casco antiruido con orejeras poliestireno (PS) y espuma sintética. Arnés ABS ajustable en altura. Almohadillas confortables",
        procuctColors: ["Azul-Negro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "PROTECTOR AUDITIVO DE INSERCIÓN",
        productPrice: "2,130",
        productDescription: "Protector auditivo de inserción en elastómero (4 membranas) Textura suave para permitir su inserción en el canal auditivo.",
        procuctColors: ["Verde-Naranja"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "TAPONES DE OÍDO DE POLIURETANO",
        productPrice: "345",
        productDescription: "Caja distribuidora de 200 pares de tapones auditivos de espuma de poliuretano de uso único. Saquito de plástico individual de 2 tapones.",
        procuctColors: ["Rojo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function HearingProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={hearingProtectionProducts}/>
        </>
    )
}

export default HearingProtectionComponent