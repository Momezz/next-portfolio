import '../../public/assets/css/normalize.css';
import '../../public/assets/css/variables.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio Julian Gomez M',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Navigation />
      </body>
    </html>
  )
}
