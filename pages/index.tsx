import Head from 'next/head'
import { StatusBar } from '../components/StatusBar'
import { Link } from '@material-ui/core'

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Minesweeper</title>
        <meta
          name='description'
          content='classical minesweeper game by react and mobx and tailwind.css'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <StatusBar mineNum={30} emotionFace={'happy'} time={0} />
      </main>

      <footer className='footer'>
        <Link href="https://github.com/MrHanson/minesweeper.git" >Copyright © 2021 Hanson Leung</Link>
      </footer>
    </div>
  )
}
