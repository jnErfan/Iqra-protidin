import { Metadata, ResolvingMetadata } from 'next'
import NewsDetails from '../../../../components/Pages/NewsDetails/NewsDetails'


async function getData(id: string) {
  const res = await fetch(`https://server.eiqraprotidin.com/news/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  let data = await res.json()
  return (Array.isArray(data) && data.length) ? data[0] : data
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const data = await getData(params.id)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.newsTitle,
    description: data.newsContent,
    openGraph: {
      images: [data.image, ...previousImages],
    },
    twitter: {
      title: data.newsTitle,
      description: data.newsContent,
      images: data.image
    }
  }
}

export default async function NewsDetailsPage({ params, searchParams }: Props) {

  return <NewsDetails />
}
