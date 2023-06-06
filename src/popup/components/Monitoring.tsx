import { ActiveButton } from "./Button";
const preview = require("../../images/monitoring.gif");

export const Monitoring = ({onStopMonitoring}) => {
  
    function stopMonitoring() {
      chrome.tabs.query({}, tabs => {
          tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {monitoring: false});
        });
      });
      onStopMonitoring()
    }
  
    return (
        <>
            <img width={150} src={preview} alt="Logo"/>
            <h1>Monitoring Content</h1>
            <p>Stay protected from misinformation and enjoy a seamless browsing experience. Empower yourself with the ability to verify content wherever you go.</p>
            <br />
            <ActiveButton onClick={() => stopMonitoring()}>Stop monitoring</ActiveButton>
        </>
    );
};