import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/5.1 coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";
import nearMe from '../../public/static/icons/nearMe.svg'
import places from '../../public/static/icons/places.svg'
import star from '../../public/static/icons/star.svg'
export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

const paths = coffeeStoresData.map((coffeeStore) => {
  return {
    params: {
      id: coffeeStore.id.toString(),
    },
  };
});

export function getStaticPaths() {
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { address, name, neighbourhood, imgUrl } =
    props.coffeeStore;
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
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src={nearMe}
              width="24"
              height="24"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={places} width="24" height="24" />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={star} width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeStore;
