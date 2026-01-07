import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Roboto, Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';

const roboto = Roboto({
    subsets: ['latin'],
});

const notoSans = Noto_Sans_KR();

export default function Layout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="ko" className={clsx(roboto.className, notoSans.className)} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
