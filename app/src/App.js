import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const brewers_cubs = 'https://embedstream.me/chicago-cubs-vs-milwaukee-brewers-stream-1'
   const redsox_orioles = 'https://embedstream.me/baltimore-orioles-vs-boston-red-sox-stream-1'
   const mets_phillies = 'https://embedstream.me/philadelphia-phillies-vs-new-york-mets-stream-1'
   const red_pirates = 'https://embedstream.me/pittsburgh-pirates-vs-cincinnati-reds-stream-1'
   const bluejays_yankees = 'https://embedstream.me/new-york-yankees-vs-toronto-blue-jays-stream-1'
   const royals_rays = 'https://embedstream.me/tampa-bay-rays-vs-kansas-city-royals-stream-1'
   const angels_tigers = 'https://embedstream.me/detroit-tigers-vs-los-angeles-angels-stream-1'
   const whitesox_guardians = 'https://embedstream.me/cleveland-guardians-vs-chicago-white-sox-stream-1'
   const astros_braves = 'https://embedstream.me/atlanta-braves-vs-houston-astros-stream-1'
   const rangers_twins = 'https://embedstream.me/minnesota-twins-vs-texas-rangers-stream-1'
   const giants_rockies = 'https://embedstream.me/colorado-rockies-vs-san-francisco-giants-stream-1'
   const mariners_athletics = 'https://embedstream.me/oakland-athletics-vs-seattle-mariners-stream-1'
   const cardinals_diamondbacks = 'https://embedstream.me/arizona-diamondbacks-vs-st-louis-cardinals-stream-1'
   const nationals_padres = 'https://embedstream.me/san-diego-padres-vs-washington-nationals-stream-1'
   const marlines_dodgers = 'https://embedstream.me/los-angeles-dodgers-vs-miami-marlins-stream-1'

   /* FOOTBALL */

   const panthers_patriots = 'https://embedstream.me/new-england-patriots-vs-carolina-panthers-stream-1'
   const saints_packers = 'https://embedstream.me/green-bay-packers-vs-new-orleans-saints-stream-1'
   const texans_rams = 'https://embedstream.me/los-angeles-rams-vs-houston-texans-stream-1'

 
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
