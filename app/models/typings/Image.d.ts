
export interface ImageInterface extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement> {
    src?: string,
    alt?: string,
    width?: string,
    height?: string,
    className?: string,
    style?: React.CSSProperties,
    loading?: string,
}