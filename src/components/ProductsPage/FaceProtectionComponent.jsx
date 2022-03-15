import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const faceProtectionProducts = [
    {
        productName: "BARRIER 2",
        productPrice: "450,500",
        productDescription: "Casco para soldadura al arco eléctrico, con pantalla de oscurecimiento automático. Se puede usar para la soldadura MIG, MAG, TIG y plasma que requiera de una protección de tono 9 a 13. Se puede usar para soldadura de baja intensidad o de llamas de tono 5 a 9. Se puede usar para la amoladura de tono 4. Poliamida. Filtro LCD.",
        procuctColors: ["Negro-Gris"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "CARETA SOLDAR",
        productPrice: "35,700",
        productDescription: "Careta para soldar fabricada en termoplástico de alta resistencia a altas temperaturas, impacto y chispas, además de humedad.",
        procuctColors: ["Negro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "CARETA ESMERILAR",
        productPrice: "33,150",
        productDescription: "",
        procuctColors: ["Sin color"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "VISOR HOLDER",
        productPrice: "22,950",
        productDescription: "Portavisera adaptable sobre cascos de obra ZIRCON, QUARTZ y BASEBALL DIAMOND. Se combina con las viseras VISORPC, VISORG, VISOR-TORIC y VISOR FLASH. Fijación universal. Polipropileno.",
        procuctColors: ["Negro"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "VISOR FLASH",
        productPrice: "254,150",
        productDescription: "Visera de policarbonato inyectado, contra el arco eléctrico y el riesgo térmico. Tono verde para una mejor transmisión de la luz. Policarbonato",
        procuctColors: ["Verde"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function FaceProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={faceProtectionProducts}/>
        </>
    )
}

export default FaceProtectionComponent