import type { NextPage } from 'next'
import Image from 'next/image'
import { Button4 } from '../components/Buttons'
import StoryCard from '../components/StoryCard'

const Features: NextPage = () => {
  return (
    <main>
      <div className='relative md:h-[650px] flex flex-col md:justify-center'>
        <span className='md:hidden'>
          <Image width={375} height={317} layout='responsive' src='/assets/stories/mobile/moon-of-appalacia.jpg' alt='featured story' />
        </span>
        <span className='hidden md:inline-block'>
          <Image layout='fill' objectFit='cover' src='/assets/stories/desktop/moon-of-appalacia.jpg' alt='featured story' />
        </span>
        <div className='px-7 py-12 md:px-0 md:w-[420px] md:ml-10 lg:ml-28 space-y-6 text-white bg-black md:bg-transparent md:relative'>
          <h4 className='uppercase text-xs'>last month&apos;s featured story</h4>
          <h1>hazy full moon of appalachia</h1>
          <p className='text-xs'><span className='opacity-60'>March 2nd 2020 </span><span className='font-bold'>by John Appleseed</span></p>
          <p className='opacity-60'>The dissected plateau area, while not actually made up of geological mountains, is popularly called &quot;mountains,&quot; especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
          <Button4 className='' text="read the story" />
        </div>
      </div>

      {/* StoryCard Grid */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <StoryCard date='April 16th 2020' title='The Mountains' author='John Appleseed' image="mountains.jpg"/>
        <StoryCard date='April 14th 2020' title='Sunset Cityscapes' author='Benjamin Cruz' image="cityscapes.jpg"/>
        <StoryCard date='April 11th 2020' title='18 Days Voyage' author='Alexei Borodin' image="18-days-voyage.jpg"/>
        <StoryCard date='April 9th 2020' title='Architecturals' author='Samantha Brooke' image="architecturals.jpg"/>
        <StoryCard date='April 7th 2020' title='World Tour 2019' author='Timothy Wagner' image="world-tour.jpg"/>
        <StoryCard date='April 3th 2020' title='Unforeseen Corners' author='William Malcolm' image="unforeseen-corners.jpg"/>
        <StoryCard date='March 29th 2020' title='King on Africa: Part II' author='Tim Hillenburg' image="king-on-africa.jpg"/>
        <StoryCard date='March 21th 2020' title='The Trip to Nowhere' author='Felicia Rourke' image="trip-to-nowhere.jpg"/>
        <StoryCard date='March 19th 2020' title='Rage of The Sea' author='Mohammed Abdul' image="rage-of-the-sea.jpg"/>
        <StoryCard date='March 16th 2020' title='Running Free' author='Michelle' image="running-free.jpg"/>
        <StoryCard date='March 11th 2020' title='Behind the Waves' author='Lamarr Wilson' image="behind-the-waves.jpg"/>
        <StoryCard date='March 9th 2020' title='Calm Waters' author='Samantha Brooke' image="calm-waters.jpg"/>
        <StoryCard date='March 5th 2020' title='The Milky Way' author='Benjamin Cruz' image="milky-way.jpg"/>
        <StoryCard date='March 4th 2020' title='Night at The Dark Forest' author='Mohammed Abdul' image="dark-forest.jpg"/>
        <StoryCard date='March 1th 2020' title="Somwarpet's Beauty" author='Michelle' image="somwarpet.jpg"/>
        <StoryCard date='February 25th 2020' title='Land of Dreams' author='William Malcolm' image="land-of-dreams.jpg"/>
      </div>
    </main>
  )
}

export default Features