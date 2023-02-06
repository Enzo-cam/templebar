import Image from "next/image"
import { formatearDin } from "helpers"
import {toast} from 'react-toastify'
import axios from "axios"

export default function Pedido({orden}) {

    const {id, nombre, total, pedido} = orden
    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden entregada')
        } catch (error) {
            toast.error('Hubo un error')
        }
    }
    
    return (
        <div className="border p-8 space-y-2">
            <h3 className="text-3xl font-medium">Orden: {id}</h3>
            <p className="text-2xl my-2">Cliente: {nombre}</p>
            
            <div>
                {pedido.map(plato => (
                    <div
                        key={plato.id}
                        className="py-2 flex border-b last-of-type:border-0 items-center"
                    >
                        <div className="w-32">
                            <Image 
                                width={300}
                                height={400}
                                src={`/img/${plato.imagen}.jpg`}
                                alt={"Imagen del plato"}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-2xl font-medium text-amber-500">{plato.nombre}</h4>
                            <p className="text-lg font-bold">Cantidad: {plato.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-2 font-black text-2xl text-amber-500">
                    Total a pagar: {formatearDin(total)}
                </p>

                <button
                    className="bg-gray-800 hover:bg-gray-900 text-white mt-4 md:mt-0 py-2 px-8 text-xl uppercase font-medium rounded-lg"
                    type="button"
                    onClick={completarOrden}
                >
                    Pedido realizado
                </button>
            </div>
        </div>
    )
}
