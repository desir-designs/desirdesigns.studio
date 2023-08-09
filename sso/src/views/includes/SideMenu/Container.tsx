export default function Container({ children , isVisible} :any) {
    return (
        <div className={`${isVisible ? "block" : "hidden"} w-1/5 navbar-menu relative z-50`}>
        <nav className="fixed top-0 left-0 bottom-0 w-1/5 max-w-xxs flex flex-col h-full py-8 px-4 bg-gray-700 overflow-auto">
          {children}
        </nav>
      </div>
    
    )
}