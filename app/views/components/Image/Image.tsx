import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage } from "react-lazy-load-image-component";

import type { ImageProps } from "@typings/Image";
import type { IComponent } from "@models/typings/Component";



const Image: IComponent<ImageProps> = ({ ...props }: ImageProps) => {

    return (
        <LazyLoadImage effect="blur" {...props} width={600} height={600} />
    )
}

export default Image