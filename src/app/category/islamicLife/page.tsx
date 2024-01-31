import dynamic from 'next/dynamic'

const IslamicLife = dynamic(() => import('../../../../components/Pages/Category/IslamicLife/IslamicLife'), { ssr: false })

export default async function IslamicLifeMainPage() {

  return <IslamicLife />
}
