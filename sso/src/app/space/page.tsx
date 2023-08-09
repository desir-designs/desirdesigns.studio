export default function SpacePage() {
    return(
        <div className="mx-auto lg:ml-80">
        <section>
          <nav className="relative flex items-center justify-between p-8  mb-3">
            <div className="w-full xl:w-auto px-2">
              <div className="flex items-center justify-between">
                <a className="inline-flex items-center h-8" href="#">
                  <img src="trizzle-assets/logos/trizzle-logo.svg" alt="" />
                </a>
                <div className="xl:hidden">
                  <button className="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                    <svg
                      width={20}
                      height={12}
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Mobile menu</title>
                      <path
                        d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden xl:inline-flex h-14 p-3 items-center w-full max-w-sm xl:max-w-md bg-gray-700 border border-gray-400 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a
                  className="inline-block text-gray-400 hover:text-gray-300"
                  href="#"
                >
                  <svg
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <input
                  className="pl-3 bg-transparent text-gray-100 placeholder-gray-400 outline-none"
                  id="horizontalNavInput6-1"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="hidden xl:block w-full md:w-auto px-2">
              <div className="flex flex-wrap items-center -mb-2">
                <a
                  className="inline-block mb-2 mr-6 text-gray-400 hover:text-gray-300"
                  href="#"
                >
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block mb-2 mr-8 text-gray-400 hover:text-gray-300"
                  href="#"
                >
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="group inline-flex mb-2 items-center" href="#">
                  <img
                    className="h-8 w-8 mr-3 rounded-full object-cover"
                    src="trizzle-assets/images/avatar-men.png"
                    alt=""
                  />
                  <h4 className="text-white font-extrabold tracking-wide mr-4">
                    John Doe
                  </h4>
                  <span className="text-gray-400 group-hover:text-gray-300">
                    <svg
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </nav>
         
        </section>
        <section className="py-3">
          <div className="container px-4 mx-auto">
            <div className="relative pt-12 lg:py-18 px-8 md:px-18 rounded-2xl overflow-hidden">
              <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="trizzle-assets/images/banner-background.png"
                alt=""
              />
              <div className="relative max-w-sm mx-auto lg:mx-0 mb-16 lg:mb-0">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Ideal banner asset for your dashboard project
                </h3>
                <p className="font-medium text-blue-200 mb-6">
                  Go global with our UI Resources and solutions
                </p>
                <a
                  className="inline-block w-full sm:w-auto px-6 md:px-18 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <img
                className="hidden lg:block absolute bottom-0 right-0 lg:max-w-lg xl:max-w-2xl xl:mr-18"
                src="trizzle-assets/images/banner-placeholder-dashboard.png"
                alt=""
              />
              <img
                className="relative lg:hidden block mx-auto"
                src="trizzle-assets/images/banner-placeholder-dashboard.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
            <section className="py-3">
              <div className="container px-4 mx-auto">
                <a
                  className="block p-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200"
                  href="#"
                >
                  <h4 className="text-white font-semibold leading-6 mb-1">
                    Shuffle Improvements
                  </h4>
                  <div className="flex items-center mb-4">
                    <span className="h-2 w-2 mr-1 bg-green-500 rounded-full" />
                    <span className="text-xs font-medium text-green-500">
                      Planning
                    </span>
                  </div>
                  <img
                    className="block w-full h-28 object-cover rounded-md mb-3"
                    src="trizzle-assets/images/laptop-photo-placeholder.png"
                    alt=""
                  />
                  <p className="text-xs text-gray-300 mb-4">
                    This is an example task that can be used within a Kanban
                    system.
                  </p>
                  <div className="pt-4 border-t border-gray-500">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <div className="flex items-center p-2 bg-gray-500 rounded-md">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.66675 1V3.66667"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.3335 1V3.66667"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.66675 6.33337H12.3334"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.3335 9H7.00016"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 9V11"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="ml-2 text-xs font-medium text-gray-200">
                            Jul 05
                          </span>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex h-full items-center">
                          <img
                            className="w-7 h-7 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-women-circle-border.png"
                            alt=""
                          />
                          <img
                            className="w-7 h-7 -ml-3 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-men-2-circle-border.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
            <section className="py-3">
              <div className="container px-4 mx-auto">
                <a
                  className="block p-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200"
                  href="#"
                >
                  <h4 className="text-white font-semibold leading-6 mb-1">
                    Shuffle Improvements
                  </h4>
                  <div className="flex items-center mb-4">
                    <span className="h-2 w-2 mr-1 bg-green-500 rounded-full" />
                    <span className="text-xs font-medium text-green-500">
                      Planning
                    </span>
                  </div>
                  <img
                    className="block w-full h-28 object-cover rounded-md mb-3"
                    src="trizzle-assets/images/laptop-photo-placeholder.png"
                    alt=""
                  />
                  <p className="text-xs text-gray-300 mb-4">
                    This is an example task that can be used within a Kanban
                    system.
                  </p>
                  <div className="pt-4 border-t border-gray-500">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <div className="flex items-center p-2 bg-gray-500 rounded-md">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.66675 1V3.66667"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.3335 1V3.66667"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.66675 6.33337H12.3334"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.3335 9H7.00016"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 9V11"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="ml-2 text-xs font-medium text-gray-200">
                            Jul 05
                          </span>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex h-full items-center">
                          <img
                            className="w-7 h-7 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-women-circle-border.png"
                            alt=""
                          />
                          <img
                            className="w-7 h-7 -ml-3 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-men-2-circle-border.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
            <section className="py-3">
              <div className="container px-4 mx-auto">
                <a
                  className="block p-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200"
                  href="#"
                >
                  <h4 className="text-white font-semibold leading-6 mb-1">
                    Shuffle Improvements
                  </h4>
                  <div className="flex items-center mb-4">
                    <span className="h-2 w-2 mr-1 bg-green-500 rounded-full" />
                    <span className="text-xs font-medium text-green-500">
                      Planning
                    </span>
                  </div>
                  <img
                    className="block w-full h-28 object-cover rounded-md mb-3"
                    src="trizzle-assets/images/laptop-photo-placeholder.png"
                    alt=""
                  />
                  <p className="text-xs text-gray-300 mb-4">
                    This is an example task that can be used within a Kanban
                    system.
                  </p>
                  <div className="pt-4 border-t border-gray-500">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <div className="flex items-center p-2 bg-gray-500 rounded-md">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.66675 1V3.66667"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.3335 1V3.66667"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.66675 6.33337H12.3334"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.3335 9H7.00016"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 9V11"
                              stroke="#3D485B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="ml-2 text-xs font-medium text-gray-200">
                            Jul 05
                          </span>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex h-full items-center">
                          <img
                            className="w-7 h-7 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-women-circle-border.png"
                            alt=""
                          />
                          <img
                            className="w-7 h-7 -ml-3 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-men-2-circle-border.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
        <section className="py-3">
          <div className="container px-4 mx-auto">
            <div className="mb-6">
              <div className="flex flex-wrap items-center -mx-3 -mb-6">
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                  <div className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 20H1C0.734784 20 0.48043 20.1054 0.292893 20.2929C0.105357 20.4804 0 20.7348 0 21C0 21.2652 0.105357 21.5196 0.292893 21.7071C0.48043 21.8946 0.734784 22 1 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20ZM5 6C4.80222 6 4.60888 6.05865 4.44443 6.16853C4.27998 6.27841 4.15181 6.43459 4.07612 6.61732C4.00043 6.80004 3.98063 7.00111 4.01921 7.19509C4.0578 7.38907 4.15304 7.56725 4.29289 7.70711C4.43275 7.84696 4.61093 7.9422 4.80491 7.98079C4.99889 8.01937 5.19996 7.99957 5.38268 7.92388C5.56541 7.84819 5.72159 7.72002 5.83147 7.55557C5.94135 7.39112 6 7.19778 6 7C6 6.73478 5.89464 6.48043 5.70711 6.29289C5.51957 6.10536 5.26522 6 5 6ZM19 0H3C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V11C0 11.7956 0.31607 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H19C19.7956 14 20.5587 13.6839 21.1213 13.1213C21.6839 12.5587 22 11.7956 22 11V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.31607 19.7956 0 19 0ZM20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V11ZM11 4C10.4067 4 9.82664 4.17595 9.33329 4.50559C8.83994 4.83524 8.45542 5.30377 8.22836 5.85195C8.0013 6.40013 7.94189 7.00333 8.05764 7.58527C8.1734 8.16721 8.45912 8.70176 8.87868 9.12132C9.29824 9.54088 9.83279 9.8266 10.4147 9.94236C10.9967 10.0581 11.5999 9.9987 12.1481 9.77164C12.6962 9.54458 13.1648 9.16006 13.4944 8.66671C13.8241 8.17336 14 7.59334 14 7C14 6.20435 13.6839 5.44129 13.1213 4.87868C12.5587 4.31607 11.7956 4 11 4ZM11 8C10.8022 8 10.6089 7.94135 10.4444 7.83147C10.28 7.72159 10.1518 7.56541 10.0761 7.38268C10.0004 7.19996 9.98063 6.99889 10.0192 6.80491C10.0578 6.61093 10.153 6.43275 10.2929 6.29289C10.4327 6.15304 10.6109 6.0578 10.8049 6.01921C10.9989 5.98063 11.2 6.00043 11.3827 6.07612C11.5654 6.15181 11.7216 6.27998 11.8315 6.44443C11.9414 6.60888 12 6.80222 12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8ZM17 6C16.8022 6 16.6089 6.05865 16.4444 6.16853C16.28 6.27841 16.1518 6.43459 16.0761 6.61732C16.0004 6.80004 15.9806 7.00111 16.0192 7.19509C16.0578 7.38907 16.153 7.56725 16.2929 7.70711C16.4327 7.84696 16.6109 7.9422 16.8049 7.98079C16.9989 8.01937 17.2 7.99957 17.3827 7.92388C17.5654 7.84819 17.7216 7.72002 17.8315 7.55557C17.9414 7.39112 18 7.19778 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6Z"
                              fill="#194BFB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <h5 className="text-xs text-gray-300 leading-5 font-semibold">
                          Value
                        </h5>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <span className="text-2xl leading-none text-gray-100 font-semibold">
                              3.500
                            </span>
                          </div>
                          <div className="w-auto p-1">
                            <span className="relative bottom-0.5 inline-block py-1 px-2 text-xs text-green-500 font-medium bg-teal-900 rounded-full">
                              1,0%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                  <div className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                          <svg
                            width={22}
                            height={18}
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z"
                              fill="#194BFB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <h5 className="text-xs text-gray-300 leading-5 font-semibold">
                          Clients
                        </h5>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <span className="text-2xl leading-none text-gray-100 font-semibold">
                              245
                            </span>
                          </div>
                          <div className="w-auto p-1">
                            <span className="relative bottom-0.5 inline-block py-1 px-2 text-xs text-red-500 font-medium bg-red-900 rounded-full">
                              -6,25%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                  <div className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                          <svg
                            width={20}
                            height={16}
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 5.50001H16.68L15.43 2.38001C15.2068 1.82527 14.8228 1.3499 14.3275 1.01492C13.8321 0.679935 13.248 0.500629 12.65 0.500012H6.65C5.95529 0.498024 5.28142 0.737203 4.74342 1.17673C4.20541 1.61625 3.83662 2.22886 3.7 2.91001L3.18 5.50001H3C2.20435 5.50001 1.44129 5.81608 0.87868 6.37869C0.316071 6.9413 0 7.70436 0 8.50001V11.5C0 11.7652 0.105357 12.0196 0.292893 12.2071C0.48043 12.3947 0.734784 12.5 1 12.5H2C2 13.2957 2.31607 14.0587 2.87868 14.6213C3.44129 15.1839 4.20435 15.5 5 15.5C5.79565 15.5 6.55871 15.1839 7.12132 14.6213C7.68393 14.0587 8 13.2957 8 12.5H12C12 13.2957 12.3161 14.0587 12.8787 14.6213C13.4413 15.1839 14.2044 15.5 15 15.5C15.7956 15.5 16.5587 15.1839 17.1213 14.6213C17.6839 14.0587 18 13.2957 18 12.5H19C19.2652 12.5 19.5196 12.3947 19.7071 12.2071C19.8946 12.0196 20 11.7652 20 11.5V8.50001C20 7.70436 19.6839 6.9413 19.1213 6.37869C18.5587 5.81608 17.7956 5.50001 17 5.50001ZM11 2.50001H12.65C12.8486 2.50181 13.0421 2.56269 13.206 2.67488C13.3698 2.78708 13.4965 2.94552 13.57 3.13001L14.52 5.50001H11V2.50001ZM5.66 3.30001C5.70675 3.07074 5.83242 2.86511 6.01514 2.71894C6.19786 2.57277 6.42605 2.49529 6.66 2.50001H9V5.50001H5.22L5.66 3.30001ZM5 13.5C4.80222 13.5 4.60888 13.4414 4.44443 13.3315C4.27998 13.2216 4.15181 13.0654 4.07612 12.8827C4.00043 12.7 3.98063 12.4989 4.01921 12.3049C4.0578 12.1109 4.15304 11.9328 4.29289 11.7929C4.43275 11.6531 4.61093 11.5578 4.80491 11.5192C4.99889 11.4806 5.19996 11.5004 5.38268 11.5761C5.56541 11.6518 5.72159 11.78 5.83147 11.9444C5.94135 12.1089 6 12.3022 6 12.5C6 12.7652 5.89464 13.0196 5.70711 13.2071C5.51957 13.3947 5.26522 13.5 5 13.5ZM15 13.5C14.8022 13.5 14.6089 13.4414 14.4444 13.3315C14.28 13.2216 14.1518 13.0654 14.0761 12.8827C14.0004 12.7 13.9806 12.4989 14.0192 12.3049C14.0578 12.1109 14.153 11.9328 14.2929 11.7929C14.4327 11.6531 14.6109 11.5578 14.8049 11.5192C14.9989 11.4806 15.2 11.5004 15.3827 11.5761C15.5654 11.6518 15.7216 11.78 15.8315 11.9444C15.9414 12.1089 16 12.3022 16 12.5C16 12.7652 15.8946 13.0196 15.7071 13.2071C15.5196 13.3947 15.2652 13.5 15 13.5ZM18 10.5H17.22C16.9388 10.1907 16.5961 9.94348 16.2138 9.77434C15.8315 9.6052 15.418 9.51783 15 9.51783C14.582 9.51783 14.1685 9.6052 13.7862 9.77434C13.4039 9.94348 13.0612 10.1907 12.78 10.5H7.22C6.93882 10.1907 6.59609 9.94348 6.21378 9.77434C5.83148 9.6052 5.41805 9.51783 5 9.51783C4.58195 9.51783 4.16852 9.6052 3.78622 9.77434C3.40391 9.94348 3.06118 10.1907 2.78 10.5H2V8.50001C2 8.2348 2.10536 7.98044 2.29289 7.79291C2.48043 7.60537 2.73478 7.50001 3 7.50001H17C17.2652 7.50001 17.5196 7.60537 17.7071 7.79291C17.8946 7.98044 18 8.2348 18 8.50001V10.5Z"
                              fill="#194BFB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <h5 className="text-xs text-gray-300 leading-5 font-semibold">
                          Deliveries
                        </h5>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <span className="text-2xl leading-none text-gray-100 font-semibold">
                              16.5K
                            </span>
                          </div>
                          <div className="w-auto p-1">
                            <span className="relative bottom-0.5 inline-block py-1 px-2 text-xs text-green-500 font-medium bg-teal-900 rounded-full">
                              1,0%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                  <div className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 7C9.40666 7 8.82664 7.17595 8.33329 7.50559C7.83994 7.83524 7.45542 8.30377 7.22836 8.85195C7.0013 9.40013 6.94189 10.0033 7.05764 10.5853C7.1734 11.1672 7.45912 11.7018 7.87868 12.1213C8.29824 12.5409 8.83279 12.8266 9.41473 12.9424C9.99667 13.0581 10.5999 12.9987 11.1481 12.7716C11.6962 12.5446 12.1648 12.1601 12.4944 11.6667C12.8241 11.1734 13 10.5933 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM10 11C9.80222 11 9.60888 10.9414 9.44443 10.8315C9.27998 10.7216 9.15181 10.5654 9.07612 10.3827C9.00043 10.2 8.98063 9.99889 9.01921 9.80491C9.0578 9.61093 9.15304 9.43275 9.29289 9.29289C9.43275 9.15304 9.61093 9.0578 9.80491 9.01921C9.99889 8.98063 10.2 9.00043 10.3827 9.07612C10.5654 9.15181 10.7216 9.27998 10.8315 9.44443C10.9414 9.60888 11 9.80222 11 10C11 10.2652 10.8946 10.5196 10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11ZM19 9H17.93C17.7068 7.23998 16.9049 5.60408 15.6504 4.34959C14.3959 3.0951 12.76 2.29319 11 2.07V1C11 0.734784 10.8946 0.48043 10.7071 0.292893C10.5196 0.105357 10.2652 0 10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V2.07C7.23998 2.29319 5.60408 3.0951 4.34959 4.34959C3.0951 5.60408 2.29319 7.23998 2.07 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H2.07C2.29319 12.76 3.0951 14.3959 4.34959 15.6504C5.60408 16.9049 7.23998 17.7068 9 17.93V19C9 19.2652 9.10536 19.5196 9.29289 19.7071C9.48043 19.8946 9.73478 20 10 20C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V17.93C12.76 17.7068 14.3959 16.9049 15.6504 15.6504C16.9049 14.3959 17.7068 12.76 17.93 11H19C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5196 9.10536 19.2652 9 19 9ZM10 16C8.81331 16 7.65327 15.6481 6.66658 14.9888C5.67988 14.3295 4.91085 13.3925 4.45672 12.2961C4.0026 11.1997 3.88378 9.99334 4.11529 8.82946C4.3468 7.66557 4.91824 6.59647 5.75736 5.75736C6.59647 4.91824 7.66557 4.3468 8.82946 4.11529C9.99334 3.88378 11.1997 4.0026 12.2961 4.45672C13.3925 4.91085 14.3295 5.67988 14.9888 6.66658C15.6481 7.65327 16 8.81331 16 10C16 11.5913 15.3679 13.1174 14.2426 14.2426C13.1174 15.3679 11.5913 16 10 16Z"
                              fill="#194BFB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <h5 className="text-xs text-gray-300 leading-5 font-semibold">
                          Target ratio
                        </h5>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <span className="text-2xl leading-none text-gray-100 font-semibold">
                              88%
                            </span>
                          </div>
                          <div className="w-auto p-1">
                            <span className="relative bottom-0.5 inline-block py-1 px-2 text-xs text-green-500 font-medium bg-teal-900 rounded-full">
                              1,0%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex flex-wrap -mx-3 -mb-6">
                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                  <div className="h-full max-w-sm mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-shrink-0 w-12 h-12 mb-4 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 3.50002H10.72L10.4 2.50002C10.1926 1.91325 9.80775 1.40553 9.2989 1.04718C8.79005 0.688841 8.18236 0.497623 7.56 0.500022H3C2.20435 0.500022 1.44129 0.816093 0.87868 1.3787C0.316071 1.94131 0 2.70437 0 3.50002V16.5C0 17.2957 0.316071 18.0587 0.87868 18.6213C1.44129 19.184 2.20435 19.5 3 19.5H17C17.7956 19.5 18.5587 19.184 19.1213 18.6213C19.6839 18.0587 20 17.2957 20 16.5V6.50002C20 5.70437 19.6839 4.94131 19.1213 4.3787C18.5587 3.81609 17.7956 3.50002 17 3.50002ZM18 16.5C18 16.7652 17.8946 17.0196 17.7071 17.2071C17.5196 17.3947 17.2652 17.5 17 17.5H3C2.73478 17.5 2.48043 17.3947 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V3.50002C2 3.23481 2.10536 2.98045 2.29289 2.79292C2.48043 2.60538 2.73478 2.50002 3 2.50002H7.56C7.76964 2.49948 7.97416 2.56484 8.14463 2.68686C8.3151 2.80889 8.44291 2.9814 8.51 3.18002L9.05 4.82002C9.11709 5.01864 9.2449 5.19116 9.41537 5.31318C9.58584 5.4352 9.79036 5.50056 10 5.50002H17C17.2652 5.50002 17.5196 5.60538 17.7071 5.79292C17.8946 5.98045 18 6.23481 18 6.50002V16.5Z"
                          fill="#194BFB"
                        />
                      </svg>
                    </div>
                    <h5 className="text-lg text-gray-100 font-semibold mb-8">
                      Drive Storage
                    </h5>
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-xs text-blue-500 font-semibold">
                        45 GB
                      </span>
                      <span className="text-xs text-gray-300 font-semibold">
                        100 GB
                      </span>
                    </div>
                    <div className="relative py-1 bg-gray-700 rounded-full">
                      <div className="absolute top-0 left-0 h-full w-2/3 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                  <div className="relative h-full max-w-sm mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-wrap items-center justify-between mb-4 -m-2">
                      <div className="w-auto p-2">
                        <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                          <svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8V5C8 5.79565 8.31607 6.55871 8.87868 7.12132C9.44129 7.68393 10.2044 8 11 8H14V9C14 9.26522 14.1054 9.51957 14.2929 9.70711C14.4804 9.89464 14.7348 10 15 10C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9V7C16 7 16 7 16 6.94C15.9896 6.84813 15.9695 6.75763 15.94 6.67V6.58C15.8919 6.47718 15.8278 6.38267 15.75 6.3L9.75 0.3C9.66734 0.222216 9.57282 0.158081 9.47 0.11C9.44015 0.10576 9.40985 0.10576 9.38 0.11C9.27841 0.0517412 9.16622 0.0143442 9.05 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19C11 18.7348 10.8946 18.4804 10.7071 18.2929C10.5196 18.1054 10.2652 18 10 18ZM10 3.41L12.59 6H11C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1054 5.51957 10 5.26522 10 5V3.41ZM5 6C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H6C6.26522 8 6.51957 7.89464 6.70711 7.70711C6.89464 7.51957 7 7.26522 7 7C7 6.73478 6.89464 6.48043 6.70711 6.29289C6.51957 6.10536 6.26522 6 6 6H5ZM19.71 18.29L18.54 17.13C18.914 16.4773 19.0636 15.7199 18.9661 14.974C18.8686 14.2281 18.5292 13.5347 18 13C17.513 12.4957 16.8854 12.1497 16.199 12.0071C15.5126 11.8646 14.7992 11.9321 14.1517 12.2008C13.5041 12.4695 12.9526 12.927 12.5688 13.5137C12.185 14.1004 11.9868 14.7891 12 15.49C11.9966 16.0932 12.1509 16.6868 12.4476 17.2119C12.7444 17.7371 13.1733 18.1755 13.6917 18.4838C14.2102 18.7921 14.8003 18.9594 15.4034 18.9693C16.0065 18.9791 16.6017 18.8311 17.13 18.54L18.29 19.71C18.383 19.8037 18.4936 19.8781 18.6154 19.9289C18.7373 19.9797 18.868 20.0058 19 20.0058C19.132 20.0058 19.2627 19.9797 19.3846 19.9289C19.5064 19.8781 19.617 19.8037 19.71 19.71C19.8037 19.617 19.8781 19.5064 19.9289 19.3846C19.9797 19.2627 20.0058 19.132 20.0058 19C20.0058 18.868 19.9797 18.7373 19.9289 18.6154C19.8781 18.4936 19.8037 18.383 19.71 18.29ZM16.54 16.54C16.2544 16.8086 15.8771 16.9581 15.485 16.9581C15.0929 16.9581 14.7156 16.8086 14.43 16.54C14.1547 16.2598 14.0003 15.8828 14 15.49C13.9979 15.2928 14.0359 15.0971 14.1115 14.915C14.1871 14.7328 14.2989 14.5678 14.44 14.43C14.7066 14.1648 15.0641 14.0111 15.44 14C15.6422 13.9876 15.8447 14.0171 16.035 14.0866C16.2252 14.1562 16.399 14.2643 16.5455 14.4042C16.692 14.5441 16.808 14.7128 16.8862 14.8996C16.9644 15.0865 17.0031 15.2875 17 15.49C16.9917 15.8871 16.8263 16.2647 16.54 16.54ZM11 10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10ZM9 16C9.26522 16 9.51957 15.8946 9.70711 15.7071C9.89464 15.5196 10 15.2652 10 15C10 14.7348 9.89464 14.4804 9.70711 14.2929C9.51957 14.1054 9.26522 14 9 14H5C4.73478 14 4.48043 14.1054 4.29289 14.2929C4.10536 14.4804 4 14.7348 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H9Z"
                              fill="#194BFB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex">
                          <img
                            className="w-7 h-7 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-women-circle-border.png"
                            alt=""
                          />
                          <img
                            className="w-7 h-7 -ml-2 rounded-full object-cover"
                            src="trizzle-assets/images/avatar-men-circle-border.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <h5 className="text-lg text-gray-100 font-semibold mb-12">
                      Research
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300 font-semibold">
                        10 Files
                      </span>
                      <span className="text-sm text-gray-300 font-semibold">
                        5 GB
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/4 px-3 mb-6">
                  <div className="relative h-full max-w-sm md:max-w-none mx-auto p-6 bg-gray-500 rounded-xl">
                    <div className="flex flex-wrap items-center justify-between -mx-2">
                      <div className="w-full md:w-1/2 px-2 mb-12 md:mb-0">
                        <div className="max-w-xxs pr-12">
                          <div className="flex flex-shrink-0 w-12 h-12 mb-9 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 12.86V12.81C19.9879 12.6169 19.9544 12.4257 19.9 12.24L18.26 2.51003C18.1428 1.80198 17.7757 1.15939 17.2253 0.698869C16.6749 0.238344 15.9776 -0.00960096 15.26 2.60161e-05H4.69C3.98097 0.00232221 3.29566 0.255676 2.75565 0.715148C2.21563 1.17462 1.85581 1.81051 1.74 2.51003L0.12 12.22C0.0656405 12.4057 0.0321011 12.5969 0.02 12.79V12.84C-1.86265e-08 12.91 0 13 0 13V17C0 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.684 2.20435 20 3 20H17C17.7956 20 18.5587 19.684 19.1213 19.1213C19.6839 18.5587 20 17.7957 20 17V13C20 13 20 12.91 20 12.86ZM3.71 2.83003C3.75048 2.59523 3.87346 2.38261 4.05679 2.23044C4.24013 2.07827 4.47177 1.99656 4.71 2.00003H15.31C15.5482 1.99656 15.7799 2.07827 15.9632 2.23044C16.1465 2.38261 16.2695 2.59523 16.31 2.83003L17.51 10.05C17.342 10.0168 17.1712 10.0001 17 10H3C2.83546 10.0013 2.67141 10.0181 2.51 10.05L3.71 2.83003ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8947 17.2652 18 17 18H3C2.73478 18 2.48043 17.8947 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V13.08L2.08 12.62C2.15502 12.4374 2.28242 12.2811 2.44614 12.1707C2.60986 12.0604 2.80257 12.001 3 12H17C17.1974 12.001 17.3901 12.0604 17.5539 12.1707C17.7176 12.2811 17.845 12.4374 17.92 12.62L18 13.08V17ZM15 14C14.8022 14 14.6089 14.0587 14.4444 14.1686C14.28 14.2784 14.1518 14.4346 14.0761 14.6173C14.0004 14.8001 13.9806 15.0011 14.0192 15.1951C14.0578 15.3891 14.153 15.5673 14.2929 15.7071C14.4327 15.847 14.6109 15.9422 14.8049 15.9808C14.9989 16.0194 15.2 15.9996 15.3827 15.9239C15.5654 15.8482 15.7216 15.72 15.8315 15.5556C15.9414 15.3911 16 15.1978 16 15C16 14.7348 15.8946 14.4805 15.7071 14.2929C15.5196 14.1054 15.2652 14 15 14Z"
                                fill="#194BFB"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg text-gray-100 font-semibold mb-1">
                            Used percentage
                          </h5>
                          <p className="text-sm text-gray-300 font-semibold">
                            Check your storage on your dashboard
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-2">
                        <div
                          className="chart px-2"
                          data-type="radial-bar-part"
                          style={{ minHeight: 120 }}
                        />
                        <div className="flex items-end justify-center -mt-12">
                          <span className="text-3xl leading-none text-gray-200 font-semibold">
                            64
                          </span>
                          <span className="text-2xl leading-none text-gray-400 font-semibold">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 bg-gray-500 rounded-xl">
              <div className="flex flex-wrap -mx-3 -mb-4 justify-between items-center">
                <div className="w-auto px-3 mb-4">
                  <h4 className="text-gray-100 font-bold tracking-wide">
                    Work Performance
                  </h4>
                </div>
                <div className="w-auto px-3 mb-4">
                  <div className="relative inline-block bg-gray-600 rounded-xl">
                    <select
                      className="relative py-2 pl-4 pr-8 cursor-pointer bg-transparent text-xs text-gray-300 font-semibold appearance-none outline-none"
                      style={{ zIndex: 1 }}
                      name=""
                      id=""
                    >
                      <option value="">This Month</option>
                      <option value="">Last Week</option>
                    </select>
                    <span
                      className="absolute top-1/2 right-0 mr-2 transform -translate-y-1/2"
                      style={{ zIndex: 0 }}
                    >
                      <svg
                        width={10}
                        height={7}
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L5 5.5L9 1.5"
                          stroke="#3D485B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-6 pb-4 overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="text-left">
                      <th className="p-0">
                        <div className="py-3 px-6 rounded-l-xl bg-gray-700">
                          <span className="text-xs text-gray-300 font-semibold">
                            TASK
                          </span>
                        </div>
                      </th>
                      <th className="p-0">
                        <div className="py-3 px-6 bg-gray-700">
                          <span className="text-xs text-gray-300 font-semibold">
                            STATUS
                          </span>
                        </div>
                      </th>
                      <th className="p-0">
                        <div className="py-3 px-6 bg-gray-700">
                          <span className="text-xs text-gray-300 font-semibold">
                            TEAM
                          </span>
                        </div>
                      </th>
                      <th className="p-0">
                        <div className="py-3 px-5 rounded-r-xl bg-gray-700">
                          <span className="text-xs text-gray-300 font-semibold">
                            ESTIMATED DATE
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <h5 className="text-sm font-medium text-gray-100">
                            Onboarding Process
                          </h5>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <div className="flex h-full items-center">
                            <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full" />
                            <span className="text-sm font-medium text-gray-100">
                              Done
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <div className="flex h-full items-center">
                            <img
                              className="w-7 h-7 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-women-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-2-circle-border.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <span className="text-sm text-gray-100 font-medium">
                            July 06, 2022
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">
                        <div className="h-16 p-6 rounded-l-xl bg-gray-700">
                          <h5 className="text-sm font-medium text-gray-100">
                            SEO Integrations
                          </h5>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="flex h-16 p-6 items-center bg-gray-700">
                          <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full" />
                          <span className="text-sm font-medium text-gray-100">
                            Done
                          </span>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6 bg-gray-700">
                          <div className="flex h-full items-center">
                            <img
                              className="w-7 h-7 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-women-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-2-circle-border.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6 rounded-r-xl bg-gray-700">
                          <h5 className="text-sm font-medium text-gray-100">
                            July 06, 2022
                          </h5>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <h5 className="text-sm font-medium text-gray-100">
                            Hosting Configuration
                          </h5>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <div className="flex h-full items-center">
                            <span className="inline-block w-2 h-2 mr-1 bg-blue-500 rounded-full" />
                            <span className="text-sm font-medium text-gray-100">
                              In progress
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <div className="flex h-full items-center">
                            <img
                              className="w-7 h-7 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-women-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-2-circle-border.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <span className="text-sm text-gray-100 font-medium">
                            July 06, 2022
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">
                        <div className="h-16 p-6 rounded-l-xl bg-gray-700">
                          <h5 className="text-sm font-medium text-gray-100">
                            CMS Handoff
                          </h5>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="flex h-16 p-6 items-center bg-gray-700">
                          <span className="inline-block w-2 h-2 mr-1 bg-purple-500 rounded-full" />
                          <span className="text-sm font-medium text-gray-100">
                            Backlog
                          </span>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6 bg-gray-700">
                          <div className="flex h-full items-center">
                            <img
                              className="w-7 h-7 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-women-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-2-circle-border.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6 rounded-r-xl bg-gray-700">
                          <h5 className="text-sm font-medium text-gray-100">
                            July 06, 2022
                          </h5>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <h5 className="text-sm font-medium text-gray-100">
                            Content Review
                          </h5>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <div className="flex h-full items-center">
                            <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full" />
                            <span className="text-sm font-medium text-gray-100">
                              Done
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <div className="flex h-full items-center">
                            <img
                              className="w-7 h-7 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-women-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-2-circle-border.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6">
                          <span className="text-sm text-gray-100 font-medium">
                            July 06, 2022
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">
                        <div className="h-16 p-6 rounded-l-xl bg-gray-700">
                          <h5 className="text-sm font-medium text-gray-100">
                            Onboarding Process
                          </h5>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="flex h-16 p-6 items-center bg-gray-700">
                          <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full" />
                          <span className="text-sm font-medium text-gray-100">
                            Done
                          </span>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6 bg-gray-700">
                          <div className="flex h-full items-center">
                            <img
                              className="w-7 h-7 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-women-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-circle-border.png"
                              alt=""
                            />
                            <img
                              className="w-7 h-7 -ml-3 rounded-full object-cover"
                              src="trizzle-assets/images/avatar-men-2-circle-border.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-0">
                        <div className="h-16 p-6 rounded-r-xl bg-gray-700">
                          <h5 className="text-sm font-medium text-gray-100">
                            July 06, 2022
                          </h5>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-5 pb-6 px-8 bg-gray-700">
            <div className="flex flex-wrap items-center justify-between -mx-2">
              <div className="w-full lg:w-auto px-2 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold text-white tracking-wide leading-7 mb-1">
                  Overview
                </h4>
                <p className="text-xs text-gray-300">
                  Get daily review of your recent activities
                </p>
              </div>
              <div className="w-full lg:w-auto px-2">
                <div className="sm:flex items-center">
                  <div className="w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
                    <div className="flex flex-wrap items-center -mb-2">
                      <a
                        className="inline-flex items-center justify-center w-12 h-12 mb-2 mr-4 p-1 text-gray-300 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
                        href="#"
                      >
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        className="inline-flex items-center justify-center w-12 h-12 mb-2 mr-4 p-1 text-gray-300 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
                        href="#"
                      >
                        <svg
                          width={16}
                          height={20}
                          viewBox="0 0 16 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        className="inline-flex items-center justify-center w-12 h-12 mb-2 p-1 text-gray-300 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
                        href="#"
                      >
                        <svg
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.24133C18.7601 6.94733 17.6997 4.81281 15.9855 3.27667C14.2714 1.74053 12.0338 0.919537 9.73295 0.982497C7.43207 1.04546 5.24275 1.98759 3.61517 3.61517C1.98759 5.24275 1.04546 7.43207 0.982497 9.73295C0.919537 12.0338 1.74053 14.2714 3.27667 15.9855C4.81281 17.6997 6.94733 18.7601 9.24133 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7738 19.4936 20.8482 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5065 20.8482 20.6171 20.7738 20.71 20.68C20.8903 20.4936 20.991 20.2444 20.991 19.985C20.991 19.7257 20.8903 19.4765 20.71 19.29ZM10 17C8.61556 17 7.26218 16.5895 6.11103 15.8203C4.95989 15.0511 4.06268 13.9579 3.53287 12.6788C3.00306 11.3997 2.86443 9.99226 3.13453 8.63439C3.40463 7.27653 4.07131 6.02925 5.05028 5.05028C6.02925 4.07131 7.27653 3.40463 8.63439 3.13453C9.99226 2.86443 11.3997 3.00306 12.6788 3.53287C13.9579 4.06268 15.0511 4.95989 15.8203 6.11103C16.5895 7.26218 17 8.61556 17 10C17 11.8565 16.2625 13.637 14.9498 14.9498C13.637 16.2625 11.8565 17 10 17Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto">
                    <a
                      className="inline-flex items-center justify-center py-2 pl-2 pr-3 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
                      href="#"
                    >
                      <img
                        className="h-8 w-8 mr-3 rounded-full object-cover"
                        src="trizzle-assets/images/avatar-men.png"
                        alt=""
                      />
                      <h4 className="text-white font-extrabold tracking-wide mr-5">
                        John Doe
                      </h4>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#3D485B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}