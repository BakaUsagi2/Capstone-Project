import { useState } from "react"
import StockList from "./Stock_list"
import StockContext from "./StockContext"


const StockInputs = () => {
    
    const [stockSymbol, setStockSymbol] = useState("")
    const [quantity, setQuantity] = useState("")
    const [purchasePrice, setPurchasePrice] = useState("")


    return (
       <StockContext.Provider value={{stockSymbol, setStockSymbol, quantity, setQuantity, purchasePrice, setPurchasePrice}} >
        <div>
              <div className="inputs">

              <input type="text"
                     name="stock-symbol"
                     value= {stockSymbol} 
                     placeholder="Stock Symbol" 
                     onChange={(event) => {setStockSymbol(event.target.value)}}/>
                     
              <input type="text"
                     name="quantity"
                     value= {quantity} 
                     placeholder="Quantity"
                     onChange={(event) => {setQuantity(event.target.value)}}/>

              <input type="text" 
                     name="purchase-price"
                     value= {purchasePrice} 
                     placeholder="Purchase Price" 
                     onChange={(event) => {setPurchasePrice(event.target.value)}}/>

              </div>
              <StockList/>
        </div>
        </ StockContext.Provider>
)}

export default StockInputs