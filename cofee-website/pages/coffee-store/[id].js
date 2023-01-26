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

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
    ],
    fallback: true,
  };
}


const CoffeeStore = (props) => {
  const router = useRouter();
  console.log(router);
  if (router.isFallback) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <>
      <h1>{props.coffeeStore.address}</h1>
      <p>{props.coffeeStore.name}</p>
    </>
  );
};

export default CoffeeStore;
