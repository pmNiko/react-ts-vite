import { ChangeEvent, MouseEvent, useState } from "react"

// export function useCustomForm<T>(initialState: T) {
export const useCustomForm = <T extends Object>(initialState: T) => {
  const [customForm, setCustomForm] = useState(initialState)

  const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setCustomForm({
      ...customForm,
      [name]: value,
    })
  }

  // const resetCustomForm = (e: MouseEvent<HTMLElement>) => {
  // e.preventDefault()
  const resetCustomForm = () => {
    setCustomForm({
      ...initialState,
    })
  }

  return {
    ...customForm,
    handlerChange,
    resetCustomForm,
  }
}
