import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./DetailsCard.css";

function DetailsCard({ breweryDetails }) {
  const [url, seturl] = useState("");

  useEffect(() => {
    if (breweryDetails.latitude || breweryDetails.longitude) {
      seturl(
        "https://maps.google.com/maps?q=" +
          breweryDetails?.latitude +
          "," +
          breweryDetails?.longitude +
          "&hl=es;z=14&output=embed"
      );
    }
  }, [breweryDetails]);
  return (
    <motion.div
      initial={{ opacity: 0, y: "-4vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="row"
    >
      <div className="col-md-12 col-sm-21 mt-2">
        <div className="e-card card-body">
          <div className="heading">{breweryDetails?.name || "-"} Details</div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div>
                <h6>Country</h6>
                <p>{breweryDetails?.country || "-"}</p>
              </div>
              <div className="mt-2">
                <h6>State</h6>
                <p>{breweryDetails?.state || "-"}</p>
              </div>

              <div className="mt-2">
                <h6>Type</h6>
                <p>{breweryDetails?.brewery_type || "-"}</p>
              </div>
              <div className="mt-2">
                <h6>Website</h6>
                <p>{breweryDetails?.website_url || "-"}</p>
              </div>
            </div>
            <div className="col-6">
              <div>
                <h6>City</h6>
                <p>{breweryDetails?.city || "-"}</p>
              </div>
              <div className="mt-2">
                <h6>Street</h6>
                <p>{breweryDetails?.street || "-"}</p>
              </div>
              <div className="mt-2">
                <h6>Phone</h6>
                <p>{breweryDetails?.phone || "-"}</p>
              </div>
            </div>
          </div>
          {url ? (
            <iframe
              title="location"
              className="mt-2"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              src={url}
            ></iframe>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default DetailsCard;
