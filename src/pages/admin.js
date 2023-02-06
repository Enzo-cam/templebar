import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "layout/AdmLayout"
import Pedido from 'Components/Pedido'

export default function Admin() {
    // El fetcher es la forma en la cual se conecta a la API
    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const {data, error, isLoading} = useSWR('/api/ordenes', fetcher, {refreshInterval: 500})
    // console.log(data)

    return (
        <AdminLayout pagina="Admin">
            <h1 className="text-5xl font-medium">Panel de Administracion</h1>
            <p className="text-2xl my-2">Administra los pedidos</p>

            {data && data.length ? data.map(orden => 
                <Pedido 
                    key={orden.id}
                    orden={orden}
                />
            ) : <p>No hay ordenes pendientes.</p>}
        </AdminLayout>
    )
}
