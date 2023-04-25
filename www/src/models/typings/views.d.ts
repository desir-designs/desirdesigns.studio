export interface IJSXComponent<T={children?:any}> extends JSX.Element {
    props?: T
}