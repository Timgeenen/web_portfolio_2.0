import { useState } from 'react';

export default function useTheme(): [string, () => void] {
    const [theme, setTheme] = useState(
        document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
    );

    function toggleTheme() {
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.removeAttribute('data-theme');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setTheme('light');
        }
    }

    return [theme, toggleTheme];
}
