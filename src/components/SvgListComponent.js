import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export default function SvgListComponent  (props){
  return (
    <Svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G stroke="#002140" strokeWidth={1.5} strokeLinecap="round">
        <Path d="M25 7h-9M16 23H6M25 15H6" />
      </G>
    </Svg>
  )
}





