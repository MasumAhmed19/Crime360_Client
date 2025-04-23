import { useState } from "react";


const FAQSections = () => {
  const temp = [
    {
      ques: "What is Suggestify?",
      ans: "Suggestify is a platform that provides personalized recommendations based on user preferences and interests, helping users discover new products, content, or experiences.",
    },
    {
      ques: "How does Suggestify generate recommendations?",
      ans: "Suggestify uses advanced algorithms, including collaborative filtering and content-based filtering, to analyze user behavior and preferences, providing tailored suggestions that are relevant and personalized.",
    },
    {
      ques: "Is my data secure with Suggestify?",
      ans: "Yes, Suggestify prioritizes user privacy and data security. We employ industry-standard security measures to protect user data and ensure that it is only used for generating personalized recommendations.",
    },
    {
      ques: "Can I customize my recommendations on Suggestify?",
      ans: "Absolutely! Suggestify allows users to customize their preferences, ensuring that the recommendations align closely with their tastes and interests.",
    },
  ];

  return (
    <div className="g4 py-[110px] -mt-[5px] relative p-5">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="text-center font-semibold">
            <h3 className="heading1">Frequently <span className="text-[#7201FF]">Asked Questions</span></h3>
        </div>
        <div className="md:w-3/4 mx-auto flex flex-col gap-5 m-5">
          {temp.map((item, index) => (
            <div
              key={index}
              className="bg-[#17312F] border border-[#7201FF] collapse"
            >
              <input
                type="checkbox"
                className="peer"
              />
              <div className="collapse-title  bg-[#EEE8FE] text-black peer-checked:bg-[#7201FF] peer-checked:text-white font-semibold text-md md:text-xl">
                {item.ques}
              </div>
              <div className="collapse-content bg-[#EEE8FE] text-black peer-checked:bg-[#7201FF] peer-checked:text-white">
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSections;
