import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CheckedCircle = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.98 15.426a7.41 7.41 0 1 0 0-14.82 7.41 7.41 0 0 0 0 14.82Z"
      fill="#5E60CE"
    />
  </Svg>
)
