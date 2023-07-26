export default function Container({ children}) {
    return (
        <html lang="en">
     
      <body className={ "relative h-screen m-0"}>
       
        {children}
      </body>
 
    </html>
    )
}