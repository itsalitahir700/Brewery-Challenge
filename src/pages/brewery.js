import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrewery } from "../store/actions/Brewery";
import DetailsCard from "../components/DetailsCard";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";

function BreweryDetails() {
  const url = require("url");
  const urlObj = url.parse(document.location.href, true);
  const id = urlObj?.query?.id;

  const brewery = useSelector((state) => state.AppState?.brewery);
  const breweryDetails = useSelector(
    (state) => state.AppState?.breweryDetailsState
  );
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleBreweryEvents = useCallback(async () => {
    setLoading(true);
    if (!brewery) {
      await dispatch(await getBrewery(id));
    }
    setLoading(false);
  }, [id, brewery, dispatch]);

  useEffect(() => {
    handleBreweryEvents();
  }, [handleBreweryEvents]);

  return (
    <>
      <div className="col-md-6 mt-4">
        <p
          className="pointer d-flex align-items-center"
          onClick={() => history.push("/")}
        >
          <IoIosArrowBack />
          Back to results
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="col-md-12 mt-4 ">
          {breweryDetails ? (
            <DetailsCard breweryDetails={breweryDetails} />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default BreweryDetails;
