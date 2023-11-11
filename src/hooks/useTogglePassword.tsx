import { useState } from "react";

export function useTogglePassword () {
  const [visible, setVisible] = useState<boolean>(true)

  const togglePassword = () => {
    setVisible(!visible)
  }
  
  const visibility = visible ? true : false

  return { togglePassword, visibility}
}