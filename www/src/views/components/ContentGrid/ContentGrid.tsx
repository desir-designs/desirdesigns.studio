export default function ContentGrid() {
  return (
    <section className="pt-20 pb-36 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="md:max-w-lg mx-auto text-center mb-20">
          <h2 className="mb-4 font-heading font-semibold text-white text-6xl sm:text-7xl">
            Latest news
          </h2>
          <p className="text-lg text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img
                  className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog1.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">
                      Technology . 4 min read
                    </h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">
                      You will never believe these bizarre truth of travel.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img
                  className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog2.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">
                      Technology . 4 min read
                    </h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">
                      You will never believe these bizarre truth of travel.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img
                  className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog3.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">
                      Technology . 4 min read
                    </h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">
                      You will never believe these bizarre truth of travel.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img
                  className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog4.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">
                      Technology . 4 min read
                    </h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">
                      You will never believe these bizarre truth of travel.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
