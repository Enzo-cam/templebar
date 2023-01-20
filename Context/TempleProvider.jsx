import { useState, useEffect, createContext } from "react"

const TempleContext = createContext()

const TempleProv = ({children}) =>{
    return(
        <TempleContext.Provider
            value={{

            }}
        >
            {children}
        </TempleContext.Provider>
    )
}

export {
    TempleProv
}

export default TempleContext