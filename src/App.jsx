import "./App.css";
import { Card } from "./Components/Card/Card";
import bitcoin from "./assets/bitcoin.jpg";
import ethereum from "./assets/ethereum.jpg";
import litecoin from "./assets/litecoin.jpg";

function App() {
    const cryptocurrencies = [
        {
            name: "Bitcoin (BTC)",
            img: bitcoin,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat deserunt odio possimus accusamus veritatis nam, culpa veniam. Suscipit fugiat ipsam nobis! Optio, voluptatibus odit",
            link: "https://coinmarketcap.com/currencies/bitcoin/",
        },
        {
            name: "Ethereum (ETH)",
            img: ethereum,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio iure necessitatibus quae molestiae non hic sit veritatis ex facilis unde",
            link: "https://coinmarketcap.com/currencies/ethereum/",
        },
        {
            name: "Litecoin (LTC)",
            img: litecoin,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloremque provident laboriosam incidunt voluptatibus minima?",
            link: "https://coinmarketcap.com/currencies/litecoin/",
        },
    ];

    return (
        <div className="container">
            <div className="card">
                <header>
                    <h1>Latest Crypto News</h1>
                </header>
                <div className="designedBy">
                    <h2>Designed by</h2>

                    <h3>
                        <a
                            href="https://github.com/Ajgorek04"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ajgorek04
                        </a>
                    </h3>
                </div>
            </div>
            {cryptocurrencies.map((crypto, index) => (
                <Card
                    key={index}
                    name={crypto.name}
                    img={crypto.img}
                    text={crypto.text}
                    link={crypto.link}
                />
            ))}
        </div>
    );
}

export default App;
