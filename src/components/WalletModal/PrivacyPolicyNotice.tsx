import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { ExternalLink, ThemedText } from 'theme'

const StyledLink = styled(ExternalLink)`
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`

const LastUpdatedText = styled.span`
  color: ${({ theme }) => theme.textTertiary};
`

const LAST_UPDATED_DATE = '11.17.22'

export default function PrivacyPolicyNotice() {
  return (
    <ThemedText.Caption color="textSecondary">
      <Trans>By connecting a wallet, you agree to Protofire&apos;s</Trans>{' '}
      <StyledLink href="https://doc.swap.country/terms-of-service-e096ae912a54464084a176f98127bf35">
        <Trans>Terms of Service</Trans>{' '}
      </StyledLink>
      <Trans>and consent to its</Trans>{' '}
      <StyledLink href="https://doc.swap.country/privacy-policy-70fd833dc5f542a8b52ec73626ebb245">
        <Trans>Privacy Policy.</Trans>
      </StyledLink>
      <LastUpdatedText>
        {' ('}
        <Trans>Last Updated</Trans>
        {/* {` ${LAST_UPDATED_DATE})`} */}
        {` 7.19.23)`}

      </LastUpdatedText>
    </ThemedText.Caption>
  )
}
