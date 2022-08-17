import logo from './logo.svg';
import './App.css';

function App() {
   const reds_phillies = 'https://embedstream.me/cincinnati-reds-vs-philadelphia-phillies-stream-1'
   const marlins_padres = 'https://embedstream.me/miami-marlins-vs-san-diego-padres-stream-1'
   const yankess_rays = 'https://embedstream.me/new-york-yankees-vs-tampa-bay-rays-stream-1'
   const pirates_redsox = 'https://embedstream.me/pittsburgh-pirates-vs-boston-red-sox-stream-1'
   const nationals_cubs = 'https://embedstream.me/washington-nationals-vs-chicago-cubs-stream-1'
   const bluejays_orioles = 'https://embedstream.me/toronto-blue-jays-vs-baltimore-orioles-stream-1'
   const guardians_tigers = 'https://embedstream.me/cleveland-guardians-vs-detroit-tigers-stream-1'
   const braves_mets = 'https://embedstream.me/atlanta-braves-vs-new-york-mets-stream-1'
   const twins_royals = 'https://embedstream.me/minnesota-twins-vs-kansas-city-royals-stream-1'
   const cardinals_rockies = 'https://embedstream.me/st-louis-cardinals-vs-colorado-rockies-stream-1'
   const rangers_athletics = 'https://embedstream.me/texas-rangers-vs-oakland-athletics-stream-1'
   const whitesox_astros = 'https://embedstream.me/chicago-white-sox-vs-houston-astros-stream-1'
   const brewers_dodgers = 'https://embedstream.me/milwaukee-brewers-vs-los-angeles-dodgers-stream-1'
   const angels_mariners = 'https://embedstream.me/los-angeles-angels-vs-seattle-mariners-stream-1'
   const giants_diamondbacks = 'https://embedstream.me/san-francisco-giants-vs-arizona-diamondbacks-stream-1'
   const soccer = 'https://embedstream.me/los-angeles-fc-vs-dc-united-stream-1'
 
  return (
    <div className="App">
        <div id="NW">

        <iframe src={rangers_athletics} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={brewers_dodgers} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={angels_mariners} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={giants_diamondbacks} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
