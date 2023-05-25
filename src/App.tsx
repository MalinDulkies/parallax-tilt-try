import { ReactParallaxTilt } from './react-parallax-tilt/ReactParallaxTilt';
import guy from './Kaneki.png'

import './App.scss';

function App() {
  return (
    <ReactParallaxTilt
    className="parallax-effect-glare-scale"
    perspective={1800}
    glareEnable={true}
    glareMaxOpacity={0.30}
    scale={1.1}
  >

    <div className="inner-element">
      <div className="inner-element-foreground">
        Series Xiaomi 13
      </div>
    </div> 

    <div className="inner-element2">
      <div className="inner-element-background"></div>
      <img className="inner-element-foreground" src={guy} alt=""></img>
    </div>
  </ReactParallaxTilt>
  );
}

export default App;
