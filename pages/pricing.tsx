import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallToAction from '../components/CallToAction'
import CompareTable from '../components/CompareTable'
import PlanSelection from '../components/PlanSelection'

const Pricing: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap - Pricing</title>
        <meta property="og:title" content="Photosnap - Pricing" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col md:flex-row-reverse items-center text-white bg-black">
        <span className="flex md:hidden lg:inline-flex">
          <Image width={830} height={490} src="/assets/pricing/desktop/hero.jpg" alt="" />
        </span>
        <span className="flex-none hidden md:inline-flex lg:hidden">
          <Image width={273} height={490} src="/assets/pricing/tablet/hero.jpg" alt="" />
        </span>
        <div className='px-6 md:p-0 flex flex-col lg:w-7/12 md:flex-row h-[300px] md:h-[144px]'>
          <span className='bg-main-accent w-2/5 h-[6px] md:h-full md:w-[6px]'>&nbsp;</span>
          <div className='md:w-5/6 lg:w-2/3 mx-auto my-auto h-[65%] md:h-full md:my-0 flex flex-col md:justify-between space-y-8'>
            <h1>Pricing</h1>
            <p className='opacity-60'>Create your stories. Photosnap is a platform for photographers and visual storytellers. It&apos;s the simple way to create and share your photos.</p>
          </div>
        </div>
      </div>

      <PlanSelection />

      <CompareTable />

      <CallToAction />
    </main>
  )
}

export default Pricing