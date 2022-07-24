import logo from './logo.svg';
import './App.css';

function App() {
  const cubs_phillis = 'https://embedstream.me/philadelphia-phillies-vs-chicago-cubs-stream-1'
  const yanks_orioles = 'https://embedstream.me/baltimore-orioles-vs-new-york-yankees-stream-2'
  const marlins_pirates = 'https://embedstream.me/pittsburgh-pirates-vs-miami-marlins-stream-2'
  const jays_redsoxs = 'https://embedstream.me/boston-red-sox-vs-toronto-blue-jays-stream-2'
  const angels_braves = 'https://embedstream.me/atlanta-braves-vs-los-angeles-angels-stream-2'
  const cardinals_reds = 'https://embedstream.me/cincinnati-reds-vs-st-louis-cardinals-stream-2'
  const twins_tigers = 'https://embedstream.me/detroit-tigers-vs-minnesota-twins-stream-2'
  const indians_twins = 'https://embedstream.me/chicago-white-sox-vs-cleveland-guardians-stream-2'
  const rays_royals = 'https://embedstream.me/kansas-city-royals-vs-tampa-bay-rays-stream-1'
  const rockies_brewers = 'https://embedstream.me/milwaukee-brewers-vs-colorado-rockies-stream-2'
  const rangers_oakland = 'https://embedstream.me/oakland-athletics-vs-texas-rangers-stream-2'
  const astros_mariners = 'https://embedstream.me/seattle-mariners-vs-houston-astros-stream-2'
  const nationals_diamondbacks = 'https://embedstream.me/arizona-diamondbacks-vs-washington-nationals-stream-2'
  const giants_dodgers = 'https://embedstream.me/los-angeles-dodgers-vs-san-francisco-giants-stream-2'
  const padres_mets = 'https://embedstream.me/new-york-mets-vs-san-diego-padres-stream-2'
  const pocono = 'https://embedstream.me/nascar-cup-series-m-m-s-fan-appreciation-400-vs-pocono-raceway-online-stream-2'

  return (
    <div className="App">
        <div id="NW">

        <iframe src={padres_mets} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={rangers_oakland} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={nationals_diamondbacks} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={giants_dodgers} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
