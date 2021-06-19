import * as React from "react"
import { useState, useRef } from "react"

interface IUser {
  username: string
  fullname: string
  age: number
}

interface IProps {
  title: string
  favoriteNumber: number
  active: boolean
  sayHello: (name: string) => string
  address: { street: string; city: string }
  user: IUser
}

const MyComponent: React.FC<IProps> = ({
  title,
  favoriteNumber,
  active,
  sayHello,
  address,
  user,
}: IProps) => {
  const [count, setCount] = useState<number>(0)

  const inputRef = useRef<any>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      console.log(`This is a ref: ${inputRef.current.value}`)
    }, 5000)
    console.log(e.target.value)
  }

  const more = () => {
    setCount(count + 1)
  }
  const less = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>My component! </h1>
      <span>{title}</span>
      <br />
      <span>{favoriteNumber}</span>
      <br />
      <span>{active.toString()}</span>
      <br />
      <h2>{sayHello("Niko")}</h2>
      <h4>
        {address.street} - {address.city}
      </h4>
      <br />
      <span>
        {user.username} - {user.age} - {user.fullname}{" "}
      </span>
      <p>Number: {count}</p>
      <button type="button" onClick={more}>
        {" "}
        +{" "}
      </button>
      <button type="button" onClick={less}>
        {" "}
        -{" "}
      </button>
      <form action="">
        <input
          type="text"
          placeholder="Write something"
          ref={inputRef}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default MyComponent
