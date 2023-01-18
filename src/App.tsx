import './App.css';
import pic from './profile3.jpg'

import { generateJSXMeshGradient } from "meshgrad";


export function App() {
  return (
  <div>
    <div style={generateJSXMeshGradient(7, '#000')} className="background" />
    <div className="background-shade" />
    <div>
      <img className="avatar" src={pic} alt="Profile" />
      <h1>Peter Matev</h1>
      <p>Engineering Leader @ <a href="https://wayve.ai" target="_blank" rel="noreferrer">Wayve</a>, Senior Engineer @ Ex-Deliveroo, Ex-Founder, Ex Film Maker</p>
      <p>Email me 👇</p>
      <p><code><a href="mailto:peter@matev.co.uk">peter@matev.co.uk</a></code></p>

      <div style={{padding: '1rem'}}></div>
      <p>I like to make things. You can find some of them here. [coming soon]</p>
    </div>
  </div>);
}

export default App;
