import Layout from "layout/Layout"
import { formatearDin } from "helpers"
import useTemple from "Hooks/useTemple"
import { useEffect, useCallback } from "react"

function Total() {
  const {pedido, nombre, setNombre, confirmarPedido, total} = useTemple()
  
  const comprobarPedido = useCallback(() =>{
    return pedido.length === 0 || nombre.length < 3 || nombre === ''
  }, [pedido, nombre]) 

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])
  
  

  return (
    <Layout pagina="Total">
      <h1 className="text-4xl font-medium">Termina de confirmar tu pedido</h1>

      <form 
        className="mt-4"
        onSubmit={confirmarPedido}
      >
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>

          <input 
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">Total a pagar: <span className="font-bold">{formatearDin(total)}</span></p>
        </div>

        <div>
          <input 
            type="submit"
            className={`${comprobarPedido() ? "bg-slate-400": "bg-slate-800 cursor-pointer"} w-full lg:w-auto px-5 py-2 mt-3 rounded uppercase font-bold text-center text-white`}
            value="Confirmar pedido"  
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  )
}

export default Total