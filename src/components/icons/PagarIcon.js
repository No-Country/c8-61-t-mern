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
    <Path d="M15.6.1C7.1.1.1 7.1.1 15.6c0 8.6 6.9 15.5 15.5 15.5s15.5-6.9 15.5-15.5C31.1 7.1 24.2.1 15.6.1zm1.5 7.7v11.3H14V7.8H9.4l6.2-6.2 6.2 6.2h-4.7z" />
  </Svg>
)

export default SvgComponent
