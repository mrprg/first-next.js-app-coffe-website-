import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/5.1 coffee-stores.json";

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
  const { address, name, neighbourhood } =
    props.coffeeStore;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back To Home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </>
  );
};

export default CoffeeStore;
