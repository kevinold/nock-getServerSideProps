import styles from './index.module.css'

function HomePage({ joke, postTitle }) {
  return <div className={styles.home}>
    <div data-cy="joke" className={styles.content}>{joke}</div>
    <div data-cy="post" className={styles.content}>{postTitle}</div>
  </div>
}

export async function getServerSideProps(context) {
  console.log('getServerSideProps')

  const url = 'https://icanhazdadjoke.com/'
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  const data = await res.json()
  console.log(data)

  const postRes =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const postData = await postRes.json()

  return {
    props: {
      joke: data.joke,
      postTitle: postData.title
    },
  }
}

export default HomePage
