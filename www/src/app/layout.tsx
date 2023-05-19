import "@libs/globals.css"

export const metadata = {
  title: 'Desir Designs',
  description: 'The Fringe of Desing',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
