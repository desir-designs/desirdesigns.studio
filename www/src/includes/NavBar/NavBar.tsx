import type { JSXComponentType, NavBarProps } from "blakprint/dist/typings"

export const defaultProps: NavBarProps<{links?: any, cta?: any }> = {
  links: Array(4).map((i, g) => ({
    url: `|${i}|`,
    name: `|${g}|`,
  })),
  cta: {
    text: "CTA_NOT_FOUND",
    url: "#"
  },
  favicon: {
    image: {
      src: "/assets/images/logo-transparent.png",
    },
  },
};

export default function NavBar(props: NavBarProps): JSXComponentType<NavBarProps> {

  const MenuBurger = () => {
    return (
      <div className="w-auto ml-4">
        <a href="#">
          <svg
            className="navbar-burger text-blue-800"
            width={51}
            height={51}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={56} height={56} rx={28} fill="currentColor" />
            <path
              d="M37 32H19M37 24H19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    )
  }
  
  return (
    <section className="fixed w-full top-0">
      <div className="relative flex items-center justify-between px-8 py-5 backdrop-blur-sm z-50">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <a href={props?.favicon?.url ?? defaultProps.favicon.url}>
                <img
                  className="h-16 object-fit"
                  src={props?.favicon?.image.src ?? defaultProps.favicon.image.src}
                  alt={props?.favicon?.image.alt ?? defaultProps.favicon.image.alt}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto hidden lg:block">
          <ul className="flex items-center mr-10">
            {
              props?.links?.map((link, index) => (
                <li key={index} className="font-heading mr-9 text-black font-sans uppercase text-lg">
                  <a href={`${link?.url ?? "#"}`}>{link?.name}</a>
                </li>
              )) ??
              defaultProps?.links?.map((link, index) => (
                <li key={index} className="font-heading mr-9 text-black font-sans uppercase text-lg">
                  <a href={`${link?.url ?? "#"}`}>{link?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10">
                {props?.cta?.text ?? defaultProps?.cta?.text}
              </button>
            </div>
            <MenuBurger />
          </div>
        </div>
      </div>

    </section>
  );
}
