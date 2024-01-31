import dynamic from 'next/dynamic'

const Agriculture = dynamic(() => import('../../../../components/Pages/Category/Agriculture/AgricultureCategory'), { ssr: false })

export default async function AgricultureMainPage() {

  return <Agriculture />
}
