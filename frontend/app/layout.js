import { Poppins } from 'next/font/google'
import './styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Dub Sar Systema',
  description: 'ERP web application using Next JS and Strapi'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
