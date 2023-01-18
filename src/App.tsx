import './App.css';
import pic from './profile.jpg'

import { generateJSXMeshGradient } from "meshgrad";


export function App() {
  return (
  <div>
    <div style={generateJSXMeshGradient(7, '#000')} className="background" />
    <div className="background-shade" />
    <div>
      <h1>Peter Matev</h1>
      <img className="avatar" src={pic} />
      <p>Engineering Leader @ Wayve, Senior Engineer @ Ex-Deliveroo, Ex-Founder, Ex Film Maker</p>
      <p>Contact me: <code><a href="mailto:peter@matev.co.uk">peter@matev.co.uk</a></code></p>

      <div style={{padding: '1rem'}}></div>
      <p>I like to make things. You can find some of them here.</p>
    </div>
  </div>);
}

export default App;
