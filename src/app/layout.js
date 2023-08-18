import './globals.css'
import "react-datepicker/dist/react-datepicker.css";

import { Space_Grotesk } from 'next/font/google'
import ReduxProvider from './ReduxProvider';

const space_Grotes = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Telehealth Consultation Form | updoc',
  description: 'Telehealth Consultation Form | updoc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_Grotes.className}>
        <ReduxProvider>{children}</ReduxProvider>
        </body>
    </html>
  )
}
