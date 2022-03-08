import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button4 } from '../components/Buttons'
import FeatureCard from '../components/FeatureCard'
import StoryCard from '../components/StoryCard'

const Home: NextPage = () => {
  return (
    <main>
      <FeatureCard
       accent 
       position="left" 
       color="dark" 
       heading="create and share your photo stories." 
       paragraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others." 
       buttonText="get an invite" 
       image="create-and-share.jpg"/>
      <FeatureCard
       position="right" 
       color="light" 
       heading="beautiful stories every time" 
       paragraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone." 
       buttonText="view the stories" 
       image="beautiful-stories.jpg"/>
      <FeatureCard
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
    </main>
  )
}

export default Home
