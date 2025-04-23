import React from "react";

const Testimonials = () => {
  return (
    <div className="py-[100px] p-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex flex-col gap-3 p-5">
          <h2 className="heading1 text-black">
            What our clients{" "}
            <span className="text-[#7201FF]">say about us?</span>
          </h2>
          <p>
            Our testimonials reflect authentic experiences, showcasing how we've
            helped businesses grow, individuals achieve their goals, and lives
            become easier through our innovative solutions. Whether it's through
            our exceptional customer service, cutting-edge products, or
            personalized approach, each story speaks to the heart of what we do.
          </p>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="sm:-ms-4 py-6 sm:px-4">
              <blockquote>
                <span className="text-sm text-gray-800">
                I finally found a platform that gives real, unbiased reviews! The community discussions are super helpful, and I love how I can ask questions and get honest answers from real users. GadgetHeaven is my go-to for all my tech buys
                </span>

                <footer className="mt-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="shrink-0 w-5 h-5 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <div className="grow">
                      <div className="text-xs text-gray-500">Alex Thompson</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="py-6 sm:px-4">
              <blockquote>
                <span className="text-sm text-gray-800">
                I was skeptical about buying a new laptop, but the detailed reviews and user comments helped me pick the perfect one. It’s great to see honest opinions without the marketing fluff. Highly recommend GadgetHeaven!
                </span>

                <footer className="mt-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="shrink-0 w-5 h-5 rounded-full"
                      src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <div className="grow">
                      <div className="text-xs text-gray-500">
                      Sophia Lee
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="sm:-ms-4 py-6 sm:px-4">
              <blockquote>
                <span className="text-sm text-gray-800">
                What sets Suggestify apart is the community interaction. I can leave my thoughts on a product and get feedback from others who’ve used it. It feels like getting advice from friends who actually know what they’re talking about.
                </span>

                <footer className="mt-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="shrink-0 w-5 h-5 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                      alt="Avatar"
                    />
                    <div className="grow">
                      <div className="text-xs text-gray-500">Michael Patel</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="py-6 sm:px-4">
              <blockquote>
                <span className="text-sm text-gray-800">
                I love that Suggestify encourages open discussions. I feel more confident in my purchases because I can read real experiences and even ask follow-up questions. It’s like having a tech-savvy friend at my fingertips!
                </span>

                <footer className="mt-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="shrink-0 w-5 h-5 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Avatar"
                    />
                    <div className="grow">
                      <div className="text-xs text-gray-500">
                      Emily Carter
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
