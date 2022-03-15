import React from 'react'
import ProductsGridComponent from './ProductsGridComponent'

const headProtectionProducts = [
    {
        productName: "AIR COLTAN",
        productPrice: "59,500",
        productDescription: "Gorra antichoques tipo baseball, tejido poliéster, parte superior en malla mesh muy ventilada, para más confort. Equipado con una carcasa interna en polietileno y una espuma confort en EVA para amortiguar los golpes. Talla única regulable de 55 a 62 cm. Exterior : poliéster Casco interno : polietileno altá densitá. Refuerzo del casco : espuma",
        procuctColors: ["Azul marino-naranja", "Gris-amarillo", "Amarillo fluo-Gris", "Negro-rojo"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    },
    {
        productName: "CASCO FURA SUSPENSION RATCHET",
        productPrice: "20,654",
        productDescription: " Tipo I Clase E&G Fabricado en Polímero de alto impacto. Sistema de ajuste tipo ratchet ecualizable, ajustable desde los 55 cm a 63 cm de contorno de cabeza. Soporte para inserción de protector tipo copa universal. Permite ensamblar barbuquejo de 3 o 4 puntos. Suspensión interior de 3 bandas textiles (poliamida) con 8 puntos de anclaje al casquete. Casco diseñado para reducir la fuerza de impacto y la penetración en caso de un golpe únicamente en la parte superior de la cabeza. clase E diseñado para reducir el peligro de contacto con conductores de alto voltaje. Contiene banda antisudor para mejor comodidad del usuario.",
        procuctColors: ["Blanco", "Azul", "Gris", "Amarillo", "Naranja", "Rosa", "Rojo", "Verde"],
        productGuarantee: "Garantia por defecto de fabricación",
        productImageUrl: "", 
        productImageAlt: "",
    }
]

function HeadProtectionComponent() {
    return (
        <>
            <ProductsGridComponent products={headProtectionProducts}/>
        </>
    )
}

export default HeadProtectionComponent