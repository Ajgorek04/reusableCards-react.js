import "./App.css";
import { Card } from "./Components/Card/Card";
import cryptoImg from "./assets/cryptoImg.jpg";

function App() {
    return (
        <div className="container">
            <div className="card">
                <header>
                    <h1>Latest Crypto News</h1>
                </header>
                <div className="imageText">
                    <img src={cryptoImg} alt="cryptoImage" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illo nesciunt qui accusantium sint animi quos at,
                        accusamus suscipit. Voluptate, optio.
                    </p>
                </div>
                <div className="readMore">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        Click here for more Info
                    </a>
                </div>
            </div>
            <Card cardName="Bitcoin (BTC)" />
            <Card cardName="Etherum (ETH)" />
            <Card cardName="Litecoin (LTC)" />
        </div>
    );
}

export default App;
