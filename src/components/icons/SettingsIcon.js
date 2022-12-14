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
    <Path
      d="M10.4 20h1.3c.3 0 .5-.1.7-.2s.3-.3.4-.6l.3-1.1h.2l.9.6c.2.1.4.2.7.1.3 0 .5-.1.6-.3l.9-.9c.2-.2.3-.4.3-.6 0-.2 0-.5-.1-.7l-.6-.9v-.2l1.1-.3c.3-.1.4-.2.6-.3.1-.2.2-.4.2-.7v-1.1c0-.3-.1-.5-.2-.7-.1-.2-.3-.3-.6-.4l-1.1-.3v-.2l.6-.9c.1-.2.2-.4.1-.7 0-.2-.1-.5-.3-.6l-.9-.9c-.2-.2-.4-.3-.6-.3-.2 0-.5 0-.7.1l-.9.6h-.2l-.3-1.1c-.1-.3-.2-.5-.4-.6-.2.2-.4.1-.7.1h-1.3c-.2 0-.4.1-.6.2s-.4.4-.4.6l-.2 1.1H9l-.9-.6c-.2-.1-.5-.2-.7-.1-.2 0-.4.1-.6.3l-.8.9c-.2.2-.3.4-.4.6 0 .2 0 .5.1.7l.6.9V11.8l-1.1.3c-.2-.1-.3 0-.5.2-.1.2-.2.4-.2.7v1.1c0 .3.1.5.2.7.1.2.3.3.6.3l1.1.3v.2l-.6.9c-.1.2-.2.4-.1.7 0 .2.1.5.3.6l.9.9c.2.2.4.3.6.3.2 0 .5 0 .7-.1l1-.6h.2l.3 1.1c.1.3.2.5.3.6s.2 0 .4 0zm.2-1.1c-.1 0-.1 0-.1-.1l-.1-.1-.3-1.5c-.2-.1-.4-.1-.5-.2-.2-.1-.3-.1-.5-.3l-1.3.8c-.1 0-.1.1-.1.1s-.1 0-.1-.1l-.7-.7-.1-.1c0-.1 0-.1.1-.1l.8-1.3c-.1-.1-.1-.3-.2-.5s-.1-.4-.2-.6l-1.5-.3c-.1 0-.1 0-.1-.1l-.1-.1v-.9c0-.1 0-.1.1-.1l.1-.1 1.5-.3c.1-.2.1-.4.2-.6.1-.2.1-.3.2-.5l-.8-1.3c0-.1-.1-.1-.1-.1 0-.1 0-.1.1-.1l.7-.7.1-.1h.1l1.3.8c.1-.1.3-.1.5-.2s.3-.1.5-.2l.3-1.5c0-.1 0-.1.1-.1l.1-.1h.9c.1 0 .1 0 .1.1l.1.1.3 1.5c.2.1.4.1.5.2.2.1.3.1.5.2l1.3-.8h.1s.1 0 .1.1l.7.7.1.1c0 .1 0 .1-.1.1l-.8 1.3c.1.1.1.3.2.5s.1.3.2.6l1.5.3c.1 0 .1.1.1.1l.1.1v.9c0 .1 0 .1-.1.1l-.1.1-1.5.3c-.1.2-.1.4-.2.6-.1.2-.1.3-.2.5l.8 1.3c0 .1.1.1.1.1 0 .1 0 .1-.1.1l-.7.7-.1.1s-.1 0-.1-.1l-1.3-.8c-.1.1-.3.1-.5.3-.2.1-.3.1-.5.2l-.3 1.5c0 .1 0 .1-.1.1l-.1.1h-.9zm.5-3c.5 0 .9-.1 1.3-.3.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.3s-.1-.9-.3-1.3-.5-.7-.9-.9c-.4-.2-.8-.3-1.3-.3s-.9.1-1.3.3c-.4.2-.7.5-.9.9-.2.4-.3.8-.3 1.3s.1.9.3 1.3c.2.4.5.7.9.9.4.3.8.3 1.3.3zm0-1.1c-.3 0-.5-.1-.7-.2-.2-.1-.4-.3-.5-.5-.1-.2-.2-.5-.2-.7s.1-.5.2-.7c.1-.2.3-.4.5-.5.2-.1.5-.2.7-.2.3 0 .5.1.7.2.2.1.4.3.5.5.1.2.2.5.2.7s-.1.5-.2.7c-.1.2-.3.4-.5.5-.2.1-.4.2-.7.2zm10.4 10.3h.9c.3 0 .5-.1.6-.2.2-.1.3-.3.3-.5l.2-.9s.1 0 .1-.1h.1l.7.5c.2.1.4.1.6.1.2 0 .4-.1.5-.3l.7-.7c.1-.2.3-.3.3-.6 0-.2 0-.4-.1-.6l-.5-.7v-.2l.9-.2c.2-.1.4-.1.5-.3.1-.2.2-.4.2-.6v-.9c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.5-.3l-.9-.2v-.2l.5-.7c.1-.2.2-.4.1-.6 0-.2-.1-.4-.3-.5l-.7-.7c-.1-.2-.3-.3-.5-.3s-.4 0-.6.1l-.7.5h-.1l-.2-.9c-.1-.2-.1-.4-.3-.5-.2-.1-.4-.2-.6-.2h-1c-.3 0-.5.1-.6.2-.2.1-.3.3-.3.5l-.2.9h-.2l-.7-.4c-.2-.1-.4-.1-.6-.1-.2 0-.4.1-.5.3l-.7.7c-.1.2-.3.3-.3.5s0 .4.1.6l.5.7V18l-.9.2c-.2.1-.4.1-.5.3s-.2.3-.2.6v.9c0 .2.1.4.2.6.1.2.3.3.5.3l.9.2v.1s0 .1.1.1l-.6.7c-.1.2-.2.4-.1.6 0 .2.1.4.3.6l.7.7c.2.2.3.3.5.3s.4 0 .6-.1l.7-.5h.2l.2.9c.1.2.1.4.3.5.1 0 .3.1.6.1zm.2-1c-.1 0-.1 0-.1-.1l-.1-.1-.3-1.2c-.3-.1-.7-.2-.9-.4l-1.1.7c-.1 0-.1.1-.1.1-.1-.1-.1-.1-.1-.2l-.4-.4-.1-.1v-.1l.7-1.1c-.1-.1-.1-.3-.2-.4-.1-.2-.1-.3-.2-.5l-1.2-.3c-.1 0-.1 0-.1-.1s-.1-.1-.1-.1v-.6c0-.1 0-.1.1-.1 0-.1.1-.1.1-.1l1.2-.3c.1-.2.1-.4.2-.5.1-.2.1-.3.2-.4l-.7-1.1v-.1c0-.1 0-.1.1-.1l.4-.4c0-.1 0-.1.1-.1h.1l1.1.7c.3-.2.6-.3.9-.4l.3-1.2c0-.1.1-.1.1-.1l.1-.1h.5c.1 0 .1 0 .1.1l.1.1.3 1.2c.3.1.7.2.9.4l1.1-.7h.1c.1 0 .1 0 .1.1l.4.4.1.1v.1l-.7 1.1c.1.1.1.3.2.4.1.1.1.3.2.5l1.2.3c.1 0 .1.1.1.1 0 .1.1.1.1.1v.6c0 .1 0 .1-.1.1 0 .1-.1.1-.1.1l-1.2.3c-.1.2-.1.4-.2.5-.1.2-.1.3-.2.4l.7 1.1v.1c0 .1 0 .1-.1.1l-.3.4c-.1.1-.1.1-.2.1s-.1 0-.1-.1l-1.1-.7c-.3.2-.6.3-.9.4l-.3 1.2c0 .1 0 .1-.1.1l-.1.1h-.5zm.3-2.6c.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.3-.1-.7-.3-1-.2-.3-.4-.5-.7-.7-.3-.2-.6-.3-1-.3-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4 0 .3.1.7.3 1 .2.3.4.5.7.7.2.2.6.3 1 .3zm0-1c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3s.5.1.7.3c.2.2.3.4.3.7 0 .3-.1.5-.3.7-.3.2-.5.3-.7.3z"
      style={{
        fill: "#000",
      }}
      />
  </Svg>
)

export default SvgComponent
