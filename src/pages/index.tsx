import Head from 'next/head'
import { GetStaticProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import { stripe } from '../services/stripe'

//Client-side (na função - useeffect)
//Server-side SSR
//Static SSG

interface HomeProps{ 
  product:{
    priceId: string,
    amount:number
  }
}
export default function Home({product}:HomeProps) {
  console.log('ok') // aparece no log do browser
  return (
    <>
      <Head><title>Home | ig.news</title></Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all publications <br />
          <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  )
}
export const getStaticProps: GetStaticProps = async() => {
  console.log('ok') // aparece no log do servidor
  const price = await stripe.prices.retrieve('price_1JzWQKJ5uvX0qJKhdkT9iEzU', 
  { expand:['product']}
  )
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'USD'
    }).format(price.unit_amount / 100),
  }
  return{
    props:{
      product
    },
    revalidate:60*60*24
  }
}