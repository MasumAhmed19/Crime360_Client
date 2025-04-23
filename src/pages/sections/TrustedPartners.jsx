import { Link } from "react-router-dom";

const TrustedPartners = () => {
  return (
    <div className="relative overflow-hidden py-20 g2">


      <div className="relative z-10">
        <div className="max-w-5xl px-4 xl:px-0 mx-auto">
          <div className="mb-4">
            <h2 className="heading1 text-black text-center">About <span className="text-[#7201FF]">Us</span></h2>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-600 text-center">
              Welcome to Suggestify, your trusted companion for finding the best
              products that perfectly fit your needs. In a world flooded with
              countless options, making the right purchase decision can be
              overwhelming. That's where we come in! At Suggestify, we believe
              in simplifying your shopping experience by providing
              well-researched, honest, and unbiased recommendations. Whether
              you're looking for the latest technology gadgets, essential home
              appliances, or personal care products, our goal is to guide you to
              the best choices available.
            </p>

            <Link to='/about' className="btn1">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
