//AL momento de consultar una DB debe ser siempre en el servidor y no en el cliente.
import { PrismaClient } from "@prisma/client"
import Layout from "layout/Layout"

export default function Home() {
  return (
    <Layout pagina={'Home'}>
      <h1>Next js</h1>       
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
