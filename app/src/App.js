import logo from './logo.svg';
import './App.css';

function App() {
   const athletics = 'https://embedstream.me/los-angeles-angels-vs-oakland-athletics-stream-2'
   const padres = 'https://embedstream.me/san-diego-padres-vs-colorado-rockies-stream-2'
   const giants = 'https://embedstream.me/san-francisco-giants-vs-los-angeles-dodgers-stream-3'
   const soccer = 'https://embedstream.me/seattle-sounders-vs-fc-dallas-stream-1'
  return (
    <div className="App">
        <div id="NW">

        <iframe src={athletics} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency 
         referrerpolicy='unsafe-url'></iframe>
        </div>
        
        <div id="NE">
        <iframe src={padres} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SE">
        
        <iframe src={giants} width='100%' height='100%'
         scrolling='yes' frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>

        <div id="SW">
        <iframe src={soccer} width='100%' height='100%' scrolling='yes'
         frameborder='0' allowfullscreen allowtransparency
          referrerpolicy='unsafe-url'></iframe>
        </div>
    </div>
  );
}

export default App;
