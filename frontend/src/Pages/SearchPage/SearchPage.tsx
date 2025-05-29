import React, {
  type ChangeEvent,
  type SyntheticEvent,
  useEffect,
  useState,
} from "react";
import CardList from "../../Components/CardList/cardList";
import Navbar from "../../Components/Navbar/Navbar";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import type {CompanySearch} from "../../../api/company";
import {searchCompanies} from "../../../api/api";
import type {PortfolioGet} from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/ProtfolioService";
import {toast} from "react-toastify";
type Props = {};

function SearchPage({}: Props) {
  const [search, setSearch] = useState<string>("");
  const [searchRes, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[]>([]);
  const handleSearchChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const getPortfolio = function () {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        toast.warning("Could not load portfolio values");
      });
  };
  const onSearchSubmit = async function (e: SyntheticEvent) {
    e.preventDefault();
    const res = await searchCompanies(search);
    // check res content
    // if res is string type, return as error message
    if (typeof res === "string") {
      setServerError(res);
      console.log(serverError);
    } else if (Array.isArray(res)) {
      setSearchRes(res);
      console.log(searchRes);
    }
  };
  const onPortfolioCreate = function (e: any) {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not create portfolio item");
      });
  };

  const onPortfolioDelete = function (e: any) {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Stock Removed!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not remove portfolio item");
      });
  };
  useEffect(() => {
    getPortfolio();
  }, []);
  return (
    <>
      {/* <Hero /> */}
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList searchRes={searchRes} onPortfolioCreate={onPortfolioCreate} />
    </>
  );
}

export default SearchPage;
