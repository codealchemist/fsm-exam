import { Layout, Menu, Breadcrumb } from 'antd'
import styled from 'styled-components'
import Groups from './components/Groups'
import groupsMock from './groups-mock.json'

const { Header, Content, Footer } = Layout
const Container = styled.div`
  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #353535;
  }
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
`

function App () {
  return (
    <Container>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='group'>Groups</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Groups</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <Groups data={groupsMock} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2022 Created by{' '}
          <a href='https://albertomiranda.com.ar' target='blank'>
            Alberto Miranda
          </a>
        </Footer>
      </Layout>
    </Container>
  )
}

export default App
