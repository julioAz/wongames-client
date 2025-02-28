import Button from '../Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({ title, subtitle, buttonLabel, buttonLink }: HighlightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.SubTitle>{subtitle}</S.SubTitle>
    <Button as="a" href={buttonLabel}>{buttonLabel}</Button>
  </S.Wrapper>
)

export default Highlight
