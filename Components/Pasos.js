import { useRouter } from "next/router"

const pasos = [
    {paso: 1, nombre: 'Menu', url:'/'},
    {paso: 2, nombre: 'Resumen', url:'/orden'},
    {paso: 3, nombre: 'Datos y total', url:'/total'}
]

function Pasos() {
    const router = useRouter()

    const calcularProgreso = () =>{
        let valor = 1;
        if(router.pathname === '/'){
            valor = 20
        }else if(router.pathname === '/orden'){
            valor = 60
        }else{
            valor = 100
        }
        // const porcentaje = (paso / 3) * 100;
        return valor
    }
    return (
        <>
            <div
                className="flex justify-between"
            >
                {pasos.map(paso =>(
                    <button
                        onClick={() => {
                            router.push(paso.url);
                        }}
                        className="text-2xl font-bold"
                        key={paso.paso}
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                    style={{width : `${calcularProgreso()}%`}}
                ></div>
            </div>
        </>
    )
}

export default Pasos