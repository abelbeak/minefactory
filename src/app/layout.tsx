import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const myFont = localFont({
    src: './fonts/PretendardVariable.woff2',
    fallback: [
        'Pretendard',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'sans-serif',
    ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={myFont.className}>{children}</body>
        </html>
    );
}
