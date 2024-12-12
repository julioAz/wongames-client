import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: fles;
    align-items: center;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    height: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`
