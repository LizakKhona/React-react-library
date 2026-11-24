import './App.css'

function App() {

  const name = "Liza"
  const photoDescription = "A little monkey"
  const photoSource = "https://i.pinimg.com/736x/e9/d0/97/e9d0971eeae02e8dfe42742b1d1fc787.jpg";
  const website = {
    siteName: "Google",
    url: "https://www.google.com/"
  }
  const a = 5
  const b = 6
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={photoSource} alt={photoDescription} width="200" height="200" />
      <a href={website.url}>{website.siteName}</a>
      <p>{a + b}</p>
      <ul>
        {colors.map(color => <li key={color}>{color}</li>)}
      </ul>
    </>
  );
}

export default App
