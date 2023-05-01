import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const baseball4 = 'https://embedstream.me/los-angeles-dodgers-vs-chicago-cubs-stream-1'
   const baseball3 = 'https://embedstream.me/seattle-mariners-vs-colorado-rockies-stream-1'
   const baseball2 = 'https://embedstream.me/sacramento-kings-vs-golden-state-warriors-stream-1'
   const baseball1 = 'https://embedstream.me/birmingham-stallions-vs-new-jersey-generals-stream-1'
   /* FOOTBALL */

    const falcons = 'https://embedstream.me/atlanta-falcons-vs-pittsburgh-steelers-stream-1'

    const rams = 'https://embedstream.me/los-angeles-rams-vs-seattle-seahawks-stream-1'

    /* HOCKEY */
    const sharks = 'https://embedsteam.me/los-angeles-clippers-vs-phoenix-suns-stream-1'
    const kings = 'https://embedsteameontal-canadiens-vs-los-angeles-kings-stream-1'


    /* SOCCER */
    const soccer1 = 'https://embedstream.me/austin-fc-vs-fc-dallas-stream-2'

    /* NBA */

    const warriors = 'https://embedsream.me/go-state-warranto-kings-stream-2'
    const nets = 'https://embestream.m/indana-pa--booklyn-trem-2'




  return (
    <div className="App">
        <div id="NW">

        <iframe src={baseball3} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={baseball2} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={baseball1} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={baseball4} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}



