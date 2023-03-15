import { useState } from 'react'
import cardData from '../Js/CardData'
import './App.css'

function App() {

  const [cardList, setCardList] = useState(cardData.sort(() => Math.random() - 0.5));
  //!sort(() => math.random() - 0.5) esto es para desordenar un arreglo.
  const [prevIndexCard, setPrevIndexCard] = useState(-1)
  //! el -1 representa que el estado esta vacion (no hay tarjetas seleccionadas)
  
  const selectCard = (index) => {
    cardList[index].status = "selected"
    setCardList([...cardList])
    if(prevIndexCard === -1){
      setPrevIndexCard(index)
    } else {
      validateCard(index);
    }
  }

  const validateCard = (newIndex) => {
    setTimeout(() => {
      const prevCard = cardList[prevIndexCard];
      const currentCard = cardList[newIndex];
      if(prevCard.icon === currentCard.icon){
        prevCard.status = "up";
      currentCard.status = "up";
      }else {
        prevCard.status = "down";
      currentCard.status = "down";
      }
      setCardList([...cardList])
      setPrevIndexCard(-1);
    },1000)
  }
  return (
    <div className="App">
      <h1>Memory Animals</h1>
      <div className="card-container">
        {
          cardList.map((card, index) => (
              <div className={`card ${card.status}`}
              key={card.id}
              onClick={() => selectCard(index)}
              >
                {
                  card.status !== "down" 
                  ? (<i className={card.icon}></i>
                    
                  ): <i className={card.tapa}></i>
                  
                }  
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default App
