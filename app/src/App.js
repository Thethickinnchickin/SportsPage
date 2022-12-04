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

    const steelers = 'https://embedstream.me//miami-dolphins-vs-pittsburgh-steelers-stream-1'
    const rams_cowboys = 'https://embedstream.me/los-angeles-rams-vs-dallas-cowboys-stream-1'

    /* HOCKEY */
    const sharks = 'https://embedstream.me/los-angeles-clippers-vs-phoenix-suns-stream-1'

    /* SOCCER */
    const soccer1 = 'https://embedstream.me/austin-fc-vs-fc-dallas-stream-2'

    /* NBA */

    const warriors = 'https://embedstream.me/golden-state-warriors-vs-sacramento-kings-stream-2'



  return (
    <div className="App">
        <div id="NW">

        <iframe src={texans} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={falcons} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={redzone} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={eagles} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
