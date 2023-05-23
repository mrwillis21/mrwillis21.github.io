import { Raleway } from 'next/font/google'
import Image from 'next/image'
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center p-16">
      <h1 className={`${raleway.className} font-light text-4xl`}>Matt Willis</h1>
      <Image className="rounded-full m-10" src="/headshot.png" alt="Professional photo of Matt Willis" width={240} height={240} priority />
      <div className="flex flex-row items-center gap-6">
        <a className="group" aria-label="View my profile on LinkedIn" href="https://www.linkedin.com/in/matthew-willis-2b5b36b" target="_blank">
          <SiLinkedin aria-hidden="true" size="1.5em" className="fill-slate-500 group-hover:fill-slate-800" />
        </a>
        <a className="group" aria-label="View my profile on Github" href="https://github.com/mrwillis21" target="_blank">
          <SiGithub size="1.5em" className="fill-slate-500 group-hover:fill-slate-800" />
        </a>
        <a className="group" aria-label="Send me an email" href="mailto:contact@mrwillis.net">
          <SiGmail size="1.5em" className="fill-slate-500 group-hover:fill-slate-800" />
        </a>
      </div>
    </main>
  )
}
