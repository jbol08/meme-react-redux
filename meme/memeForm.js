import React, { useState } from "react";
import uuidv4 from "uuid/v4";

const Initial_state = {
    meme_url : '',
    top_text : '',
    bottom_text : ''
}
const MemeForm = ({addMeme}) => {

    const [form, setForm] = useState(Initial_state)
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addMeme({ ...form, id: uuidv4() })
        setForm(Initial_state);
    }
    function handleChange(evt) {
        const { name, value } = evt.target;
        setForm(formchange => ({ ...formchange, [name]: value }));        
    }

    return (
        <div>
            <h1> Make a Meme</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='meme_url'>Image URL:</label>
                <input
                    type='text'
                    name='url'
                    id='meme_url'
                    onChange={handleChange}
                    value={form.meme_url} />
                
                <label htmlFor='top_text'>Top Text:</label>
                <input
                    type='text'
                    name='top'
                    id='top_text'
                    onChange={handleChange}
                    value={form.top_text} />
                
                <label htmlFor='meme_url'>Bottom Text:</label>
                <input
                    type='text'
                    name='bottom'
                    id='bottom_text'
                    onChange={handleChange}
                    value={form.bottom_text} />

                <button type='submit'>Make Meme</button>
            </form>
        </div>
    );
}

export default MemeForm;