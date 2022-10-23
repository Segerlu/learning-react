import './Title.css';
import logo from './logo512.png'

function TitleBar() {
    return (
        <div id="titleBar">
            <img src={logo} id="leftLogo" className="titleLogo" alt="ImageNotFound" />
            <h1>This is my new website using REACT</h1>
            <img src={logo} id="rightLogo" className="titleLogo" alt="ImageNotFound" />
        </div>
        
    )
}

export default TitleBar;