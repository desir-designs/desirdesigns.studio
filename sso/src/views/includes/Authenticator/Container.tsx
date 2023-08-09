export default function Container({ children }: any){
    return (
        <section className="py-36">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-lg mx-auto pt-16 pb-16 px-6 md:px-10 lg:px-16 bg-black bg-opacity-90 backdrop-blur-sm rounded-lg">
       {children}
          </div>
        </div>
      </section>
    )
}