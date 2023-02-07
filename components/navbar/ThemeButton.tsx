import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSunHigh } from '@tabler/icons-react';

export default function ThemeButton() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (

        <ActionIcon
            variant="filled"
            onClick={() => toggleColorScheme()}
            color={dark ? 'light.2' : 'light.0'}
            radius='md'
            sx={{ height: '2.3rem', width: '2.3rem', transition: '.2s all ease', ":hover": { backgroundColor: dark ? '#50462A' : '#CBCBCB' } }}

        >
            {dark ? <IconSunHigh size={24} strokeWidth={1} color={'white'} /> : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon-filled" width={24} height={24} viewBox="0 0 24 24" strokeWidth="0" stroke="#505050" fill="#505050" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" fill="#505050"></path>
            </svg>}
        </ActionIcon>
    );
}