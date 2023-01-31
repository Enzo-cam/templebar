import { useState, useEffect, createContext } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const TempleContext = createContext()

const TempleProv = ({children}) =>{
    const router = useRouter()

    const [categorias, setCategorias] = useState([])
    const [catActual, setCategoriaActual] = useState([])
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

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

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])
    

    const handleCat = (id) =>{
        const categoria = categorias.filter(categoria => categoria.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')     
    }

    const handleProd = (prod) =>{
        setProducto(prod)
    }
    const handleModal = () =>{
        setModal(!modal)
    }

    const handleEditar = id => {
        const editarProd = pedido.filter(producto => producto.id === id)
        setProducto(editarProd[0])
        setModal(!modal)
    }
    
    const handleEliminar = id => {
        const ordenActualizada = pedido.filter(producto => producto.id !== id)
        setPedido(ordenActualizada)
    }
    
    const confirmarPedido = async (e) => {
        e.preventDefault()

        try {
            const {data} =  await axios.post('/api/ordenes', {pedido, nombre, total, fecha : Date.now().toString()})
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        console.log('Orden enviada.')
    }
    

    const handlePedido = ({categoriaId, ...orden}) =>{
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
                pedido,
                handleEditar,
                handleEliminar,
                nombre,
                setNombre,
                confirmarPedido,
                total
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