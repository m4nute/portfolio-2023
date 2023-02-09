import { useViewportSize } from '@mantine/hooks';

function useMobileSize() {
    const { width } = useViewportSize();

    function useMobileFont(pixels: number, desktopValue: number, mobileValue: number) {
        return width > pixels ? desktopValue : mobileValue;
    }
    function useMobileWidth(pixels: number, value: string) {
        return width > pixels && value;
    }
    return { useMobileFont, useMobileWidth };
}

export default useMobileSize;