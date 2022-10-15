import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const baseball = 'https://embedstream.me/new-york-mets-vs-san-diego-padres-stream-1'



   /* FOOTBALL */

    const bills_steelers = 'https://embedstream.me/buffalo-bills-vs-pittsburgh-steelers-stream-1'
    const browns_chargers = 'https://embedstream.me/cleveland-browns-vs-los-angeles-chargers-stream-1'
    const jaguars_texans = 'https://embedstream.me/jacksonville-jaguars-vs-houston-texans-stream-1'
    const vikings_bears = 'https://embedstream.me/minnesota-vikings-vs-chicago-bears-stream-1'
    const patriots_lions = 'https://embedstream.me/new-england-patriots-vs-detroit-lions-stream-1'
    const saints_seahawks = 'https://embedstream.me/new-orleans-saints-vs-seattle-seahawks-stream-1'
    const jets_dolphins = 'https://embedstream.me/new-york-jets-vs-miami-dolphins-stream-1'
    const bucs_falcons = 'https://embedstream.me/tampa-bay-buccaneers-vs-atlanta-falcons-stream-1'
    const commanders_titans = 'https://embedstream.me/washington-commanders-vs-tennessee-titans-stream-1'
    const panthers_niners = 'https://embedstream.me/carolina-panthers-vs-san-francisco-49ers-stream-1'
    const cardinals_eagles = 'https://embedstream.me//arizona-cardinals-vs-philadelphia-eagles-stream-1'
    const rams_cowboys = 'https://embedstream.me/los-angeles-rams-vs-dallas-cowboys-stream-1'
    const redzone = 'https://embedstream.me/nfl-redzone-week-5-stream-1'
    



  return (
    <div className="App">
        <div id="NW">

        <iframe src={baseball} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={cardinals_eagles} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={rams_cowboys} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={redzone} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
