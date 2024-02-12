import React from "react";
import { socialMediaPosts } from "../constants";

const SocialmediaPost = () => {
  return (
    <section className="w-full container mx-auto relative py-8">
      <h1 className="font-bold text-[24px] mt-7 pl-3 px-2 montserrat">
        Made By You
      </h1>
      <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
        We love to see your custom creations. Post a photo on social media and
        add us for a chance to be featured here.
      </p>
      <div className="flex justify-between">
        {socialMediaPosts.map((post, index) => (
          <div key={index}>
            <div className="py-3">
              <img
                src={post.image}
                className="w-full max-w-[240px] hover-transition"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialmediaPost;
