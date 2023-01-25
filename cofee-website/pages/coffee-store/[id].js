import { useRouter } from "next/router";
import coffeeStoreData from "../../data/5.1 coffee-stores.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === 0; //dynamic id
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
  };
}

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return <h1>Coffee Shop {router.query.id}</h1>;
};

export default CoffeeStore;