import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import Button from '../../Button'
import CardContent from '../../CardContent'
import CardIcon from '../../CardIcon'
import CardTitle from '../../CardTitle'
import Spacer from '../../Spacer'
import WalletModalCard from '../../WalletModalCard'

interface WalletCardProps {
	icon: React.ReactNode
	onConnect: () => void
	title: string
}

const WalletCard: React.FC<WalletCardProps> = ({ icon, onConnect, title }) => {
	const wallet: any = useWallet()

	const [buttonText, setButtonText] = useState<any>()
	useEffect(() => {
		_getButtonText(wallet.ethereum, wallet.status).then((res: any) =>
			setButtonText(res),
		)
	}, [wallet])

	return (
		<WalletModalCard>
			<CardContent>
				<CardIcon>{icon}</CardIcon>
				<CardTitle text={title} />
				<Spacer />
				<Button
					onClick={onConnect}
					text={
						buttonText || (
							<span>
								<FontAwesomeIcon icon="wifi" /> Wrong Network
							</span>
						)
					}
				/>
			</CardContent>
		</WalletModalCard>
	)
}

const _getButtonText = async (ethereum: any, status: string): Promise<any> => {
	if (ethereum && ethereum.chainId !== '0x89') {
		try {
			await ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x89' }],
			})
		} catch (error) {
			if (error.code === 4902) {
				await ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [
						{
							chainId: '0x89',
							rpcUrls: ['https://polygon-rpc.com'],
							blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
							chainName: 'Matic Mainnet',
							nativeCurrency: {
								name: 'MATIC',
								symbol: 'MATIC',
								decimals: 18,
							},
						},
					],
				})
			}
		}
	} else {
		return status === 'connecting' ? 'Connecting...' : 'Connect'
	}
}

export default WalletCard
