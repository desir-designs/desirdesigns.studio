export const defaultProps = {
  title: "Desir Designs",
};

export type ContentGridProps = {
  header?: {
    title?: string | React.ReactNode;
    description?: string;
  },
  grid?: {
    items?: any[]
  },
  container?: {
    children: any
  }
};

export function Header(props: ContentGridProps["header"]) {

  const { title, description } = props;

  return (
    <div className="mx-auto mb-20 text-center md:max-w-lg">
      <h1 className="mb-4 font-semibold text-white text-9xl font-heading ">
        {title}
      </h1>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
}

export function Grid(props: ContentGridProps["grid"]) {
  return (
    <div className="flex flex-wrap -m-3">
      <div className="w-full p-3 md:w-1/2 xl:w-1/4">
        <a className="group" href="#">
          <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
            <img
              className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
              src="gradia-assets/images/blog/blog1.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                  Technology . 4 min read
                </h2>
                <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                  You will never believe these bizarre truth of travel.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full p-3 md:w-1/2 xl:w-1/4">
        <a className="group" href="#">
          <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
            <img
              className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
              src="gradia-assets/images/blog/blog2.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                  Technology . 4 min read
                </h2>
                <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                  You will never believe these bizarre truth of travel.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full p-3 md:w-1/2 xl:w-1/4">
        <a className="group" href="#">
          <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
            <img
              className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
              src="gradia-assets/images/blog/blog3.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                  Technology . 4 min read
                </h2>
                <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                  You will never believe these bizarre truth of travel.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full p-3 md:w-1/2 xl:w-1/4">
        <a className="group" href="#">
          <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
            <img
              className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
              src="gradia-assets/images/blog/blog4.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                  Technology . 4 min read
                </h2>
                <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                  You will never believe these bizarre truth of travel.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export function Container({ children }:ContentGridProps["container"]) {
  return (
    <section className="h-screen pt-20 overflow-hidden bg-black bg-opacity-20 pb-36">
      <div className="container px-4 mx-auto">{children}</div>
    </section>
  );
}

export default function ContentGrid(props: ContentGridProps) {
  return (
    <Container>
      <Header />
      <Grid />
    </Container>
  );
}
