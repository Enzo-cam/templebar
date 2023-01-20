import Image from "next/image"
import Categoria from "./Categoria"
import useTemple from "Hooks/useTemple"

export default function Sidebar() {
  const {categorias} = useTemple()
  return (
    <>
        <Image width={200} height={100} src={"/img/logo.svg"} className='mx-auto'  alt='logo temple'/>

        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
    </>
  )
}
