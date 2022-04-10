import { useState, useEffect } from 'react'
import { Button, Spin, Row, Col, notification } from 'antd'
import styled from 'styled-components'
import Members from './Members'
import mailer from '../services/Mailer'

const Container = styled.div`
  margin: 10px 0;
  padding: 20px;
  background: #222;
  position: relative;
  opacity: 1;
  transition: all 1s;

  ${({ isSending }) => {
    if (isSending) return 'opacity: 0.5;'
  }}
`

const StyledButton = styled(Button)`
  margin: 0 10px;
`

const StyledSpin = styled(Spin)`
  position: absolute;
  top: 20px;
  right: 20px;
`

const GroupItem = ({ id, members }) => {
  const [isSending, setIsSending] = useState(false)

  async function send ({ id, members }) {
    if (!window.confirm('Continue?')) return

    setIsSending(true)
    // TODO: Get all props from UI.
    const mailServiceId = 'ethereal'
    const templateId = '8de7ca1d-084e-4e6f-aaf2-2c2045832fbf'
    const templateProps = {
      role: 'CEO',
      roleName: 'Alberto Miranda'
    }
    const { response, error } = await mailer.groupSend({
      mailServiceId,
      templateId,
      groupId: id,
      templateProps
    })

    // Failed. Display error message.
    if (error) {
      setIsSending(false)
      notification.error({
        title: 'Group send failed',
        message: `Sending message to group ${id} failed.`
      })
      return
    }

    // OK! Display confirmation.
    setIsSending(false)
    notification.success({
      title: 'Group send completed',
      message: `Sending message to group ${id} was completed.`
    })
  }

  return (
    <Container isSending={isSending}>
      <Row align='middle'>
        <Col>
          <StyledButton
            onClick={() => send({ id, members })}
            disabled={isSending}
          >
            Send
          </StyledButton>
        </Col>
        <Col>
          <b># {id}</b>
        </Col>
      </Row>

      <Row>
        <Col>
          <Members members={members} />
        </Col>
      </Row>
      {isSending === true && <StyledSpin />}
    </Container>
  )
}

export default GroupItem
