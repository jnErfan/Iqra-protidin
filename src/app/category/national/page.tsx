import dynamic from 'next/dynamic'

const National = dynamic(() => import('../../../../components/Pages/Category/National/National'), { ssr: false })

export default async function allNewsMainPage() {

  return <National />
}
