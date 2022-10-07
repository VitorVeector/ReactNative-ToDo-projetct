import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CheckedCircle = (props) => (
    <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.98 16.426a7.41 7.41 0 1 0 0-14.82 7.41 7.41 0 0 0 0 14.82Z"
      fill="#5E60CE"
    />
    <Path
      d="M8.964 1.86A7.14 7.14 0 1 1 1.824 9a7.168 7.168 0 0 1 7.14-7.14Zm0-1.587a8.727 8.727 0 1 0 .072 17.454A8.727 8.727 0 0 0 8.964.273Z"
      fill="#5E60CE"
    />
    <Path
      d="M12.43 6.342 8.1 10.674 5.616 8.192l-.836.835L8.1 12.346l5.168-5.168-.836-.836Z"
      fill="#F2F2F2"
    />
  </Svg>
)
