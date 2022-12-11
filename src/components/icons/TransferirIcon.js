import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M16 .5C7.9.5 1.3 6.6.5 14.5h10.9V9.8l6.2 6.2-6.2 6.2v-4.7H.5c.8 7.9 7.4 14 15.5 14 8.6 0 15.5-7 15.5-15.5S24.5.5 16 .5z" />
  </Svg>
)

export default SvgComponent
