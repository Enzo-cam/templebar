import Layout from "layout/Layout"
import OrdenProd from "Components/OrdenProd"
import useTemple from "Hooks/useTemple"

function Orden() {
  const {pedido} = useTemple()

  return (
    <Layout pagina="Orden">
      <h1 className="text-5xl font-medium">Orden</h1>
      <p className="text-2xl my-2">Revisa tu pedido</p>

      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos agregados a su orden.</p>
      ): (
        pedido.map(orden => (
          <OrdenProd 
            orden={orden}
            key={orden.id}
          />
        ))
      )}
    </Layout>
  )
}

export default Orden