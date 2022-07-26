import Container from '../Container';
import SvgIcon from '../svg-icon';
// import { useState } from 'react';

export default function Header() {
    // let theme = localStorage.getItem('theme');
    // const [moon, setMoon] = useState(theme === 'light' ? false : true);

    // const toggleTheme = () => {
    //     const root = document.documentElement;
    //     root.classList.toggle('dark');
    //     localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    //     setMoon(!moon);
    // }

    // const [label, icon, iconLabel] = moon === false ? ['Light mode', sunIcon, 'Sun icon'] : ['Dark mode', moonIcon, 'Moon icon']

    return (
        <header className="py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <h1
                        className="text-3xl font-bold py-2">Mateen
                    </h1>
                    {/* <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleTheme} area-label={label}>
                        <SvgIcon className="w-5" d={icon} title={iconLabel} viewBox="0 0 512 512" />
                    </button> */}
                </div>
            </Container>
        </header>
    )
}
