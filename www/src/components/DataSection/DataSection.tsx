export type DataSectionProps = {
  title?: string;
};
export default function DataSection(props: any) {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-6">
          <div className="w-full p-6 md:w-1/2">
            <div className="max-w-lg">
              <h2 className="mb-5 text-6xl font-bold text-white font-heading sm:text-7xl">
                Try Gradia for Free
              </h2>
              <p className="text-base text-gray-400 mb-11">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <ul>
                <li className="flex items-center mb-5 text-base text-white">
                  <svg
                    className="mr-2.5"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={9} cy={9} r="8.5" stroke="white" />
                    <path
                      d="M5.5 9.5L7.5 11.5L12.5 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>100GB Cloud Storage</p>
                </li>
                <li className="flex items-center mb-5 text-base text-white">
                  <svg
                    className="mr-2.5"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={9} cy={9} r="8.5" stroke="white" />
                    <path
                      d="M5.5 9.5L7.5 11.5L12.5 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>1 Website</p>
                </li>
                <li className="flex items-center mb-5 text-base text-white">
                  <svg
                    className="mr-2.5"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={9} cy={9} r="8.5" stroke="white" />
                    <path
                      d="M5.5 9.5L7.5 11.5L12.5 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Real-time Analytics</p>
                </li>
                <li className="flex items-center mb-5 text-base text-white">
                  <svg
                    className="mr-2.5"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={9} cy={9} r="8.5" stroke="white" />
                    <path
                      d="M5.5 9.5L7.5 11.5L12.5 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Premium Support</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2">
            <div className="ml-auto md:max-w-lg">
              <a href="#">
                <div className="p-px mb-5 rounded-md bg-gradient-cyan">
                  <div className="p-4 bg-gray-900 rounded-md">
                    <div className="flex flex-wrap justify-between -m-3">
                      <div className="w-auto p-3">
                        <div className="flex flex-wrap items-center -m-3">
                          <div className="w-auto p-3">
                            <img
                              src="gradia-assets/elements/pricing/checkbox-white.svg"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-3">
                            <h3 className="mb-1 text-xl font-medium text-white font-heading">
                              Annual - 2 months free
                            </h3>
                            <p className="text-base text-gray-400">
                              $99/year, that’s $8.49/month only
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-auto p-3">
                        <p className="font-heading px-3 py-1.5 font-semibold text-xs text-gray-300 bg-gray-800 tracking-px uppercase rounded-full">
                          Best value
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="p-4 mb-5 bg-black border border-gray-800 rounded-md">
                  <div className="flex flex-wrap justify-between -m-3">
                    <div className="w-auto p-3">
                      <div className="flex flex-wrap items-center -m-3">
                        <div className="w-auto p-3">
                          <img
                            src="gradia-assets/elements/pricing/checkbox-black.svg"
                            alt=""
                          />
                        </div>
                        <div className="w-auto p-3">
                          <h3 className="mb-1 text-xl font-medium text-white font-heading">
                            Monthly - 1st week free
                          </h3>
                          <p className="text-base text-gray-400">
                            $12/month only
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="relative group">
                <div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-out rounded-lg opacity-0 bg-gradient-green group-hover:opacity-50" />
                <button className="w-full p-1 overflow-hidden text-xs font-semibold text-gray-900 uppercase rounded-md font-heading tracking-px">
                  <div className="relative py-5 overflow-hidden rounded-md px-9 bg-gradient-green">
                    <div className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full bg-white group-hover:-translate-y-0" />
                    <p className="relative z-10">Try for free</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
