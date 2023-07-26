export type TypographyProps = {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span",
    text: string
}

export const TypographyTypes = {
    special: {
        gradient: "bg-gradient-to-r from-blue-500 to-black",
    }
}
export default function Typography(props:any) {

    const { children } = props

    return (
        <span className="text-transparent text-9xl bg-clip-text bg-gradient-to-r from-blue-500 to-black">
       {children}
      </span>
    )
}