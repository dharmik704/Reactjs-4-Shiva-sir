import { useState } from "react";


function Theme(){
    const [theme, SetTheme] = useState(false);

    return <>
    <button onClick={()=>{SetTheme(!theme)}}>{theme ? 'Show' : 'Hide'}</button>
        <div style={{backgroundColor: theme ? 'white' : 'black', height: '100vh', width: '700px', display: theme ? 'none' : 'block'}}>
            <button onClick={()=>{SetTheme(!theme)}}>{theme ? 'Dark Mod' : 'White Mod'}</button>
            <h1 style={{color: theme ? 'black' : 'white', height: '100vh'}}>Hello</h1>
        </div>
    </>
}

export default Theme;