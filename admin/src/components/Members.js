import styled from 'styled-components'
import { Typography } from 'antd'

const { Text } = Typography

const Container = styled.div`
  padding: 20px;
`

const Members = ({ members }) => (
  <Container>
    {members?.map(({ name, email }) => (
      <div>
        <Text key={email} ellipsis={true}>
          {name} &lt;{email}&gt;
        </Text>
      </div>
    ))}
  </Container>
)

export default Members
