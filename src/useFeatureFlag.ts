import { useEffect, useState } from  'react'

export const useFeatureFlag = (feature: string): { result: boolean; isFetching: boolean } => {
  const [result, setResult] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    setIsFetching(true)
    fetch('https://run.mocky.io/v3/d88e453f-1553-409a-b40c-a052a0c8e474')
      .then(resp => resp.json())
      .then(data => {
        if (data.features.includes(feature)) {
          setResult(true)
        }
      })
      .finally(() => setIsFetching(false))
  }, [feature])

  return { result, isFetching }
}
