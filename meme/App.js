import Meme from './meme';
import MemeForm from './memeForm';
import { useSelector, useDispatch } from "react-redux";
// import './App.css';

function App() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  const addMeme = (newMeme) => {
    dispatch({type:'ADD_MEME',meme: newMeme})
  }
  const deleteMeme = (id) => {
    dispatch({ type: 'REMOVE_MEME', id})
  }

  const memeComponenets = memes.map(meme => (
    <Meme
      key={meme.id}
      topText={meme.topText}
      bottomText={meme.bottomText}
      meme={meme.url}
      deleteMeme={() => deleteMeme(meme.id)}
    />
  ))


  return (
    <div className="App">
      <MemeForm addMeme={addMeme} />
      <br>
        {memeComponenets}
      </br>
    </div>
  );
}

export default App;
