//AL momento de consultar una DB debe ser siempre en el servidor y no en el cliente.
import { PrismaClient } from "@prisma/client"
import Layout from "layout/Layout"
import useTemple from "Hooks/useTemple"


export default function Home() {
  const {catActual} = useTemple()

  return (
    <Layout pagina={catActual?.nombre}>
      <h1 className="text-5xl font-medium">{catActual?.nombre}</h1>
      <p className="text-2xl my-2">
        Elige lo que quieras pedir:
      </p>
    </Layout>
  )
}
// SSP cuando querramos mostrar los datos en el mismo componente
// export const getServerSideProps = async () =>{
//   const prisma = new PrismaClient();
//   const categorias = await prisma.categoria.findMany()

//   return{
//     props:{
//       categorias
//     }
//   }
// }
