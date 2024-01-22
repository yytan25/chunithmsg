import './globals.css';
import { Inter as FontSans } from 'next/font/google';

import { creatorGitHubUrls, cn } from '@/libs';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: "Chunithm Singapore Official Site",
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body
      className={cn(
        'min-h-svh bg-background font-sans antialiased',
        fontSans.variable,
      )}
    >
      <div className="relative flex min-h-svh flex-col bg-background">
        <NavBar />
        <main className="flex-1 container py-6 lg:py-8 max-w-6xl mx-auto">
          {children}
        </main>
        <footer className="py-6 md:px-8 md:py-0 border-t">
          <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
            <span className="text-balance text-center text-sm leading-loose text-muted-foreground">
              Built by{' '}
              {Object.entries(creatorGitHubUrls).map(([name, url]) => (
                <>
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {name}
                  </a>
                  &nbsp;
                </>
              ))}
            </span>
          </div>
        </footer>
      </div>
    </body>
  </html>
);

export default RootLayout;
