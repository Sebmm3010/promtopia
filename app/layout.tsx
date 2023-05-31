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
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  )
}
