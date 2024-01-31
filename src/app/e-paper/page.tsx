import { Metadata, ResolvingMetadata } from "next";
import EPaperContainer from "../../../components/Pages/EPaper/EPaperContainer/EPaperContainer";



async function getData() {
  try {
    const res = await fetch(`https://server.eiqraprotidin.com/allEPaperNews`)
    let data = await res.json()
    return (Array.isArray(data) && data.length) ? data[0] : data

  } catch (error) {
    console.log('error', error);

  }
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getData()
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: "ইকরা প্রতিদিন || e-paper",
    description: data.date,
    openGraph: {
      images: [data.image1, ...previousImages],
      type: "article",
      url: "https://www.eiqraprotidin.com/e-paper"
    },
    twitter: {
      title: "ইকরা প্রতিদিন ||",
      description: data.date,
      card: "summary_large_image",
      images: [data.image1]
    },

  }
}
export default function EPaperContainerPage() {

  return <EPaperContainer />
}
