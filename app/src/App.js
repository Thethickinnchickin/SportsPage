import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const pirates_bluejays = 'https://embedstream.me/pittsburgh-pirates-vs-toronto-blue-jays-stream-1'
   const red_rockies = 'https://embedstream.me/cincinnati-reds-vs-colorado-rockies-stream-1'
   const orioles_athletsic = 'https://embedstream.me/baltimore-orioles-vs-oakland-athletics-stream-2'
   const redsox_rangers ='https://embedstream.me/boston-red-sox-vs-texas-rangers-stream-2'
   const guardians_mariners = 'https://embedstream.me/cleveland-guardians-vs-seattle-mariners-stream-1'
   const tigers_royals = 'https://embedstream.me/detroit-tigers-vs-kansas-city-royals-stream-2'
   const mets_nationals = 'https://embedstream.me/new-york-mets-vs-washington-nationals-stream-2'
   const rays_yankees ='https://embedstream.me/tampa-bay-rays-vs-new-york-yankees-stream-2'
   const braves_marlins = 'https://embedstream.me/atlanta-braves-vs-miami-marlins-stream-2'
   const whitesox_twins = 'https://embedstream.me/chicago-white-sox-vs-minnesota-twins-stream-2'
   const cardinals_cubs = 'https://embedstream.me/st-louis-cardinals-vs-chicago-cubs-stream-2'
   const angels_astros = 'https://embedstream.me/los-angeles-angels-vs-houston-astros-stream-2'
   const diamondbacks_brewers = 'https://embedstream.me/arizona-diamondbacks-vs-milwaukee-brewers-stream-2'
   const dodgers_padres = 'https://embedstream.me/los-angeles-dodgers-vs-san-diego-padres-stream-2'
   const giants_phillies = 'https://embedstream.me/san-francisco-giants-vs-philadelphia-phillies-stream-2'


   /* FOOTBALL */

   const cheifs_commanders = 'https://embedstream.me/kansas-city-chiefs-vs-washington-commanders-stream-1'
   const lions_colts = 'https://embedstream.me/indianapolis-colts-vs-detroit-lions-stream-1'
   const bills_broncos = 'https://embedstream.me/buffalo-bills-vs-denver-broncos-stream-1'
   const jags_steelers = 'https://embedstream.me/jacksonville-jaguars-vs-pittsburgh-steelers-stream-1'
   const fins_raiders = 'https://embedstream.me/miami-dolphins-vs-las-vegas-raiders-stream-1'
   const niners_vikings = 'https://embedstream.me/minnesota-vikings-vs-san-francisco-49ers-stream-1'
   const titans_bucs = 'https://embedstream.me/tennessee-titans-vs-tampa-bay-buccaneers-stream-1'
   const chargers_cowboys = 'https://embedstream.me/los-angeles-chargers-vs-dallas-cowboys-stream-1'
   const football = 'https://embedstream.me/western-kentucky-vs-hawai-i-stream-1'

  const football2 = 'https://embedstream.me/utah-tech-vs-sacramento-state-stream-1'
  const football3 = 'https://embedstream.me/boise-state-vs-oregon-state-stream-1'
  const football4 = 'https://embedstream.me/kent-state-vs-washington-stream-1'
 
  /* NASCAR */

  const nascar = 'https://embedstream.me/nascar-xfinity-series-stream-1'


  return (
    <div className="App">
        <div id="NW">

        <iframe src={football4} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={football} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={football2} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={football3} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
