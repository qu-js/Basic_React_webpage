import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <footer
            className="footer"
            style={{
                backgroundColor: isDark ? '#2D2D2D' : 'lightgray',
            }}
        >  

        <button className="button" onClick={toggleTheme}>
            DarkMode
        </button>
        </footer>
    );
};