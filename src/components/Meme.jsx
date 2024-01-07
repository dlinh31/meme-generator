/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */


import {useState, useEffect} from "react"


function MemeForm ({title, placeholder, name, data, handleChange}) {
    return (
        <div className="Meme">
            <h3 className="Meme--text">{title}</h3>
            <input onChange={handleChange} name={name} value={data} className="Meme--form" type="form" placeholder={placeholder} />
            
        </div>
    )
}


export default function Meme (){

    const [allMemesImages, setAllMemesImage] = useState([]);
    const [meme, setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"  //default meme - placeholder 
        })
    function MemeButtonClicked(){
        const randInd = Math.floor(Math.random() * allMemesImages.length);
        const url = allMemesImages[randInd]["url"];
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value, type} = event.target
        setMeme(prevMeme => {
            return(
                {
                    ...prevMeme,
                    [name]: value
                }
            )
        })


    }

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json()
        )
        .then(data => {
            setAllMemesImage(data['data']['memes'])})
    }, [])


    return (
        <div>
            <div className="Meme-container">
            <MemeForm name="topText" data={meme.topText} handleChange={handleChange} title="Top text" placeholder="Shut up"/>
            <MemeForm name="bottomText" data={meme.bottomText} handleChange={handleChange} title="Bottom text" placeholder="and take my money"/>
            </div>
            <div className="Meme-container">
            <button onClick={MemeButtonClicked} className="Meme--button">
                Get a new meme image 🖼
            </button>
            </div>
            <div className="Meme-img-container">
                <img className="Meme--img" src={meme.randomImage} alt="random meme image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
            
        </div>
        
    )
}