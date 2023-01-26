import Head from "next/head"
import Modal from 'react-modal'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import useTemple from "Hooks/useTemple";
import Sidebar from "Components/Sidebar"
import ModalProd from "Components/ModalProd";
import Pasos from "Components/Pasos";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement("#__next")

export default function Layout({children, pagina}) {
    const {modal} = useTemple()
    return (
        <>
            <Head>
                <title>{`Temple Bar - ${pagina}`}</title>
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-8 m">
                        <Pasos />
                        {children}
                    </div>
                </main>
            </div>

            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}
                >
                    <ModalProd />
                </Modal>
            )}

            <ToastContainer />
        </>
    )
}
