import dynamic from 'next/dynamic'

const Education = dynamic(() => import('../../../../components/Pages/Category/Education/Education'), { ssr: false })

export default async function EducationMainPage() {

  return <Education />
}
