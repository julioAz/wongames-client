import { render, screen } from '@testing-library/react'

import Highlight from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'Heanding 1',
  subtitle: 'Heading 2',
  buttonLabel: 'buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('heading', { name: /heading 1/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /heading 2/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
