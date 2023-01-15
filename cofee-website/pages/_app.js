import '../styles/globals.css';
import localfont from '@next/font/local';

const notoSerifToto = localfont({ 
  src: [
    {
      path: '../public/fonts/NotoSerifToto-Bold.ttf',
      weight: '700',
      style: 'Bold'
    },
    {
      path: '../public/fonts/NotoSerifToto-Regular.ttf',
      weight: '400',
      style: 'Regular'
    },
    {
      path: '../public/fonts/NotoSerifToto-SemiBold.ttf',
      weight: '600',
      style: 'Semi-Bold'
    }

  ]

})
export default function App({ Component, pageProps }) {
  return( 
  <main className={notoSerifToto.className}>
    <Component {...pageProps}/>
  </main>
  )
}
