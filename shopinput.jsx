function ShopInput (){
    return(
        <>
        <form>
            <input 
            type="text" 
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="Tilføj ny butik"
            />
            <button type="submit">Tilføj Butik</button>
        </form>
        </>
    )
}

export default ShopInput;