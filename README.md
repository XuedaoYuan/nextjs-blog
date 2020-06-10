pages下面目录结构就是路由

public文件夹下面的内容可以存放静态资源

_app.js 可以引入全局样式

1、路由跳转

Link

```
import Link from 'next/link'

<Link href="/posts/first-post"><a>this page!</a></Link>
```

2、Head 可以定制html head内容

```
import Head from 'next/head'

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

3、添加css样式

```
<style jsx>{`
	.h1h1 {
		color: red;
	}
`}</style>
```

css modules 必须命名css文件为`componentName.module.css`

```js
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
```

操作类名可以使用`classnames`

```
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
```

### 4、预渲染和数据获取

两种方式

1. 静态编译 **Static Generation** 在编译时（build time）生成html，只会生成一次
2. 服务端渲染 **Server-side Rendering**，在每一次请求的时候根据不同的请求生成HTML

不需要根据用户请求改变的那就可以使用静态编译页面，

#### getStaticProps 

在生产编译时运行,  只能在页面级文件使用**Only Allowed in a Page**。

```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

#### getServerSideProps

context 参数包含一些请求的特殊参数

```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

#### SWR 客户端渲染

```
import useSWR from 'swr'
function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

客户端渲染可以使用这个来获取数据

### 动态路由Dynamic Routes

[id].js



[…id.js] 会匹配 `/posts/a、/posts/a/b` 但是getStaticProps的params的id会返回一个数组

### API路由

```
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
```

处理request

也可以直接存储数据到database