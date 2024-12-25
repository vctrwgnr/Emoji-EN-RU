import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card.jsx'
import emojis from './data/Emojis.jsx'
import animalsAndBirds from './data/animals.jsx'
import foodAndDrinks from "./data/Food.jsx";
import things from "./data/Things.jsx";

function createCard(emoji) {
    return <Card
        key={emoji.id}
        emoji={emoji.emoji}
        meaning={emoji.meaning}
        translation={emoji.translation}
    />;
}
function App() {

    return (
        <div className="App">
            <Header />
            <div className="cards-container">
                {emojis.map(createCard)}
                {foodAndDrinks.map(createCard)}
                {animalsAndBirds.map(createCard)}
                {things.map(emoji => {
                    return <Card
                        key={emoji.id}
                        emoji={emoji.emoji}
                        meaning={emoji.meaning}
                        translation={emoji.translation}
                    />;
                })}
            </div>
            <Footer />
        </div>
    )

}

export default App
