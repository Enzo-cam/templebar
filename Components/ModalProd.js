import { useState, useEffect } from "react"
import Image from "next/image"
import useTemple from "Hooks/useTemple"
import { formatearDin } from "helpers"

const ModalProd = () => {
    const {producto, handleModal, handlePedido, pedido} = useTemple()
    const {nombre, precio, imagen} = producto;
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [pedido, producto])
    
    


    return (
    <div className='md:flex gap-10'>
        <div className='md:w-1/3'>
            <Image 
                width={300}
                height={400}
                alt={`Imagen del producto ${nombre}`}
                src={`/img/${imagen}.jpg`}
            />
        </div>
        <div className='md:w-2/3'>
            <div className="flex justify-end gap-3">
                <button 
                    onClick={() => handleModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{nombre}</h1>

            <div className="flex justify-between mt-1">

                <p className="font-medium text-4xl text-amber-500">{formatearDin(precio)}</p>
                
                <div
                    className="flex gap-4 justify-center items-center"
                >
                    <button
                        onClick={() => {
                            if(cantidad <= 1) return
                            setCantidad(cantidad - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className="text-2xl">{cantidad}</p>

                    <button
                        onClick={() => {
                            if(cantidad >= 7) return
                            setCantidad(cantidad + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                </div>
            </div>
                <button
                    className="bg-amber-600 cursor-pointer px-5 py-2 mt-4 text-white font-medium uppercase rounded"
                    onClick={() => handlePedido({...producto, cantidad})}
                >
                    {edicion ? 'Editar pedido' : 'Agregar al pedido'}
                </button>
        </div>
    </div>
  )
}

export default ModalProd