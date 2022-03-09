import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallToAction from '../components/CallToAction'
import FeatureCard from '../components/FeatureCard'
import { BoostExposureIcon, CustomDomainIcon, DragDropIcon, EmbedIcon, NoLimitIcon, ResponsiveIcon } from '../components/FeatureIcons'

const Features: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap - Features</title>
        <meta property="og:title" content="Photosnap - Features" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <div className="flex flex-col md:flex-row-reverse items-center text-white bg-black">
        <span className="flex md:hidden lg:inline-flex">
          <Image width={830} height={490} src="/assets/features/desktop/hero.jpg" alt="" />
        </span>
        <span className="flex-none hidden md:inline-flex lg:hidden">
          <Image width={273} height={490} src="/assets/features/tablet/hero.jpg" alt="" />
        </span>
        <div className='px-6 md:p-0 flex flex-col md:flex-row h-[300px] md:h-[144px]'>
          <span className='bg-main-accent w-2/5 h-[6px] md:h-full md:w-[6px]'>&nbsp;</span>
          <div className='md:w-5/6 lg:w-2/3 mx-auto my-auto h-[65%] md:h-full md:my-0 flex flex-col md:justify-between space-y-8'>
            <h1>Features</h1>
            <p className='opacity-60'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
          </div>
        </div>
      </div>

      {/* FeatureCard Grid */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-8 py-16 md:py-24 gap-x-7 gap-y-14 md:gap-y-24'>
        <FeatureCard title="100% Responsive" description="No matter which the device you&apos;re on, our site is fully responsive and stories look beautiful on any screen." image={<ResponsiveIcon />}/>
        <FeatureCard title="No Photo Upload Limit" description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go." image={<NoLimitIcon />}/>
        <FeatureCard title="Available to Embed" description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. " image={<EmbedIcon />}/>
        <FeatureCard title="Custom Domain" description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!" image={<CustomDomainIcon />}/>
        <FeatureCard title="Boost Your Exposure" description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list." image={<BoostExposureIcon />}/>
        <FeatureCard title="Drag & Drop Image" description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories." image={<DragDropIcon />}/>
      </div>

      <CallToAction />

    </main>
  )
}

export default Features