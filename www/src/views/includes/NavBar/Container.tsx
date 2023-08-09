export function Container({ children }) {
    return (
      <section className="sticky top-0 overflow-hidden z-50">
        <div className="sticky top-0 flex justify-between px-8 py-5 top-0items-center backdrop-blur-sm">
          {children}
        </div>
      </section>
    );
  }