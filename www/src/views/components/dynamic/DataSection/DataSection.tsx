export default function DataSection(props) {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -m-6">
          <div className="w-full md:w-1/2 p-6">
            <div className="max-w-lg">
              <h2 className="mb-5 font-heading font-bold text-6xl sm:text-7xl text-white">
                Try Gradia for Free
              </h2>
              <p className="mb-11 text-gray-400 text-base">
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
          <div className="w-full md:w-1/2 p-6">
            <div className="md:max-w-lg ml-auto">
              <a href="#">
                <div className="mb-5 p-px bg-gradient-cyan rounded-md">
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
                            <h3 className="mb-1 font-heading font-medium text-white text-xl">
                              Annual - 2 months free
                            </h3>
                            <p className="text-gray-400 text-base">
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
                <div className="mb-5 p-4 bg-black border border-gray-800 rounded-md">
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
                          <h3 className="mb-1 font-heading font-medium text-white text-xl">
                            Monthly - 1st week free
                          </h3>
                          <p className="text-gray-400 text-base">
                            $12/month only
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="group relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300" />
                <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                  <div className="relative px-9 py-5 bg-gradient-green overflow-hidden rounded-md">
                    <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
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
