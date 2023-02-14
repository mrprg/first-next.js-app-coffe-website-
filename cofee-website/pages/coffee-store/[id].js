import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/5.1 coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";
import nearMe from "../../public/static/icons/nearMe.svg";
import places from "../../public/static/icons/places.svg";
import star from "../../public/static/icons/star.svg";
import { fetchCoffeeStores } from "../../lib/coffee-store";

export async function getStaticProps(staticProps) {
  const coffeeStores = await fetchCoffeeStores();
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStores.find((coffeeStore) => {
        return coffeeStore.fsq_id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const upvoteButtonHandler = () => {
  console.log("hello there!");
};

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { name, address, country, imgUrl } = props.coffeeStore;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link legacyBehavior href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          {address && <div className={styles.iconWrapper}>
            <Image src={nearMe} width="24" height="24" />
            <p className={styles.text}>{address}</p>
          </div>}
          {country &&<div className={styles.iconWrapper}>
            <Image src={places} width="24" height="24" />
            <p className={styles.text}>{country}</p>
          </div>}
          <div className={styles.iconWrapper}>
            <Image src={star} width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>
          <button
            className={styles.upvoteButton}
            onClick={upvoteButtonHandler}>
            upVoteButton
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeStore;
