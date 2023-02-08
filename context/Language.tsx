import { create } from 'zustand';

interface LanguageState {
    language: string;
    setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>(set => ({
    language: '',
    setLanguage: (lang: string) => set(state => ({ ...state, language: lang })),
}));

export default useLanguageStore;