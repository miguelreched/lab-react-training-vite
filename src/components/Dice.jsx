function Dice() {

    const diceImage = [
        '../assets/images/dice2.png',
        '../assets/images/dice2.png',
        '../assets/images/dice3.png',
        '../assets/images/dice4.png',
        '../assets/images/dice5.png',
        '../assets/images/dice6.png',
    ]

    const [dadoImg , setDadoImg] = useState('../assets/images/dice-empty.png')

    const handleClick = () => {
        setDadoImg()
    }

  return (
    <div>

    <img src="dadoImg" alt="" onClick={handleClick}/>

    </div>
  )
}

export default Dice

