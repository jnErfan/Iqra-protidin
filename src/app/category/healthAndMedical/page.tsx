import dynamic from 'next/dynamic'

const HealthAndMedical = dynamic(() => import('../../../../components/Pages/Category/HealthAndMedical/HealthAndMedical'), { ssr: false })

export default async function HealthAndMedicalMainPage() {

  return <HealthAndMedical />
}
