import React from "react";

function Home() {
  return (
    <div className="relative w-full text-center">
      <img
        className="w-full h-[400px] object-cover"
        src="https://media.licdn.com/dms/image/v2/D4D12AQGXbvPmLCB6vA/article-cover_image-shrink_720_1280/B4DZY35J58HIAM-/0/1744694458064?e=2147483647&v=beta&t=1SqZTnGesHgGVudgsqWvMqBIbRcEMtKRgKu9Lde7FCA"
        alt=""
      />

      <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white
      text-shadow-blue-500 p-4">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Welcome to MindCare AI
        </h2>
        <p className="text-lg max-w-2xl drop-shadow-sm">
          AI-powered mental health triage and support assistant
        </p>
      </div>
    </div>
  );
}

export default Home;
