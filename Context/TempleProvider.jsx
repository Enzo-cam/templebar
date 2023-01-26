import { useState, useEffect, createContext } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const TempleContext = createContext()

const TempleProv = ({children}) =>{
    const [categorias, setCategorias] = useState([])
    const [catActual, setCategoriaActual] = useState([])
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])

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

    const handleProd = (prod) =>{
        setProducto(prod)
    }
    const handleModal = () =>{
        setModal(!modal)
    }


    const handlePedido = ({categoriaId, imagen, ...orden}) =>{
        if(pedido.some(ordenSate => ordenSate.id === orden.id)){
            const ordenActualizada = pedido.map(ordenState => ordenState.id === orden.id ? orden : ordenState)
            setPedido(ordenActualizada)
            toast.info('Orden editada', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
        }else{
            setPedido([...pedido, orden])
            toast.success('Agregado a la orden', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        setModal(false)
    }
    return(
        <TempleContext.Provider
            value={{
                categorias,
                handleCat,
                catActual,
                producto,
                handleProd,
                modal,
                handleModal,
                handlePedido,
                pedido
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