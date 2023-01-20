import Image from "next/image"
import useTemple from "Hooks/useTemple"


export default function Categoria({categoria}) {
    const {nombre, icono, id} = categoria
    const {catActual, handleCat} = useTemple()    

    return (
        <div 
            className={`${catActual?.id === id? 'bg-amber-500' : ''} gap-3 flex items-center w-full border p-5 hover:bg-amber-500 hover:cursor-pointer`}
            onClick={() => handleCat(id)}
        >
            <Image 
                width={70}
                height={70}
                className='ml-3'
                src={`/img/icono_${icono}.svg`}
                alt={'Icono de la categoria'}
            />

            <button
                type="button"
                className="text-2xl font-bold"
                
            >  
                {nombre}
            </button>
        </div>
    )
}
