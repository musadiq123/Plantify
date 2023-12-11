import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EmptyHeart(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      {...props}
    >
      <Path
        d="M12 20.179L2.316 10.177C.864 8.678.369 6.443 1.054 4.431 2.326.695 6.84-.452 9.64 2.185l1.845 1.738.514.484.514-.484 1.845-1.738c2.8-2.637 7.315-1.49 8.587 2.246.685 2.012.19 4.247-1.262 5.746L12 20.18z"
        stroke="#002140"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default EmptyHeart
