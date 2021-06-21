import React, { useState } from "react";
import Loader from "../components/Loader/";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import BreweryCard from "../components/BreweryCard";

function Home() {
  const brewery = useSelector((state) => state.AppState?.breweryState);
  const [loading, setLoading] = useState(false);
  return (
    <div className="container">
      <Search setLoading={setLoading} />
      {loading ? (
        <Loader />
      ) : (
        brewery && (
          <div className="col-md-12 mt-4">
            <h5>Result found</h5>
            <BreweryCard brewery={brewery} />
          </div>
        )
      )}
    </div>
  );
}

export default Home;
