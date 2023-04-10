import { SocialIcon } from "react-social-icons";

export type SocialProps = {
  url?: string;
};

export type HeroProps = {
  media: Node;
  socials?: Array<SocialProps>;
};

export const defaultProps = {
  socials: [
    {
      url: "https://facebook.com",
    },
    {
      url: "https://twitter.com",
    },
      {
      url: "https://twitter.com",
    },
  ],
};
export default function Hero(props: HeroProps) {

  
  const Socials = () => (
    <aside className="group hover:border-white transition-all duration-500 hover:shadow-sm shadow-black flex flex-col gap-1 fixed top-1/4 left-0 ml-4 z-50 bg-black p-2 bg-opacity-10 backdrop-blur-sm rounded-full">
      {props?.socials?.map((social, index) => (
        <SocialIcon url={social?.url ?? `${index}: Not Found`} />
      )) ??
        defaultProps.socials.map((social, index) => (
          <SocialIcon url={`${social?.url}`} />
        ))}
    </aside>
  );

  return (
    <section className="bg-gradient-fuchsia background-animate overflow-hidden">
      <Socials />
      <div className="relative container mx-auto px-4">
        <div className="relative z-10 flex flex-wrap justify-center items-center -m-6 pb-36">
          <div className="w-full lg:w-auto p-6 self-start">
            <img
              className="xl:relative xl:-top-20 mx-auto"
              src="gradia-assets/images/hero/avatar-message.png"
              alt=""
            />
          </div>
          <div className="flex-1 p-6">
            <div className="lg:max-w-4xl mx-auto justify-center items-center">
              <div className="mb-6 font-heading flex items-center max-w-max mx-auto px-5 py-2.5 uppercase font-semibold text-xs tracking-px text-white bg-white bg-opacity-20 rounded-lg">
                <svg
                  className="mr-2"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33427 2.74895C6.54382 2.10403 7.45621 2.10403 7.66575 2.74895L8.41445 5.0532C8.50816 5.34162 8.77693 5.53689 9.08019 5.53689H11.503C12.1811 5.53689 12.4631 6.40462 11.9145 6.8032L9.95436 8.22731C9.70902 8.40556 9.60636 8.72152 9.70007 9.00994L10.4488 11.3142C10.6583 11.9591 9.92018 12.4954 9.37158 12.0968L7.41146 10.6727C7.16612 10.4945 6.8339 10.4945 6.58856 10.6727L4.62844 12.0968C4.07985 12.4954 3.34171 11.9591 3.55126 11.3142L4.29995 9.00994C4.39367 8.72152 4.29101 8.40556 4.04566 8.22731L2.08555 6.8032C1.53695 6.40462 1.81889 5.53689 2.497 5.53689H4.91984C5.22309 5.53689 5.49186 5.34162 5.58558 5.0532L6.33427 2.74895Z"
                    fill="white"
                  />
                </svg>
                <h3 className="font-sans text-black">Creative Direcor</h3>
              </div>
              <img
                className="object-fit h-96 self-center mx-auto"
                src="/assets/images/logo-transparent.png"
              />

              <p className="mb-10 font-medium text-xl text-center text-white">
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat.
              </p>
              <button className="group mb-9 relative flex items-center justify-center font-heading px-24 py-5 mx-auto w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md">
                <div className="absolute transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-fuchsia" />
                <p className="relative z-10 mr-2">Get started now</p>
                <svg
                  className="relative z-10"
                  width={19}
                  height={18}
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.49999 16.2C13.4764 16.2 16.7 12.9764 16.7 8.99999C16.7 5.02354 13.4764 1.79999 9.49999 1.79999C5.52354 1.79999 2.29999 5.02354 2.29999 8.99999C2.29999 12.9764 5.52354 16.2 9.49999 16.2ZM12.8364 8.36359L10.1364 5.66359C9.78491 5.31212 9.21506 5.31212 8.86359 5.66359C8.51212 6.01506 8.51212 6.58491 8.86359 6.93638L10.0272 8.09999L6.79999 8.09999C6.30293 8.09999 5.89999 8.50293 5.89999 8.99999C5.89999 9.49704 6.30293 9.89999 6.79999 9.89999H10.0272L8.86359 11.0636C8.51212 11.4151 8.51212 11.9849 8.86359 12.3364C9.21506 12.6879 9.78491 12.6879 10.1364 12.3364L12.8364 9.63638C13.1879 9.28491 13.1879 8.71506 12.8364 8.36359Z"
                    fill="white"
                  />
                </svg>
              </button>
              <ul className="flex justify-center">
                <li className="flex items-center mr-6">
                  <svg
                    className="mr-2"
                    width={19}
                    height={19}
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.95831 10.2917L7.12498 13.4584L15.0416 5.54169"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-heading text-white text-base">
                    No credit card required
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2"
                    width={19}
                    height={19}
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.95831 10.2917L7.12498 13.4584L15.0416 5.54169"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-heading text-white text-base">
                    Cancel anytime
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-auto p-6 self-end">
            <img
              className="xl:relative xl:-bottom-10 mx-auto"
              src="gradia-assets/images/hero/avatar-message2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
