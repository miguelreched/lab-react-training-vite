function ClickablePicture({img, imgClicked}) {
    const [clickImage, setclickImage] = useState(firstImage)

const handleClickPicture = () => {
    setclickImage((click => !click))

}


  return (
    <div>
        <img src={clickImage ? imgClicked : img} alt="" onClick={handleClickPicture} />


    </div>
  )
}
// 🤷‍♂️
export default ClickablePicture