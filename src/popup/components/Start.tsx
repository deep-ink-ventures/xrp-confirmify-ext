import { StandardButton } from "./Button";

const preview = require("../../images/preview.png");

export const Start = ({onMonitoring}) => {
  
  function startMonitoring() {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, {monitoring: true});
      });
    });
    onMonitoring()
  }
  
  return (
    <>
      <img width={160} src={preview} alt="Logo"/>
      <h1>Stay Informed,<br/>Browse Assured</h1>
      <p>Stay protected from misinformation and enjoy a seamless browsing experience. Empower yourself with the ability
        to verify content wherever you go.</p>
      <StandardButton onClick={() => startMonitoring()}>Activate monitoring contents</StandardButton>
    </>
  );
};