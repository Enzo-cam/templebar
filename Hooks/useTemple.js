import { useContext } from "react";
import TempleContext from "Context/TempleProvider";


// Al usar nuestro context en useContext damos acceso a los valores que tenga dicho context para asi darle uso en otros elementos
// sin tener que pasar hijo por hijo.
const useTemple = () =>{
    return useContext(TempleContext)
}

export default useTemple
