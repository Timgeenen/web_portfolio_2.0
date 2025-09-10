import { COLOR_SCHEMES, type ColorSchemeData, type ColorSchemes } from '@Data';
import { useEffect, useState } from 'react';

function useColorScheme(): [ColorSchemeData, (scheme: ColorSchemes) => void] {
    const currentScheme = COLOR_SCHEMES.find(
        (scheme) =>
            scheme.scheme ===
            (document.documentElement.getAttribute('data-color-scheme') as ColorSchemes),
    );
    const [colorScheme, setColorScheme] = useState<ColorSchemeData>(
        currentScheme ?? COLOR_SCHEMES[0]!,
    );

    useEffect(() => {
        if (!currentScheme) {
            document.documentElement.setAttribute('data-color-scheme', COLOR_SCHEMES[0]!.scheme);
        }
    }, []);

    function changeColorScheme(scheme: ColorSchemes): void {
        const newScheme = COLOR_SCHEMES.find((data) => data.scheme === scheme);
        const currentScheme = document.documentElement.getAttribute('data-color-scheme');
        if (!newScheme) {
            return;
        }
        if (currentScheme && currentScheme !== newScheme.scheme) {
            document.documentElement.removeAttribute('data-color-scheme');
        }
        document.documentElement.setAttribute('data-color-scheme', newScheme.scheme);
        setColorScheme(newScheme);
    }

    return [colorScheme, changeColorScheme];
}

export default useColorScheme;
