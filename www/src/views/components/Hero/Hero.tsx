import Typography from "@components/Typography";


export type HeroProps = {
  title?: string
}
export function defaultProps(): HeroProps {
  return {
    title: "Desir Designs",
  } as HeroProps
}


export default function Hero(props?: HeroProps) {

  const { title } = props;

  return (
      <div className="bg-transparent">

<section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
 
  <div className="relative z-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-8xl font-bold sm:text-6xl">
        <Typography>
          {title ?? defaultProps().title}
          </Typography>
      </h1>
      <p className="mt-5 text-black text-4xl sm:text-xl">
        The Fringe of Designs
      </p>
      <a
        href="#"
        title=""
        className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
        role="button"
      >
       Contact Me
        <svg
          className="w-6 h-6 ml-8 -mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    
    </div>
  </div>
</section>
</div>

  )
}