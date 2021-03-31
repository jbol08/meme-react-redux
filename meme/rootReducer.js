const INITIAL_STATE = {
    memes: []
  };
  


const rootReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'ADD_MEME') {
        return { ...state, memes: [...state.memes, action.paylod ]};
    };
    if (action.type === 'REMOVE_MEME') {
        return {...state, memes:state.memes.filter(meme => meme.id !== action.id)}
    };
    return state
        
}

export default rootReducer;