import { useState, useEffect, useContext } from 'react'
import StockContext from './StockContext'


const StockList = () => {
    const { stockSymbol, quantity, purchasePrice } = useContext(StockContext)
    const [displayText, setDisplayText] = useState("No stocks added yet.")
    const [currentPrice, setCurrentPrice] = useState()
    const [profitLoss, setProfitLoss] = useState()


    useEffect(() => { 
        if (stockSymbol !== "") {
            fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`)
            .then(response => response.json())
            .then((data) => {setCurrentPrice(data["Global Quote"]["05. price"])})
            
            .catch(error => console.error("Error fetching stock data:", error))
        }}
    , [stockSymbol])


    const handleOnClick = () => {
        const profitOrLoss = (currentPrice - purchasePrice) * quantity

        setDisplayText(`Symbol: ${stockSymbol}\nQuantity: ${quantity}\nPurchase Price: ${purchasePrice}`)
        setCurrentPrice(`Current Price: ${currentPrice}`)
        setProfitLoss(profitOrLoss)
    }



    return (
        <div>
            <button onClick={handleOnClick}>Add Stock</button>
            <h2>Stock List</h2>
            <div className='stocklist'>
                <p>{displayText}</p>
                <p>{currentPrice}</p>
                <p style={{ color: profitLoss >= 0 ? 'green' : 'red' }}>
                    Profit/Loss: {profitLoss}
                </p>
            </div>

        </div>
    );
};

export default StockList;