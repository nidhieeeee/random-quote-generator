import { useState } from "react";
import './QuoteGenerator.css'


function QuoteGenerator() {
  const [quote, currentQuote] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",

    "The best way to predict the future is to create it. - Peter Drucker",

    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",

    "The only way to do great work is to love what you do. - Steve Jobs",

    "It always seems impossible until it’s done. - Nelson Mandela",

    "I am not afraid... I was born to do this. - Joan of Arc",

    "Believe you can and you’re halfway there. - Theodore Roosevelt",

    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",


    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",


    "Be the change that you wish to see in the world. - Mahatma Gandhi",


    "In the middle of every difficulty lies opportunity. - Albert Einstein",


    "Happiness is not something ready-made. It comes from your own actions.- Dalai Lama"

  ];
  const colors = [
    "#1abc9c", // Turquoise
    "#3498db", // Blue
    "#9b59b6", // Purple
    "#e74c3c", // Red
    "#f39c12", // Orange
    "#27ae60", // Green
    "#8e44ad", // Deep Purple
    "#2980b9", // Dark Blue
    "#c0392b", // Dark Red
    "#16a085"  // Teal
  ];
  
  function generateQuote() {
    // const randomIndex=(Math.floor(Math.random() * quotes.length));
    // currentQuote(quotes[randomIndex]);
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === quote);
    currentQuote(quotes[randomIndex]);

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomColorIndex]);
  };
  return (
    <div className="main">
      <h1>Random Quotes Generator</h1>
      <div className="output" style={{ backgroundColor: bgColor }}>
        {quote && <p> {quote}</p>}
        
      </div>
      <button onClick={generateQuote}>Generate Random Quote</button>
    </div>
  );
};

export default QuoteGenerator;
