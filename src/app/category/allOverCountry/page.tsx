import dynamic from 'next/dynamic'

const AllOverCountry = dynamic(() => import('../../../../components/Pages/Category/AllOverCountry/AllOverCountry'), { ssr: false })

export default async function AllOverCountryMainPage() {

  return <AllOverCountry />
}
