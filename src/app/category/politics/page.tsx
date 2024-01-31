import dynamic from 'next/dynamic'

const Politics = dynamic(() => import('../../../../components/Pages/Category/Politics/Politics'), { ssr: false })

export default async function allNewsMainPage() {

  return <Politics />
}
