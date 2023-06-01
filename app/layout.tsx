import { Navbar } from '@components';
import { Provider } from '@components/Layouts';
import '@styles/global.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Descubrir y compartir AI Prompts'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
