// import Card from "./components/card/card";
import { searchCompanies } from "@/api";
import CardList from "./components/cardList/cardList";
import Search from "./components/search/search";
export default async function Home() {
  const data = await searchCompanies("tsla");
  console.log(data);
  return (
    <div>
      <Search />
      <CardList />
    </div>
  );
}
