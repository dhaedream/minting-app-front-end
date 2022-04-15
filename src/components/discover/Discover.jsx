import React from "react";
import alienPet from "../../assets/alien-pet-art.png";

const Discover = () => {
  return (
    <div>
      <div className="left">
        <h1>The Coolest NFT sidekicks are here! Rockstar NFT Pets!</h1>
        <p>
          I believe that space travel will one day become as common as airline
          travel is today. I’m convinced, however, that the true future of space
          travel does not lie with government agencies.
        </p>
        <button>Explore</button>
      </div>
      <div className="right">
        <img src={alienPet} alt="alien-pet" />
        <card>
          <span>Meta in Style</span>
          <p>Meta Sidekicks</p>
        </card>
      </div>
    </div>
  );
};

export default Discover;
