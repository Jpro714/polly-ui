import { BigNumber } from 'bignumber.js'
import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { getPollyPrice, getWethPrice } from '../bao/utils'
import useBao from './useBao'
import useLockedEarnings from './useLockedEarnings'

const useValues = () => {
  const { account }: { account: string } = useWallet()
  const bao = useBao()
  const locks = useLockedEarnings()
  //const wethPriceContract = getWethPriceContract(bao)
  //const baoPriceContract = getBaoPriceContract(bao)
  const [usrText, setUsrText] = useState(new String())
  const [baoPrices, setBaoPrices] = useState(new BigNumber(0))
  const [wethPrices, setWethPrices] = useState(new BigNumber(0))

  const getInfo = useCallback(async () => {
    console.log(bao)
    if (bao) {
      const wethPriceFun = getWethPrice(bao).then((response) => {
        setWethPrices(new BigNumber(1))

        const baoPriceFun = getPollyPrice(bao).then((response) => {
          setBaoPrices(response)
          console.log('baovalues')
          console.log(response)
          const currentRate = wethPrices.dividedBy(1).dividedBy(baoPrices)
          const userValue = currentRate.multipliedBy(
            locks.dividedBy(1000000000000000000),
          )
          const dailyPrice = userValue.dividedBy(1095).toFormat(2)
          console.log(dailyPrice + ' dailyPrice')
          console.log(wethPrices + ' wethprice')
          console.log(baoPrices + ' baoPrice')
          const annualPrice = userValue.dividedBy(3).toFormat(2)
          console.log(annualPrice + ' annual')
          const wethText = userValue.toFormat(2)
          const usrText1 =
            'Your Locked POLLY is worth approximately $' + wethText + ''
          setUsrText(usrText1)
          console.log(usrText)
        })
      })
    }
  }, [locks, usrText])

  useEffect(() => {
    if (account && bao) {
      getInfo()
    }
  }, [account, bao, locks, usrText])

  return usrText.toString()
}

export default useValues
