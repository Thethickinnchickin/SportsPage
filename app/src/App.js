import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const baseball = 'https://embedstream.me/houston-astros-vs-new-york-yankees-stream-1'



   /* FOOTBALL */

    const cardinals = 'https://embedstream.me/arizona-cardinals-vs-new-orleans-saints-stream-1'
    const falcons_niners = 'https://embedstream.me/atlanta-falcons-vs-san-francisco-49ers-stream-1'
    const jets_packers = 'https://embedstream.me/green-bay-packers-vs-new-york-jets-stream-1'
    const bucs = 'https://embedstream.me/pittsburgh-steelers-vs-tampa-bay-buccaneers-stream-1'
    const patriots_lions = 'https://embedstream.me/new-england-patriots-vs-detroit-lions-stream-1'
    const saints_seahawks = 'https://embedstream.me/new-orleans-saints-vs-seattle-seahawks-stream-1'
    const jets_dolphins = 'https://embedstream.me/new-york-jets-vs-miami-dolphins-stream-1'
    const bucs_falcons = 'https://embedstream.me/tampa-bay-buccaneers-vs-atlanta-falcons-stream-1'
    const commanders_titans = 'https://embedstream.me/washington-commanders-vs-tennessee-titans-stream-1'
    const panthers_niners = 'https://embedstream.me/carolina-panthers-vs-san-francisco-49ers-stream-1'
    const cardinals_eagles = 'https://embedstream.me//arizona-cardinals-vs-philadelphia-eagles-stream-1'
    const rams_cowboys = 'https://embedstream.me/los-angeles-rams-vs-dallas-cowboys-stream-1'

    /* HOCKEY */
    const sharks = 'https://embedstream.me/new-york-rangers-vs-san-jose-sharks-stream-1'

    /* SOCCER */
    const soccer1 = 'https://embedstream.me/los-angeles-fc-vs-los-angeles-galaxy-stream-1'

    



  return (
    <div className="App">
        <div id="NW">

        <iframe src={cardinals} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={sharks} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={baseball} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={soccer1} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
