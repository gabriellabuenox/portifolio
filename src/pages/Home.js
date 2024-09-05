import "../App.css"
import Presentation from "../components/Presentation"
import Textos from "../components/Texts"

const Home = () => {
  return (
    <div className="home">
      <Presentation /> 
      <Textos /> 
    </div>
  )
}

export default Home