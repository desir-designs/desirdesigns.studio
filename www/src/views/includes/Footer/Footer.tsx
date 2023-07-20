import type { FooterProps } from "@typings/index";

export function Header() {
  return (
    <div className="flex flex-wrap -m-6 lg:items-center">
      <div className="w-full p-6 md:w-auto">
        <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
      </div>
      <div className="w-full p-6 md:w-1/2">
        <ul className="flex flex-wrap -m-5">
          <li className="p-5">
            <a
              className="text-base text-white font-heading hover:text-gray-200"
              href="#"
            >
              Features
            </a>
          </li>
          <li className="p-5">
            <a
              className="text-base text-white font-heading hover:text-gray-200"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li className="p-5">
            <a
              className="text-base text-white font-heading hover:text-gray-200"
              href="#"
            >
              Affiliate Program
            </a>
          </li>
          <li className="p-5">
            <a
              className="text-base text-white font-heading hover:text-gray-200"
              href="#"
            >
              Press Kit
            </a>
          </li>
        </ul>
      </div>
      <div className="w-auto p-6 md:ml-auto">
        <div className="flex flex-wrap items-center -m-1.5">
          <div className="w-auto p-1.5">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-auto p-1.5">
            <h3 className="text-base font-medium text-white font-heading">
              info@gradia.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BorderLine() {
  return (
    <div className="py-9">
      <div className="border-b border-gray-800" />
    </div>
  );
}

export function Bottom() {
  return (
    <div className="flex flex-wrap items-center justify-between -m-6">
      <div className="w-auto p-6">
        <p className="text-sm text-gray-300">
          © Copyright 2022. All Rights Reserved by Gradia.
        </p>
      </div>
      <div className="w-auto p-6">
        <div className="flex flex-wrap -m-6">
          <div className="w-auto p-6">
            <a className="text-sm text-gray-300 hover:text-gray-400" href="#">
              Privacy Policy
            </a>
          </div>
          <div className="w-auto p-6">
            <a className="text-sm text-gray-300 hover:text-gray-400" href="#">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Container({ children }) {
  return (
    <section className="py-16 overflow-hidden bg-black">
      <div className="container px-4 mx-auto">{children}</div>
    </section>
  );
}

export default function Footer(props: FooterProps) {
  
  const { favicon, links, cta } = props;

  return (
    <Container>
      <Header />
      <BorderLine />
      <Bottom />
    </Container>
  );
}
