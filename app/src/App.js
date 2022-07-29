import logo from './logo.svg';
import './App.css';

function App() {
    const royals_yankees = 'https://embedstream.me/new-york-yankees-vs-kansas-city-royals-stream-1'
    const phillies_pirates = 'https://embedstream.me/pittsburgh-pirates-vs-philadelphia-phillies-stream-1'
    const tigers_blue_jays = 'https://embedstream.me/toronto-blue-jays-vs-detroit-tigers-stream-1'
    const guardians_red_sox = 'https://embedstream.me/boston-red-sox-vs-cleveland-guardians-stream-1'
    const mariners_astros = 'https://embedstream.me/houston-astros-vs-seattle-mariners-stream-2'
    const dodgers_rockies = 'https://embedstream.me/colorado-rockies-vs-los-angeles-dodgers-stream-2' 
    const rangers_angels = 'https://embedstream.me/los-angeles-angels-vs-texas-rangers-stream-2'
    const cubs_giants = 'https://embedstream.me/san-francisco-giants-vs-chicago-cubs-stream-2'
  return (
    <div className="App">
        <div id="NW">

        <iframe src={cubs_giants} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={mariners_astros} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={rangers_angels} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={dodgers_rockies} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
