import React from "react";
import { useQuery } from "../components/hooks/useQuery";
import Movies from "../components/Movies/Movies";
import Search from "../components/Search/Search";

const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");
  return (
    <>
      <Search />
      <Movies key={search}/>
    </>
  );
};

export default LandingPage;
