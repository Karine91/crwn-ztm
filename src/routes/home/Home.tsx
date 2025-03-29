import Directory from "../../components/directory/Directory";
import type { Route } from "./+types/Home";

export function meta() {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to the shop" },
  ];
}

export async function clientLoader() {
  return {
    categories: [
      {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      },
      {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      },
      {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      },
      {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      },
      {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      },
    ],
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Directory categories={loaderData.categories} />;
}
