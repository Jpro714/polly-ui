import { Context } from 'contexts/Multicall'
import { Multicall } from 'ethereum-multicall'
import { useContext } from 'react'

const useBao = (): Multicall => {
  const { multicall }: any = useContext(Context)
  return multicall
}

export default useBao
