import React from "react"
import containerStyles from "./container.module.scss"
import Header from "./header"

const Container = ({ children }) => {

  return (
    <div>
      <Header />
      <div className={containerStyles.container}>{children}</div>
    </div>
  )
}

export default Container
