import { useState } from "react";

const logo = require("../images/logo.png");
import {Start} from "./components/Start";
import {Monitoring} from "./components/Monitoring";


export const App = () => {
  
    const [isMonitoring, setMonitoring] = useState(false);
  
    return (
        <div className="app">
          <header>
            <img width={180} src={logo} alt="Logo"/>
          </header>
          <main>
            {!isMonitoring
              ? <Start onMonitoring={() => setMonitoring(true)} />
              : <Monitoring onStopMonitoring={() => setMonitoring(false)} />
            }
          </main>
        </div>
    );
};
