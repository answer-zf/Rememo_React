import Layout from './Layout/Layout'

const HomePage = () => {
  return (
    <Layout topBar={true} botBar={true}>
      {{ content: <p>this is homepage</p> }}
    </Layout>
  )
}

export default HomePage
