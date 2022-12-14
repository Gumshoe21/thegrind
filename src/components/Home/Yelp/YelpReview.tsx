import Image from 'next/image'

const Review = (props) => {
  const { children, name, ...rest } = props
  return (
    <div className='flex flex-col items-center justify-center gap-4 hover:translate-y-[-0.50rem] transition-all hover:scale-110 duration-500 hover:shadow-xl px-4 py-6 hover:rounded-lg'>
      <div>
        <Image {...rest} alt="Headshot for Yelp Review on The Grind's website." />
      </div>
      <div className='text-md'>{children}</div>
      <div className='flex gap-[12px]'>
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
        <Image src='/img/5star.svg' alt='Headshot' height='20' width='20' />
      </div>
      <p className='font-serif uppercase tracking-widest text-xs'>- {name}</p>
    </div>
  )
}

export default Review
