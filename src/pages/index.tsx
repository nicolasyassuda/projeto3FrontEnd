import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/login'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{margin:"0px"}}>
      <Login></Login>
    </div>
  )
}
