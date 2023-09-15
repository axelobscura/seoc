import Image from 'next/image'

export default function Loader(){
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="/loader.gif"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </main>
  )
}