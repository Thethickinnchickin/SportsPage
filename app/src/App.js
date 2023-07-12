
import './App.css';


export function App() {


   /* BASEBALL */

   const baseball4 = 'https://embedstream.me/arizona-diamondbacks-vs-pittsburgh-pirates-stream-1'
   const baseball3 = 'https://embedstream.me/san-francisco-giants-vs-colorado-rockies-stream-1'
   const baseball2 = 'https://embedstream.me/washington-nationals-vs-texas-rangers-stream-1'
   const baseball1 = 'https://embedstream.me/boston-red-sox-vs-oakland-athletics-stream-2'
   /* FOOTBALL */

    const falcons = 'https://embedstream.me/atlanta-falcons-vs-pittsburgh-steelers-stream-1'

    const rams = 'https://embedstream.me/los-gelesams-vs-seattle-seahawks-stream-1'

    /* HOCKEY */
    const sharks = 'https://embedsteam.me/los-angeles-clippers-vs-phoenix-suns-stream-1'
    const kings = 'https://edsteameles-kingeam-1'


    /* SOCCER */
    const soccer1 = 'https:embetream.mcallas-stream-2'

    /* NBA */

    const warriors = 'https://embedsream/gorranto-kings-stream-2'
    const nets = 'https://embestrnda-trem-2'




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