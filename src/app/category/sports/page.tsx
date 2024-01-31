import dynamic from 'next/dynamic'

const Sports = dynamic(() => import('../../../../components/Pages/Category/Sports/Sports'), { ssr: false })

export default async function SportsMainPage() {

  return <Sports />
}
