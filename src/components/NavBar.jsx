import TrollFace from "../../public/images/troll-face.png"

export default function NavBar (){
    return (
        <div className="NavBar">
            <img src={TrollFace} alt="troll face image" className="NavBar--trollface" />
            <h1 className="NavBar--title">Meme Generator</h1>
            <h2 className="NavBar--subtitle">React Course - Project 3</h2>

        </div>
    )
}