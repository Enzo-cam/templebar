import '@/styles/globals.css'
import { TempleProv } from 'Context/TempleProvider'


export default function App({ Component, pageProps }) {
  return(
    <TempleProv>
      <Component {...pageProps} />
    </TempleProv>
  )
}
