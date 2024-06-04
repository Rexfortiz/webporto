import { Html } from '@react-three/drei'
import WebCard from '../cards/WebCard'
import { webPorto } from '../constants'

const CarouselWeb = ({ selectIndex, radius = 1.4 * 15, count = 6}) => {

  return (
    <>
      {webPorto.map((item, i) => (
        <WebCard
          key={item.name}
          url={item.img}
          position={[
            (Math.sin((i / count) * Math.PI * 2) * radius),
            0,
            (Math.cos((i / count) * Math.PI * 2) * radius)]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
          select={i == selectIndex}
        />
      ))}
    </>
  )
}

export default CarouselWeb