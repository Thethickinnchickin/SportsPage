import logo from './logo.svg';
import './App.css';


function App() {


   /* BASEBALL */

   const baseball1 = 'https://embedstream.me/texas-rangers-vs-philadelphia-phillies-stream-1'
   const baseball2 = 'https://embedstream.me/oklahoma-city-thunder-vs-phoenix-suns-stream-1'
   const baseball3 = 'https://embedstream.me/houston-rockets-vs-los-angeles-lakers-stream-1'
   const baseball4 = 'https://embedstream.me/oakland-athletics-vs-los-angeles-angels-stream-1'
   /* FOOTBALL */

    const falcons = 'https://embedstream.me/atlanta-falcons-vs-pittsburgh-steelers-stream-1'
    const ravens = 'https://embedstream.me/baltimore-ravens-vs-denver-broncos-stream-1'


    const rams = 'https://embedstream.me/los-angeles-rams-vs-seattle-seahawks-stream-1'
    const niners = 'https://embedstream.me/san-francisco-49ers-vs-miami-dolphins-stream-1'
    const bengals = 'https://embedstream.me/cincinnati-bengals-vs-kansas-city-chiefs-stream-1'

    /* HOCKEY */
    const sharks = 'https://embedstream.me/los-angeles-clippers-vs-phoenix-suns-stream-1'
    const kings = 'https://embedstream.me/montreal-canadiens-vs-los-angeles-kings-stream-1'


    /* SOCCER */
    const soccer1 = 'https://embedstream.me/austin-fc-vs-fc-dallas-stream-2'

    /* NBA */

    const warriors = 'https://embedstream.me/golden-state-warriors-vs-sacramento-kings-stream-2'
    const nets = 'https://embedstream.me/indiana-pacers-vs-brooklyn-nets-stream-2'
    const clippers = 'https://embedstream.me/washington-wizards-vs-los-angeles-clippers-stream-1'




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
        {/* <iframe src={baseball4} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe> */}
        </div>
    </div>
  );
}

export default App;
