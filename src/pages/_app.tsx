import '../styles/global.scss'

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PalyerContext } from '../contexts/PlayerContexts';


import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PalyerContext.Provider value={'Junior'}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} /> 
        </main>
        <Player />
      </div>
    </PalyerContext.Provider>

  )
}

export default MyApp
