import React from "react";


const Meme = ({ deleteMeme, topText, bottomText, meme, id }) => {
    function handleDeleteMeme() {
        deleteMeme(id);
      }

    
    return (
        <div>
           <div className="container">
            <span className="top-text">{topText}</span>
            <img src={meme} alt="a meme" />
            <span className="bottom-text">{bottomText}</span>
            <button id="meme_deleteBtn" onClick={handleDeleteMeme}>
            DELETE
            </button>
            </div>
        </div>    
    )

}

export default Meme;