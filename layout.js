import Head from "next/head";
import { Layout, Menu, Card, Tag } from 'antd';
import Link from 'next/link';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const gridStyle = {
  width: '50%',
  height: "400px"
}
const tagStyle = {
  position: "relative", top: "-20px", left: "-20px"
}

export default ({ cat, id, children }) => {
  return [
    <Head key="head">
      <title>码四方——学好TypeScript/Rust/Kotlin/Python走四方</title>
      <meta
        name="description"
        content="四格学编程，深入浅出未来编程四大天王：TypeScript/Rust/Kotlin/Python."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <Layout
      key='layout'
      style={{ background: '#fff' }}>
      <Sider
        style={{ background: '#fff' }}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={[cat]}
          defaultSelectedKeys={[id]}
        >
          <Menu.Item key='home'>
            <Link href='/'>
              <a>首页</a>
            </Link>
          </Menu.Item>
          <SubMenu
            key="basic"
            title="基础"
          >
            <Menu.Item key="types">
              <Link href="/basic/types">
                <a>基本类型</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="object">
              <Link href="/basic/object">
                <a>对象类型</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="variable">
              <Link href="/basic/variable">
                <a>变量</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="Interfaces">
              <Link href="/basic/Interfaces">
                <a>接口</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="Classes">
              <Link href="/basic/Classes">
                <a>类</a>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <Card>
          <Card.Grid style={gridStyle}>
            <Tag style={tagStyle}>TypeScript</Tag>
            {children[0]}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Tag style={tagStyle}>Rust</Tag>
            {children[1]}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Tag style={tagStyle}>Kotlin</Tag>
            {children[2]}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Tag style={tagStyle}>Python</Tag>
            {children[3]}
          </Card.Grid>
        </Card>
      </Content>
    </Layout>
  ];
}
