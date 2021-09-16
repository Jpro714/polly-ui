import pollyNests from 'assets/img/polly-nests.png'
import { BigNumber } from 'bignumber.js'
import Button from 'components/Button'
import Container from 'components/Container'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Spacer from 'components/Spacer'
import WalletProviderModal from 'components/WalletProviderModal'
import useModal from 'hooks/useModal'
import React, { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import Farm from '../Farm'
import Balances from './components/Balances'
import FarmCards from './components/FarmCards'
import { StyledExternalLink, StyledInfo } from './components/styles'

const Farms: React.FC = () => {
	const { path } = useRouteMatch()
	const { account, ethereum }: any = useWallet()
	const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
	const [baoPrice, setBaoPrice] = useState<BigNumber | undefined>()

	return (
		<Switch>
			<Page>
				{account && ethereum.chainId === '0x89' ? (
					<>
						<Route exact path={path}>
							<PageHeader
								icon={pollyNests}
								title="Farms"
								subtitle="Earn POLLY by staking SushiSwap LP and Nest Tokens!"
							/>
							<Container>
								<StyledInfo>
									❗️{' '}
									<span
										style={{
											fontWeight: 700,
											color: '${(props) => props.theme.color.red}',
										}}
									>
										Attention:
									</span>{' '}
									Be sure to read the{' '}
									<StyledExternalLink
										href="https://docs.bao.finance/franchises/polly"
										target="_blank"
									>
										docs
									</StyledExternalLink>{' '}
									before using the farms so you are familiar with protocol risks
									and fees!
								</StyledInfo>
								<Spacer size="md" />
								<Balances />
								<Spacer size="md" />
							</Container>
							<FarmCards />
						</Route>
						<Route path={`${path}/:farmId`}>
							<Farm />
						</Route>
					</>
				) : (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							flex: 1,
							justifyContent: 'center',
						}}
					>
						<Button
							onClick={onPresentWalletProviderModal}
							text="🔓 Unlock Wallet"
						/>
					</div>
				)}
			</Page>
		</Switch>
	)
}

export default Farms
