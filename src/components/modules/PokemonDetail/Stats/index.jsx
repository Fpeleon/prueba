// import { HeightIcon, WeightIcon } from "../../../../assets/stats";

import "./Stats.css";

export const Stats = ({ pokemon }) => {
  return (
    <div className="stats">
      <div className="item">
        {/* <WeightIcon /> */}
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className="item">
        {/* <HeightIcon /> */}
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
