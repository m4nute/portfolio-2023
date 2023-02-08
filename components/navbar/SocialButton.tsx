import React from 'react'
import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { BrandLinkedin, BrandGithub, Mail, FileDescription } from 'tabler-icons-react';

function SocialButton({ label }: { label: string }) {

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const icons: { [key: string]: JSX.Element } = {
        LinkedIn: <BrandLinkedin onClick={() => window.open('https://www.linkedin.com/in/manuelgudi%C3%B1o/', '_blank')} size={24} strokeWidth={1.5} color={dark ? 'white' : '#505050'} />,
        Email: <Mail size={24} strokeWidth={1.5} color={dark ? 'white' : '#505050'} onClick={() => window.location.href = 'mailto:mgudinocontacto@gmail.com?'} />,
        GitHub: <BrandGithub onClick={() => window.open('https://github.com/m4nute', '_blank')} size={24}
            strokeWidth={1.5} color={dark ? 'white' : '#505050'} />,
        'CV': <FileDescription size={24} strokeWidth={1.5} color={dark ? 'white' : '#505050'} />,
    };

    const icon = icons[label];

    return (
        <div>
            <Tooltip
                label={label}
                transition="skew-up"
                color={dark ? "light.2" : "light.0"}
                sx={{ color: dark ? '#' : '#505050', fontSize: '.77em', paddingBottom: '.2em', paddingLeft: '.6em', paddingRight: '.6em' }}
                position="bottom"
                offset={12}
            >
                <ActionIcon radius='md' color={dark ? 'light.2' : 'light.0'} sx={{ height: '2.3rem', width: '2.3rem', transition: '0.2s all ease', ":hover": { scale: '1.1', backgroundColor: dark ? '#505050' : '#CBCBCB' } }} variant='filled' className="bg-navbtn rounded-xl p-1 hover:scale-110 transition-transform duration-200">
                    {icon}
                </ActionIcon>
            </Tooltip>
        </div>
    );
}

export default SocialButton;