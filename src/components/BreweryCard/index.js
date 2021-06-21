import React from "react";
import "./BreweryCard.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function BreweryCard({ brewery }) {
  const history = useHistory();
  return (
    <>
      {brewery.length &&
        brewery.map((item) => (
          <motion.div
            key={item?.id}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0, type: "tween" }}
            className="brewery-card card card-body mt-2"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-md-6 col-sm-6">
                <strong
                  onClick={() =>
                    history.push(`/brewery-details?id=${item?.id}`)
                  }
                >
                  {item?.name}
                </strong>
                <p className="fb-url">{`${item?.city} , ${item?.country}`}</p>
              </div>
              <div className="col-md-6 col-sm-6">
                <a href={`tel:${item?.phone}` || "#"} className="phone-num">
                  {item?.phone}
                </a>
                <br />
                <a
                  href={item?.website_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item?.website_url}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
    </>
  );
}

export default BreweryCard;
