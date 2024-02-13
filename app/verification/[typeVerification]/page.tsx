'use client'
import VerificationPage from '@/pages/VerificationPage'

const Verification = ({
	params,
}: {
	params: { typeVerification: string | undefined }
}) => {
	return (
		<VerificationPage
			typeVerification={params.typeVerification ? params.typeVerification : ''}
		/>
	)
}

export default Verification
