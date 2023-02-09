import { useMantineColorScheme } from '@mantine/core';

function useDarkMode() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    function useTheme(darkValue: string, lightValue: string) {
        return dark ? darkValue : lightValue;
    }

    return useTheme;
}

export default useDarkMode;