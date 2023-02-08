import useLanguageStore from 'context/Language';
import React from 'react';

const useLanguage = () => {
    const [language, setLanguage] = useLanguageStore((state) => [state.language, state.setLanguage])
    const [lang, setLang] = React.useState<string>(language);

    React.useEffect(() => {
        setLang(language);
    }, [language]);

    return { lang, setLanguage };
};

export default useLanguage;