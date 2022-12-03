import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RetirarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm3.8 21.8-6.9-6.9-3.3 3.3V10h8.7L15 13.2l6.9 6.9-2.1 2.2z" />
  </Svg>
)

export default RetirarIcon
