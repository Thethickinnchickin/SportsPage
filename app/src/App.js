
import './App.css';


export function App() {


   /* BASEBALL */

   const baseball4 = 'https://embedstream.me/kansas-city-royals-vs-chicago-white-sox-stream-1'
   const baseball3 = 'https://embedstream.me/minnesota-twins-vs-san-diego-padres-stream-1'
   const baseball2 = 'https://embedstream.me/chicago-cubs-vs-st-louis-cardinals-stream-1'
   const baseball1 = 'https://embedstream.me/atlanta-braves-vs-boston-red-sox-stream-1'
   /* FOOTBALL */

    const falcons = 'https://embedstream.me/atlanta-falcons-vs-pittsburgh-steelers-stream-1'

    const rams = 'https://embedstream.me/los-geles-rams-vs-seattle-seahawks-stream-1'

    /* HOCKEY */
    const sharks = 'https://embedsteam.me/los-angeles-clippers-vs-phoenix-suns-stream-1'
    const kings = 'https://edsteamen--angeles-kings-stream-1'


    /* SOCCER */
    const soccer1 = 'https:embetream.mefc-vsc-dallas-stream-2'

    /* NBA */

    const warriors = 'https://embedsream.me/go-state-warranto-kings-stream-2'
    const nets = 'https://embestreamindanabook-trem-2'




  return (
    <div className="App">
        <div id="NW">

        <iframe src={baseball3} width='100%' height='100%' scrolling='yes'
         frameBorder='0' allowFullScreen  
         referrerPolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={baseball2} width='100%' height='100%' scrolling='yes'
         frameBorder='0' allowFullScreen 
          referrerPolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={baseball1} width='100%' height='100%'
         scrolling='yes' frameBorder='0' allowFullScreen 
          referrerPolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={baseball4} width='100%' height='100%' scrolling='yes'
         frameBorder='0' allowFullScreen 
          referrerPolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App