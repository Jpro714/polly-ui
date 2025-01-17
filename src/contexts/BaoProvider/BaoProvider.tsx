import { Bao } from 'bao'
import React, { createContext, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'

export interface BaoContext {
	bao?: typeof Bao
}

export const Context = createContext<BaoContext>({
	bao: undefined,
})

declare global {
	interface Window {
		baosauce: any
		bao: any
		ethereum?: any
	}
}

const BaoProvider: React.FC = ({ children }) => {
	const wallet = useWallet()
	const { ethereum, connect }: any = wallet
	const [bao, setBao] = useState<any>()

	if (ethereum) ethereum.on('chainChanged', () => window.location.reload())

	window.bao = bao

	useEffect(() => {
		const { ethereum: windowEth } = window
		if (windowEth && !ethereum) {
			// Check if user has connected to the webpage before
			const mmWeb3 = new Web3(windowEth)
			mmWeb3.eth.getAccounts().then((accounts: string[]) => {
				if (accounts.length > 0) connect('injected')
			})
		}

		if (ethereum) {
			const chainId = Number(ethereum.chainId)
			const baoLib = new Bao(ethereum, chainId, false, {
				defaultAccount: ethereum.selectedAddress,
				defaultConfirmations: 1,
				autoGasMultiplier: 1.05,
				testing: false,
				defaultGas: '300000',
				defaultGasPrice: '20000000000',
				accounts: [],
				ethereumNodeTimeout: 10000,
			})
			setBao(baoLib)
			window.baosauce = baoLib
		}
	}, [ethereum])

	return <Context.Provider value={{ bao }}>{children}</Context.Provider>
}

export default BaoProvider
