
import './App.css';


export function App() {


   /* BASEBALL */

   const baseball4 = 'https://embedstream.me/san-francisco-giants-vs-arizona-diamondbacks-stream-1'
   const baseball3 = 'https://embedstream.me/chicago-cubs-vs-cincinnati-reds-stream-1'
   const baseball2 = 'https://embedstream.me/houston-astros-vs-cleveland-guardians-stream-1'
   const baseball1 = 'https://embedstream.me/seattle-mariners-vs-boston-red-sox-stream-2'
   /* FOOTBALL */

    const falcons = 'https://embedstroittrghs-ream-1'

    const rams = 'https:/edstream.me/ssamsttleeah-sa'
    /* HOCKEY */
    const sharks = 'https://embedsteam.m-anes-clirs-vs-phix-suns-stream-1'
    const kings = 'https://teamees-kinam-1'


    /* SOCCER */
    const soccer1 = 'https:embetream.mcallas-stream-2'

    /* NBA */

    const warriors = 'http/embedsream/gorranto-kings-stream-2'
    const nets = 'https://embe-m-2'




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