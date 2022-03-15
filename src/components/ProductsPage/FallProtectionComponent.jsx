import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const fallProtectionProducts = [
    {
        productName: "LÍNEA DE VIDA TEMPORARIA HORIZONTAL DE CINCHA - MAX 20 M",
        productPrice: "731,000",
        productDescription: "Línea de vida temporaria horizontal con cincha certificada para 2 personas. Regulación del largo y de la tensión para un tensor con trinquete. Equipado con 2 mosquetones AM002 y 2 anillos tóricos de anclaje. Bolsa de almacenamiento y transporte.",
        procuctColors: ["Amarillo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "CONECTOR DE ANCLAJE GRADUABLE EN REATA (TIEOFF)",
        productPrice: "68,000",
        productDescription: "Anclaje en reata poliéster alta tenacidad. Un extremo ojete en reata, el otro con D de anclaje en acero. Hebilla graduable.",
        procuctColors: ["Negro-Amarillo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "MOSQUETÓN DE FIJACIÓN AUTOMÁTICA, ABERTURA 22 MM - KIT DE 2",
        productPrice: "58,650",
        productDescription: "Pack de 2 Mosquetones de fijación automática de aleación liviana. Abertura de 22 mm. Anillo de 1/4 de vuelta. R > 25 kN.",
        procuctColors: ["Acero"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "ESLINGA SENCILLA C/ABSORBEDOR",
        productPrice: "135,150",
        productDescription: "Eslinga con absorbedor de energía con terminal en reata. Hebillas con guardacabos. Equipado con un mosquetón de 20mm de apertura y un mosquetón de 65mm de apertura.",
        procuctColors: ["Negro-Amarillo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "ESLINGA REGULABLE CON ABSORBEDOR DE ENERGÍA DOBLE TERMINAL EN REATA",
        productPrice: "234,600",
        productDescription: "Eslinga regulable con absorbedor de energía con doble terminal en reata. Hebillas con guardacabos. Equipado con un mosquetón de 20mm de apertura y dos mosquetónes de 65mm de apertura.",
        procuctColors: ["Naranja"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function FallProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={fallProtectionProducts}/>
        </>
    )
}

export default FallProtectionComponent