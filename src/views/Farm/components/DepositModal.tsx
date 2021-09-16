import BigNumber from 'bignumber.js'
import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'
import ModalActions from 'components/ModalActions'
import ModalContent from 'components/ModalContent'
import ModalTitle from 'components/ModalTitle'
import Spacer from 'components/Spacer'
import TokenInput from 'components/TokenInput'
import React, { useCallback, useMemo, useState } from 'react'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { StyledExternalLink, StyledInfo } from './styles'

interface DepositModalProps extends ModalProps {
	max: BigNumber
	onConfirm: (amount: string) => void
	tokenName?: string
}

const DepositModal: React.FC<DepositModalProps> = ({
	max,
	onConfirm,
	onDismiss,
	tokenName = '',
}) => {
	const [val, setVal] = useState('')
	const [pendingTx, setPendingTx] = useState(false)

	const fullBalance = useMemo(() => {
		return getFullDisplayBalance(max)
	}, [max])

	const handleChange = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			setVal(e.currentTarget.value)
		},
		[setVal],
	)

	const handleSelectMax = useCallback(() => {
		setVal(fullBalance)
	}, [fullBalance, setVal])

	const handleSelectHalf = useCallback(() => {
		setVal(new BigNumber(fullBalance).div(2).toString())
	}, [fullBalance, setVal])

	return (
		<Modal>
			<ModalTitle text={`Deposit ${tokenName}`} />
			<ModalContent>
				<StyledInfo>
					❗️ Remember a 0.75% fee will be added to the treasury when
					depositing. 75% of POLLY rewards will be locked and vested for 6
					years. For more information, please{' '}
					<StyledExternalLink
						href="https://docs.bao.finance/franchises/polly-finance"
						target="blank"
					>
						{' '}
						read the docs.
					</StyledExternalLink>
				</StyledInfo>
			</ModalContent>
			<TokenInput
				value={val}
				onSelectMax={handleSelectMax}
				onSelectHalf={handleSelectHalf}
				onChange={handleChange}
				max={fullBalance}
				symbol={tokenName}
			/>
			<ModalActions>
				<Button text="Cancel" variant="secondary" onClick={onDismiss} />
				<Button
					disabled={pendingTx}
					text={pendingTx ? 'Pending Confirmation' : 'Confirm'}
					onClick={async () => {
						setPendingTx(true)
						await onConfirm(val)
						setPendingTx(false)
						onDismiss()
					}}
				/>
			</ModalActions>
			<Spacer />
		</Modal>
	)
}

export default DepositModal
