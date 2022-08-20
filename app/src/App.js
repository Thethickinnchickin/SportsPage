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

   const cheifs_commanders = 'https://embedstream.me/kansas-city-chiefs-vs-washington-commanders-stream-1'
   const lions_colts = 'https://embedstream.me/indianapolis-colts-vs-detroit-lions-stream-1'
   const bills_broncos = 'https://embedstream.me/buffalo-bills-vs-denver-broncos-stream-1'
   const jags_steelers = 'https://embedstream.me/jacksonville-jaguars-vs-pittsburgh-steelers-stream-1'
   const fins_raiders = 'https://embedstream.me/miami-dolphins-vs-las-vegas-raiders-stream-1'
   const niners_vikings = 'https://embedstream.me/minnesota-vikings-vs-san-francisco-49ers-stream-1'
   const titans_bucs = 'https://embedstream.me/tennessee-titans-vs-tampa-bay-buccaneers-stream-1'
   const chargers_cowboys = 'https://embedstream.me/los-angeles-chargers-vs-dallas-cowboys-stream-1'
 
  /* NASCAR */

  const nascar = 'https://embedstream.me/nascar-xfinity-series-stream-1'


  return (
    <div className="App">
        <div id="NW">

        <iframe src={nascar} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={cheifs_commanders} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={mets_phillies} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={brewers_cubs} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
