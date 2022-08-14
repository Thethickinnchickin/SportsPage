import logo from './logo.svg';
import './App.css';

function App() {
   const braves_marlins = 'https://embedstream.me/miami-marlins-vs-atlanta-braves-stream-1'
   const guardians_bluejays = 'https://embedstream.me/toronto-blue-jays-vs-cleveland-guardians-stream-1'
   const orioles_rays = 'https://embedstream.me/tampa-bay-rays-vs-baltimore-orioles-stream-1'
   const cubs_reds = 'https://embedstream.me/cincinnati-reds-vs-chicago-cubs-stream-1'
   const padres_nationals = 'https://embedstream.me/washington-nationals-vs-san-diego-padres-stream-2'
   const tigers_whitesox = 'https://embedstream.me/chicago-white-sox-vs-detroit-tigers-stream-1'
   const philies_mets = 'https://embedstream.me/new-york-mets-vs-philadelphia-phillies-stream-1'
   const dodgers_royals = 'https://embedstream.me/kansas-city-royals-vs-los-angeles-dodgers-stream-1'
   const athletics_astros = 'https://embedstream.me/houston-astros-vs-oakland-athletics-stream-1'
   const mariners_rangers = 'https://embedstream.me/texas-rangers-vs-seattle-mariners-stream-1'
   const yankees_redsox = 'https://embedstream.me/boston-red-sox-vs-new-york-yankees-stream-1'
   const brewers_cardinals = 'https://embedstream.me/st-louis-cardinals-vs-milwaukee-brewers-stream-1'
   const diamondbacks_rockies = 'https://embedstream.me/colorado-rockies-vs-arizona-diamondbacks-stream-1'
   const pirates_giants = 'https://embedstream.me/san-francisco-giants-vs-pittsburgh-pirates-stream-1'
   const twins_angels = 'https://embedstream.me/los-angeles-angels-vs-minnesota-twins-stream-1'
   const nascar = 'https://embedstream.me/nascar-federated-auto-parts-400-cup-series-stream-1'
   const soccer1 = 'https://embedstream.me/los-angeles-galaxy-vs-vancouver-whitecaps-stream-1'
   const soccer2 = 'https://embedstream.me/los-angeles-fc-vs-charlotte-stream-2'
  return (
    <div className="App">
        <div id="NW">

        <iframe src={athletics_astros} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={orioles_rays} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={brewers_cardinals} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={nascar} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
