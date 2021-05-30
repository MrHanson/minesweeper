import Head from 'next/head'
import { StatusBar } from '../components/StatusBar'

export default function Home() {
  return (
    <div className='w-full md:w-96 mx-auto py-2'>
      <Head>
        <title>Minesweeper</title>
        <meta
          name='description'
          content='classical minesweeper game by react and mobx and tailwind.css'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto'>
        <StatusBar mineNum={30} emotionFace={'happy'} time={0} />
      </main>

      <footer className='text-center py-8'>
        <a href='https://github.com/MrHanson/minesweeper.git'>Copyright © 2021 Hanson Leung</a>
      </footer>
    </div>
  )
}
