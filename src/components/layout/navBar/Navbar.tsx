import type { ColorSchemes } from '@Data';
import { useColorScheme, useTheme } from '@Hooks';
import { ColorSchemeCircle, Dropdown, IconButton } from '@UI';
import { scrollToElement } from '@Utils';
import { useEffect, useRef } from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineDarkMode, MdOutlineEmail, MdOutlineLightMode } from 'react-icons/md';
import './Navbar.css';

function Navbar() {
    const [theme, toggleTheme] = useTheme();
    const [colorScheme, setColorScheme] = useColorScheme();
    const dropdownRef = useRef<HTMLUListElement>(null);
    const controllerRef = useRef(new AbortController());

    function toggleDropdown() {
        dropdownRef.current?.classList.toggle('active');
    }

    useEffect(() => {
        return () => {
            controllerRef.current.abort();
        };
    });

    return (
        <nav id="navbar">
            <IconButton href="https://www.linkedin.com/in/tim-geenen-62959a302/">
                <CiLinkedin className="nav-icon" />
            </IconButton>
            <IconButton href="https://github.com/Timgeenen">
                <IoLogoGithub className="nav-icon" />
            </IconButton>

            <IconButton
                onClick={() => {
                    const duration = 1000;
                    scrollToElement(document.querySelector('.contact-page')!, duration);
                    setTimeout(() => {
                        const input = document.querySelector('.contact-input') as HTMLInputElement;
                        input.focus();
                    }, duration);
                }}
            >
                <MdOutlineEmail className="nav-icon" />
            </IconButton>
            <span className="divider" />
            <IconButton onClick={toggleTheme} className="theme-button">
                {theme === 'light' ? (
                    <MdOutlineLightMode className="nav-icon theme-button-light" />
                ) : (
                    <MdOutlineDarkMode className="nav-icon theme-button-dark" />
                )}
            </IconButton>

            <div className="scheme-button-wrapper">
                <IconButton className="scheme-button" onClick={toggleDropdown}>
                    <ColorSchemeCircle {...colorScheme} className="nav-icon" />
                </IconButton>
                <Dropdown
                    ref={dropdownRef}
                    active={colorScheme.scheme}
                    handleClick={(scheme: ColorSchemes) => {
                        setColorScheme(scheme);
                        toggleDropdown();
                    }}
                />
            </div>
        </nav>
    );
}

export default Navbar;
