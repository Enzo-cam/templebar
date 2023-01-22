export const formatearDin = (cant) =>{
    return cant.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}