import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { lazy, Suspense } from "react"
import "./App.css"
const Photos = lazy(() => import("./fetch/Photos"))
const Example = lazy(() => import("./basics/Example"))
const Counter = lazy(() => import("./reducer/Counter"))
const InfiniteScroll = lazy(() => import("./infinite/InfiniteScroll"))
const CustomForm = lazy(() => import("./customHooks/CustomForm"))
import Loading from "./basics/Loading"

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Example} />
          <Route path="/photos" exact component={Photos} />
          <Route path="/counter" exact component={Counter} />
          <Route path="/infinite" exact component={InfiniteScroll} />
          <Route path="/form" exact component={CustomForm} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
