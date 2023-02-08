import { forwardRef, useState } from 'react';
import { Group, Avatar, Text, Select, useMantineColorScheme } from '@mantine/core';
import { Language } from 'tabler-icons-react';
import { setCookie } from 'cookies-next';
import useLanguage from 'hooks/Language';

const data = [
    {
        image: 'https://cdn-icons-png.flaticon.com/512/555/555635.png',
        label: 'ES',
        value: 'ES',
        description: 'Español',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/555/555526.png',
        label: 'EN',
        value: 'EN',
        description: 'English',
    },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others} style={{ paddingBottom: 5, paddingTop: 5, position: 'relative', zIndex: 99 }}>
            <Group noWrap sx={{ display: 'flex', gap: 10 }}>
                <Avatar size='sm' src={image} sx={{ padding: 0 }} />
                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" opacity={0.65}>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    )
);

export default function LanguageSelect({ browserLanguage }: { browserLanguage: string }) {

    const { setLanguage } = useLanguage()

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
            <Select
                sx={{
                    width: '8rem', height: 36.79, backgroundColor: dark ? '#373737' : '#E1E1E1', borderRadius: '10px', transition: '.2s all ease', ":hover": { backgroundColor: dark ? '#434343' : '#CBCBCB' }
                }}
                placeholder="Lang"
                itemComponent={SelectItem}
                transition="scale"
                transitionDuration={150}
                transitionTimingFunction="ease"
                data={data}
                variant='unstyled'
                onChange={(value: string) => { setCookie('language', value, { maxAge: 84600 * 30 }); setLanguage(value) }} // 30 days
                defaultValue={browserLanguage}
                icon={<Language
                    size={20}
                    strokeWidth={1.5}
                    color={dark ? 'white' : 'black'}
                />}
                filter={(value, item) =>
                    item?.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
                    item.description.toLowerCase().includes(value.toLowerCase().trim())
                }
            />
        </>
    );
}
