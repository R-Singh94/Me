import React from 'react'
import { User32, Code32, Portfolio32, Education32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/Me">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            iconDescription="Me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/Me/Projects">
          <NavButton
            hasIconOnly
            renderIcon={Code32}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/Me/Work">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Work"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/Me/Education">
          <NavButton
            hasIconOnly
            renderIcon={Education32}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav