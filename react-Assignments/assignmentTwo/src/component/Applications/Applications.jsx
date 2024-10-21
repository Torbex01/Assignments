import apple from '../../assets/png/apple-logo.png'
import android from '../../assets/png/android.png'
import figma from '../../assets/png/figma.png'
import chrome from '../../assets/png/chrome.png'
import adobe from '../../assets/png/adobe.png'
import "./Applications.css"
const Applications = ()=>{
    return (
        <div className="Applications">
            <div className="appCard">
                <img src={apple} alt="cardIcon" />
                <h2>iOS App</h2>
                <p>Create, browse and
                    save palleter on the 
                    go
                </p>
            </div>

            <div className="appCard">
                <img src={android} alt="cardIcon" />
                <h2>Android App</h2>
                <p>Thousands of palettes in your pocket.
                </p>
            </div>

            <div className="appCard">
                <img src={figma} alt="cardIcon" />
                <h2>Figma plugin</h2>
                <p>All palettes right in your workspace.
                </p>
            </div>

            <div className="appCard">
                <img src={chrome} alt="cardIcon" />
                <h2>Chrome Extension</h2>
                <p>Get and edit a palette every new tab.
                </p>
            </div>

            <div className="appCard">
                <img src={adobe} alt="cardIcon" />
                <h2>Adobe Extension</h2>
                <p>
                    Use coolors with your favorite tool.
                </p>
            </div>
        </div>
    )
}
export default Applications