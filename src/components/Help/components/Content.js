/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styled from 'styled-components'

import Link from '../../ui/Link'
import Flex from '../../ui/Flex'
import Button from '../../ui/Button'

const Container = styled.div`
  color: #fff;
  background-color: #ffab91;
  position: relative;
  border-radius: 3px;
  margin: 0 auto;
`

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`

const Body = styled.div`
  padding: 15px;
  font-size: large;
`

const Bigger = styled.span`
  font-size: 1.25em;
  line-height: 0.5;
`

const icons = '❤🌴🌲🌳❤'

const Content = ({ close, showGreet }) => (
  <Container>
    <Heading>
      {showGreet && <h2>Welcome to skratch!</h2>}
      {!showGreet && <h2>Welcome back to skratch!</h2>}
    </Heading>

    <Body>
      <p>
        <Bigger>📓</Bigger> Skratch is a minimalist notes app that aims to be as
        simple as possible. Like writing notes in a piece of paper and throwing
        it away after you are done. One big difference though, you don't waste
        trees! <Bigger>{icons}</Bigger>
      </p>

      <p>
        <Bigger>📎</Bigger> Skratch saves your notes locally so you can reload
        the page and everything will be there.
      </p>

      <p>
        <Bigger>📶</Bigger> It also works offline, you know, like paper.
      </p>

      <Flex justify="end">
        <Button onClick={close}>close</Button>
      </Flex>
    </Body>

    <Heading>
      <h4>
        {'</> with <3'}{' '}
        <Link to="https://gillchristian.xyz/about-me" blank>
          gillchristian
        </Link>
      </h4>
    </Heading>
  </Container>
)

export default Content
