import Image from "next/image"
import { formatearDin } from "helpers";
import useTemple from "Hooks/useTemple";

function OrdenProd({orden}) {
    const {cantidad, imagen, nombre, precio, id} = orden;
    const {handleEditar, handleEliminar} = useTemple()

    return (
        <div className='shadow p-5 mb-3 flex gap-10 items-center'>
            <div className='md:w-1/16'>
                <Image 
                    width={300}
                    height={400}
                    src={`/img/${imagen}.jpg`}
                    alt={`Imagen del producto ${nombre}`}
                />
            </div>

            <div className="md:w-4/6">
                <p className="text-3xl font-bold">{nombre}</p>
                <p className="text-xl font-bold mt-2">Cantidad: {cantidad}</p>
                <p className="text-xl font-bold text-amber-600 mt-2">Precio: {formatearDin(precio)}</p>
                <p className="font-semibold text-gray-800 mt-2">Subtotal: {formatearDin(precio * cantidad)}</p>
            </div>

            <div> 
                <button 
                    type="button"
                    className="bg-gray-800 flex justify-center px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
                    onClick={() => handleEditar(id)}
                >
                    Editar
                </button>
                
                <button 
                    type="button"
                    className="bg-red-800 flex justify-center px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-5"
                    onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default OrdenProd