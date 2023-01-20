import { useState, useEffect, createContext } from "react"
import axios from "axios"


const TempleContext = createContext()

const TempleProv = ({children}) =>{
    const [categorias, setCategorias] = useState([])
    const [catActual, setCategoriaActual] = useState([])

    const obtenerCat = async () =>{
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(() => {
      obtenerCat()
    }, [])
    
    useEffect(() => {
      setCategoriaActual(categorias[0])
    }, [categorias])

    const handleCat = (id) =>{
        const categoria = categorias.filter(categoria => categoria.id === id)
        setCategoriaActual(categoria[0])        
    }
    return(
        <TempleContext.Provider
            value={{
                categorias,
                handleCat,
                catActual
            }}
        >
            {children}
        </TempleContext.Provider>
    )
}

export {
    TempleProv
}

export default TempleContext