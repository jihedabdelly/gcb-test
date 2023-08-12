import React from "react"
import { setThemeLight, setThemeDark, setThemeMarine } from "../Redux/reducers/themeReducer";
import moon from "../pics/moon.png";
import wave from "../pics/wave.png";
import sun from "../pics/sun.png"


const ThemeSwitcher = ({theme, dispatch}: {theme: string, dispatch: any}) => {
  return (
    <div className="theme-switcher" >
        <input type="image" src={sun} name="light" style={{opacity: theme === "light" ? 1 : 0.5}} className="theme-btn" onClick={() => dispatch(setThemeLight())} />
        <input type="image" src={moon} name="dark" style={{opacity: theme === "dark" ? 1 : 0.5}} className="theme-btn" onClick={() => dispatch(setThemeDark())} />
        <input type="image" src={wave} name="marine" style={{opacity: theme === "marine" ? 1 : 0.5}} className="theme-btn" onClick={() => dispatch(setThemeMarine())} />
      
    </div>
  )
};

export default ThemeSwitcher;
