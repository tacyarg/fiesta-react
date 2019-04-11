import React from 'react'
import { Flex, Box } from 'rebass'

import Logo from '../primitives/Header/Logo'
import NavBtn from '../primitives/Header/NavButton'
import UserMenu from '../primitives/Header/UserMenu'

class Header extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props.location.pathname)

    this.state = {
      routes: [
        {
          path: '/jackpot',
          label: 'Jackpot',
          value: 0,
        },
        {
          path: '/30max',
          label: '30max',
          value: 0,
        },
        {
          path: '/coinflip',
          label: 'Coinflip',
          value: 0,
        },
      ],
    }
  }

  render() {
    const { routes } = this.state

    return (
      <Flex backgroundColor="#221d2e" alignItems="center" p={10} css={{
        boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
        zIndex: 999
      }}>
        <Logo />
        {routes.map(link => (
          <NavBtn
            key={link.path}
            isActive={link.path === this.props.location.pathname}
            {...link}
          />
        ))}
        <Box mx="auto" />
        <UserMenu username="tacyarg" />
      </Flex>
    )
  }
}

export default Header
