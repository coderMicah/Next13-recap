import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Next 13 Updates',
  description: 'Next 13 changes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        <main className='mx-[4%] py-8'>{children}</main>
      </body>
    </html>
  )
}
