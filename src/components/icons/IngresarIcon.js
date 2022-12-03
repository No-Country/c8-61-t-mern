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
    <Path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 24.4-6.2-6.2h4.7V8.9h3.1v9.8h4.7L16 24.9z" />
  </Svg>
)

export default SvgComponent
