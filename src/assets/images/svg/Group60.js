import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Group60(props) {
  return (
    <Svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.925 13.78a14 14 0 019.844-9.899l1.601-.437a48 48 0 0125.26 0l1.601.437a14 14 0 019.844 9.9l.55 2.064a48 48 0 01-.145 25.27l-.344 1.232a14 14 0 01-9.801 9.744l-1.705.465a48 48 0 01-25.26 0l-1.705-.465a14 14 0 01-9.8-9.744l-.344-1.232a48 48 0 01-.146-25.27l.55-2.064z"
        fill="#0D986A"
      />
      <Circle opacity={0.6} cx={16} cy={25} r={4} fill="#fff" />
      <Circle opacity={0.6} cx={40.7249} cy={25} r={4} fill="#fff" />
      <Path
        d="M16 26c2.083 17.333 22.917 17.333 25 0"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default Group60
