import { useContext } from "react";
import { ThemeContext } from "./Contextprovider/ThemeContextProvider";

function About(){

    const { theme, handleThemeChange } = useContext(ThemeContext);

    return <div style={{backgroundColor: theme ? "white" : "black", width:"1000px", height:"100vh"}}>

        <button onClick={handleThemeChange}>ChangeTheme</button>

    </div>

}

export default About;