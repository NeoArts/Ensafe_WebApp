import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const bodyProtectionProducts = [
    {
        productName: "RODILLERAS DE GEL",
        productPrice: "73,100",
        productDescription: "Par de rodilleras de gel con cáscara exterior antideslizante. Banda de agarre elástica para una sujeción óptima sobre la rodilla. Laminas de bandas de agarre elásticas y regulables.",
        procuctColors: ["Negro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "PLUMÓN ACOLCHADO POLIAMIDA",
        productPrice: "164,050",
        productDescription: "Plumón (Combinado con gama MACH 2). Cierre por cremallera antifrío. Borde inferior de las mangas y bajo de la prenda con terminación al bies. 2 bolsillos.",
        procuctColors: ["Azul marino-Azul rey", "Gris-Naranja", "Negro-Rojo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "BUZO DESECHABLE CON CAPUCHA DELTATEK 6000 - TIPO 5/6",
        productPrice: "33,270",
        productDescription: "Buzo con capucha elástica. Tipo 5/6. No tejido SMMS DELTATEK 6000. Cierre por cremallera con doble cursor bajo solapa adhesiva. Elástico de ajuste en los tobillos, la cintura y en la cabeza. Puños con tejido de punto. Antiestático. Uso corto. Embalaje individual al vacío.",
        procuctColors: ["Blanco"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "BUZO DESECHABLE CON CAPUCHA DELTACHEM - TIPO 3B - COSTURAS ESTANCAS",
        productPrice: "67,150",
        productDescription: "Buzo con capucha elástica en 3 partes. Tipo 3-B. No tejido Deltachem. Cierre por cremallera bajo doble solapa. Doble elástico para el pulgar. Elástico de ajuste en la cabeza, la cintura, los puños y en los tobillos. Uso corto.",
        procuctColors: ["Amarillo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "CAPUCHA DE PARA-ARAMIDA Y PREOX ALUMINIZADO CON FORRO",
        productPrice: "1'359,9000",
        productDescription: "Capucha anticalórica y contra proyecciones. Montada con ajuste para cabeza. Agujeros laterales de aireación. Disponible sobre pedido.",
        procuctColors: ["Aluminio"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function BodyProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={bodyProtectionProducts}/>
        </>
    )
}

export default BodyProtectionComponent