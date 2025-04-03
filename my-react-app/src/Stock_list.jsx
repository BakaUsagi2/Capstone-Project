import { useState, useEffect, useContext } from 'react'
import StockContext from './StockContext'


const StockList = () => {
    const { stockSymbol, quantity, purchasePrice } = useContext(StockContext)
    const [displayText, setDisplayText] = useState("No stocks added yet.")

    useEffect(() => { 
            fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo`)
            .then(response => response.json())
            .then((data) => {
                    if (stockSymbol === data["Global Quote"]["01. symbol"]) {
                        setDisplayText(data["Global Quote"]["01. symbol"])
                    } else {
                        setDisplayText("That is not a valid stock symbol")
                    }
                })
                .catch(error => console.error("Error fetching stock data:", error))
        }
    , [stockSymbol])

    const handleOnClick = () => {
        setDisplayText(`Symbol: ${stockSymbol} \n Quantity: ${quantity} \n Purchase Price: ${purchasePrice}`);
    };

    return (
        <div>
            <button onClick={handleOnClick}>Add Stock</button>
            <h2>Stock List</h2>
            <p>{displayText}</p>

        </div>
    );
};

export default StockList;


/* Problem 1: Link API and user inputs stock symbols to stock list */

/* Problem 2: Show user inputs in Stock list */

/* Problem 3: Link button click to Stock list */


/* Stock list should include: 
Symbol, quantity, purchase price, current price (API), Profit/loss (API) */