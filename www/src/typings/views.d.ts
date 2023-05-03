import type { ViewType } from "blakprint/dist/typings"


export type LayoutType = ViewType<{
    children: React.ReactNode | JSX.Element;
}, {
    type: "nextjs-react-view"
}>


