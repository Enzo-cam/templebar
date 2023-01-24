import Image from "next/image"
import useTemple from "Hooks/useTemple";
import { formatearDin } from "helpers";


export default function Producto({producto}) {
    
    const {nombre, imagen, precio} = producto;
    const {handleProd, handleModal} = useTemple()

    return (
    <div className='border p-3'>
        <Image 
            src={`/img/${imagen}.jpg`}
            alt={`Producto ${nombre}`}
            height={500}
            width={400}
        />

        <div className="p-5 flex flex-col h-max">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-1 font-bold text-3xl text-amber-500">{formatearDin(precio)}</p>
            
            <button
                className="bg-amber-500 hover:bg-amber-700 w-full mt-5 p-3 uppercase font-bold place-self-end"
                onClick={() => {
                    handleProd(producto),
                    handleModal()
                }}
            >
                Agregar
            </button>
        </div>
    </div>
    )
}
