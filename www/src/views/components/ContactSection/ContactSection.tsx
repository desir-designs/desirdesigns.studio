export default function ContactSection() {
  return (
    <section className="relative overflow-hidden pt-28 bg-gradient-gray2">
      <img
        className="absolute top-0 left-0 h-full"
        src="gradia-assets/elements/contact/radial.svg"
        alt=""
      />
      <div className="container relative z-10 px-4 mx-auto">
        <div className="md:max-w-lg">
          <h2 className="mb-5 text-6xl font-semibold text-gray-900 font-heading sm:text-7xl">
            We’ve got your back!
          </h2>
          <p className="text-lg text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="flex flex-wrap pb-24 -m-6 md:pb-0">
          <div className="flex w-full p-6 md:w-1/2 md:pb-0">
            <img
              className="self-end"
              src="gradia-assets/images/contact/woman.png"
              alt=""
            />
          </div>
          <div className="flex w-full p-6 md:w-1/2">
            <div className="flex flex-wrap self-end -m-4 md:pb-24">
              <div className="w-full p-4">
                <div className="px-8 bg-white md:max-w-lg py-7 rounded-10">
                  <div className="max-w-xs">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 font-heading">
                      Get Started from Tutorials
                    </h3>
                    <p className="mb-8 text-lg text-gray-600">
                      Contact us anytime, from anywhere. Get in touch.
                    </p>
                    <a
                      className="inline-block overflow-hidden text-base font-medium text-gray-900 group font-heading hover:text-gray-800"
                      href="#"
                    >
                      <p className="mb-1">Check All Our Tutorials</p>
                      <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full p-4">
                <div className="px-8 bg-white md:max-w-lg py-7 rounded-10">
                  <div className="max-w-xs">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 font-heading">
                      24/7 Customer Support
                    </h3>
                    <p className="mb-8 text-lg text-gray-600">
                      Contact us anytime, from anywhere. Get in touch.
                    </p>
                    <a
                      className="inline-block overflow-hidden text-base font-medium text-gray-900 group font-heading hover:text-gray-800"
                      href="#"
                    >
                      <p className="mb-1">Visit Our Help Center</p>
                      <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
