import { useEffect, useState } from "react"


const useLocalStorage = (key?: string, initialValue?: string) => {
  const [local,setLocal] = useState<string | undefined>(() => {
    if (key) {
      const value = window.localStorage.getItem(key)
      return value ?? initialValue
    }
  })

  const getLocal = (key: string): string | null => window.localStorage.getItem(key)

  useEffect(() => {
    if (key) {
      window.localStorage.setItem(key,local as string)
    } 
  }, [key,local])

  return {setLocal,getLocal}
}

export default useLocalStorage;