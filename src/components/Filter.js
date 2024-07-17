import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ handleSearch , handleRateInput }) => {
  return (
    <div>
      <div className="input-icon">
        <span className="input-icon-addon">
          {/* Download SVG icon from http://tabler-icons.io/i/search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search…"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="display-6">
        <StarRatingComponent
          name= "rate"
          onStarClick={(value)=> handleRateInput(value)}
        />
      </div>
    </div>
  );
};

export default Filter;
