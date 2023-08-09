export default function Form({ title, subTitle }: any) {

  function Header() {
    return (
      <div className="text-center mb-10">
      <h2 className="text-2xl text-gray-100 font-semibold mb-2">
        {title}
      </h2>
      <p className="text-gray-300 font-medium">
        {subTitle}
      </p>
    </div>
    )
  }
    return (
        <div className="relative max-w-md mx-auto">
         <Header/>
          <form action="">
          
            <div className="relative w-full h-14 py-4 px-3 mb-4 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                Password*
              </span>
              <input
                className="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                id="signInInput5-3"
                type="password"
              />
            </div>
            <span className="block text-xs text-gray-300 font-semibold mb-6">
              Must be at least 12 characters.
            </span>
          
            <a
              className="flex items-center justify-center w-full py-4 mb-6 leading-6 text-white font-semibold bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200"
              href="/space"
            >
              <div className="w-4 bg-white rounded-sm">
             🔑
              </div>
              <span className="ml-3">Sign In</span>
            </a>
            <p className="font-medium text-center">
              <span className="text-gray-300">Having issues?</span>
              <a className="inline-block text-blue-500 hover:underline" href="#">
                Help
              </a>
            </p>
          </form>
        </div>
      );
}