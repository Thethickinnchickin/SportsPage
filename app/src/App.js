import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const baseball = 'https://embedstream.me/houston-astros-vs-new-york-yankees-stream-1'



   /* FOOTBALL */

    const browns = 'https://embedstream.me/baltimore-ravens-vs-cleveland-browns-stream-1'
    const bucs = 'https://embedstream.me/carolina-panthers-vs-tampa-bay-buccaneers-stream-1'
    const falcons = 'https://embedstream.me/cincinnati-bengals-vs-atlanta-falcons-stream-1'
    const colts = 'https://embedstream.me/tennessee-titans-vs-indianapolis-colts-stream-1'
    const raiders = 'https://embedstream.me/las-vegas-raiders-vs-houston-texans-stream-2'
    const chargers = 'https://embedstream.me/los-angeles-chargers-vs-seattle-seahawks-stream-2'
    const niners = 'https://embedstream.me/san-francisco-49ers-vs-kansas-city-chiefs-stream-2'
  
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

        <iframe src={warriors} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={steelers} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={baseball} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={sharks} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
