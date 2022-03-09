import type { NextPage } from 'next'
import Head from 'next/head'
import FeatureCard from '../components/FeatureCard'
import { EmbedIcon, NoLimitIcon, ResponsiveIcon } from '../components/FeatureIcons'
import HomeCard from '../components/HomeCard'
import StoryCard from '../components/StoryCard'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap - A Photography Website</title>
        <meta property="og:title" content="Photosnap - A Photography Website" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeCard
       accent 
       position="left" 
       color="dark" 
       heading="create and share your photo stories." 
       paragraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others." 
       buttonText="get an invite" 
       image="create-and-share.jpg"/>
      <HomeCard
       position="right" 
       color="light" 
       heading="beautiful stories every time" 
       paragraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone." 
       buttonText="view the stories" 
       image="beautiful-stories.jpg"/>
      <HomeCard
       position="left" 
       color="light" 
       heading="designed for everyone" 
       paragraph="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. " 
       buttonText="view the stories" 
       image="designed-for-everyone.jpg"/>
      
      {/* StoryCard Grid */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <StoryCard date='April 16th 2020' title='The Mountains' author='John Appleseed' image="mountains.jpg"/>
        <StoryCard date='April 14th 2020' title='Sunset Cityscapes' author='Benjamin Cruz' image="cityscapes.jpg"/>
        <StoryCard date='April 11th 2020' title='18 Days Voyage' author='Alexei Borodin' image="18-days-voyage.jpg"/>
        <StoryCard date='April 9th 2020' title='Architecturals' author='Samantha Brooke' image="architecturals.jpg"/>
      </div>

      {/* Features Grid */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-8 py-16 md:py-24 gap-x-7 gap-y-14 md:gap-y-24'>
        <FeatureCard title="100% Responsive" description="No matter which the device you&apos;re on, our site is fully responsive and stories look beautiful on any screen." image={<ResponsiveIcon />}/>
        <FeatureCard title="No Photo Upload Limit" description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go." image={<NoLimitIcon />}/>
        <FeatureCard title="Available to Embed" description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. " image={<EmbedIcon />}/>
      </div>
    </main>
  )
}

export default Home
