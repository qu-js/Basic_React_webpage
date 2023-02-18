import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
    const {isDark} = useContext(ThemeContext);
    

    return (
        <>
            <header 
                className="header"
                style={{
                    backgroundColor: isDark ? '#2D2D2D' : 'lightgray',
                    color: isDark ? 'white' : 'black',
                }}
            >
                <h1>Test React Code</h1>

            
            </header>
        </>
    );
};