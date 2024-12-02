import { IKImage } from "imagekitio-react";

const Image = ({src, className, w, h, alt}) => {
  return (
    <IKImage urlEndpoint= {import.meta.env.VITE_IK_URL_ENDPOINT} 
    path={src}
    loadin="lazy" 
    lqip = {{active:true, quality:20}}
    className={className} 
    alt={alt}
    width={w}
    height={h}></IKImage>
  )
}

export default Image