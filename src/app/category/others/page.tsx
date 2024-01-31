import dynamic from 'next/dynamic'

const Others = dynamic(() => import('../../../../components/Pages/Category/Others/Others'), { ssr: false })

export default async function OthersMainPage() {

  return <Others />
}
