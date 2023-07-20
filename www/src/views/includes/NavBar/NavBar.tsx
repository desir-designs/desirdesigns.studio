import type { FaviconProps, LinkProps, CallToActionProps } from "@typings/index";

export type NavBarProps = {
  favicon?: FaviconProps;
  links?: LinkProps[];
  cta?: CallToActionProps;
};

export function Links(links: NavBarProps["links"]) {
  if (!links) {
    return null;
  } else {
    return (
      <div className="w-auto lg:block">
        <ul className="flex items-center mr-10 text-black">
          <li className="text-lg text-white font-heading mr-9 hover:text-gray-200">
            <a href="#">Features</a>
          </li>
          <li className="text-lg text-white font-heading mr-9 hover:text-gray-200">
            <a href="#">Solutions</a>
          </li>
          <li className="text-lg text-white font-heading mr-9 hover:text-gray-200">
            <a href="#">Resources</a>
          </li>
          <li className="text-lg text-white font-heading hover:text-gray-200">
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
    );
  }
}

export function Favicon(props: NavBarProps["favicon"]) {
  return (
    <div className="w-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-auto mr-14">
          <a href="#">
            <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function CallToAction(props: NavBarProps["cta"]) {
  return (
    <div className="w-auto">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-auto lg:block">
          <button className="group relative p-0.5 font-heading block w-full md:w-auto text-lg text-white font-medium bg-gradient-cyan overflow-hidden rounded-10">
            <div className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0 bg-gradient-cyan" />
            <div className="px-5 py-2 bg-gray-900 rounded-lg">
              <p className="relative z-10">Start Free Trial</p>
            </div>
          </button>
        </div>
        <div className="w-auto lg:hidden">
          <a href="#">
            <svg
              className="text-gray-800 navbar-burger"
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
      </div>
    </div>
  );
}

export function Container({ children }) {
  return (
    <section className="sticky top-0 overflow-hidden">
      <div className="sticky top-0 flex justify-between px-8 py-5 top-0items-center backdrop-blur-sm">
        {children}
      </div>
    </section>
  );
}

export default function NavBar(props: NavBarProps) {
  
  const { favicon, links, cta } = props;

  return (
    <Container>
      <Favicon {...favicon} />
      <Links {...links} />
      <CallToAction {...cta} />
    </Container>
  );
}
