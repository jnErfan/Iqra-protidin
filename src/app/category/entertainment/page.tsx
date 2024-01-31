import dynamic from 'next/dynamic'

const Entertainment = dynamic(() => import('../../../../components/Pages/Category/Entertainment/Entertainment'), { ssr: false })

export default async function EntertainmentMainPage() {

  return <Entertainment />
}
