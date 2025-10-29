export default async function Home() {
  return <p>hello world</p>
}

export async function generateMetadata() {
  'use cache'
  return {
    url: new URL(`http://n`),
  }
}
