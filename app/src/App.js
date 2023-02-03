import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const baseball = 'https://embedstream.me/houston-astros-vs-new-york-yankees-stream-1'
   /* FOOTBALL */

    const falcons = 'https://embedstream.me/atlanta-falcons-vs-pittsburgh-steelers-stream-1'
    const ravens = 'https://embedstream.me/baltimore-ravens-vs-denver-broncos-stream-1'
    const bears = 'https://embedstream.me/chicago-bears-vs-green-bay-packers-stream-1'
    const lions = 'https://embedstream.me/detroit-lions-vs-jacksonville-jaguars-stream-1'
    const texans = 'https://embedstream.me/houston-texans-vs-cleveland-browns-stream-1'
    const vikings = 'https://embedstream.me/minnesota-vikings-vs-new-york-jets-stream-1'
    const giants = 'https://embedstream.me/new-york-giants-vs-washington-commanders-stream-1'
    const eagles = 'https://embedstream.me/philadelphia-eagles-vs-tennessee-titans-stream-1'
    const redzone = 'https://embedstream.me/nfl-redzone-week-13-stream-1'

    const rams = 'https://embedstream.me/los-angeles-rams-vs-seattle-seahawks-stream-1'
    const niners = 'https://embedstream.me/san-francisco-49ers-vs-miami-dolphins-stream-1'
    const bengals = 'https://embedstream.me/cincinnati-bengals-vs-kansas-city-chiefs-stream-1'
    const raiders = 'https://embedstream.me/las-vegas-raiders-vs-los-angeles-chargers-stream-2'

    /* HOCKEY */
    const sharks = 'https://embedstream.me/los-angeles-clippers-vs-phoenix-suns-stream-1'
    const kings = 'https://embedstream.me/montreal-canadiens-vs-los-angeles-kings-stream-1'
    const penguins = 'https://embedstream.me/pittsburgh-penguins-vs-buffalo-sabres-stream-1'
    const maple_leaves = 'https://embedstream.me/toronto-maple-leafs-vs-calgary-flames-stream-1'
    const islanders = 'https://embedstream.me/new-york-islanders-vs-carolina-hurricanes-stream-1'
    const canucks = 'https://embedstream.me/vancouver-canucks-vs-minnesota-wild-stream-1'


    /* SOCCER */
    const soccer1 = 'https://embedstream.me/austin-fc-vs-fc-dallas-stream-2'

    /* NBA */

    const warriors = 'https://embedstream.me/golden-state-warriors-vs-sacramento-kings-stream-2'
    const nets = 'https://embedstream.me/indiana-pacers-vs-brooklyn-nets-stream-2'
    const clippers = 'https://embedstream.me/washington-wizards-vs-los-angeles-clippers-stream-1'
    const cavs = 'https://embedstream.me/cleveland-cavaliers-vs-oklahoma-city-thunder-stream-1'
    const bulls = 'https://embedstream.me/chicago-bulls-vs-dallas-mavericks-stream-1'
    const nuggets = 'https://embedstream.me/denver-nuggets-vs-utah-jazz-stream-1'
    const trailblazers = 'https://embedstream.me/portland-trail-blazers-vs-minnesota-timberwolves-stream-1'


  return (
    <div className="App">
        <div id="NW">

        <iframe src={clippers} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={nets} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={maple_leaves} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={kings} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
