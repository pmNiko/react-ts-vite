import React from "react"
import MyComponent from "./MyComponent"

const Example = () => {
  return (
    <MyComponent
      title="My title"
      favoriteNumber={33}
      active={false}
      sayHello={(name) => "Hello " + name}
      address={{ street: "Volcan huanquihue", city: "SMA" }}
      user={{ username: "Martin", age: 32, fullname: "Paneblanco" }}
    />
  )
}

export default Example
