import Image from 'next/image'

const Review = (props) => {
  const { children, name, ...rest } = props
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div>
        <Image {...rest} alt="Headshot for Yelp Review on The Grind's website." />
      </div>
      <div className='text-lg'>{children}</div>
      <div className='flex gap-2'>
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
      </div>
      <div className='font-sans tracking-light text-md'>- {name}</div>
    </div>
  )
}

export default Review
