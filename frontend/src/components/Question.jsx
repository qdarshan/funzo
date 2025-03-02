import React from "react";

export const Question = () => {
  const questions = {
    question: "What is your goal?",
    options: [
      "Relax and unwind",
      "Fuel imagination and creativity",
      "Explore new ideas and concepts",
      "Expand knowledge and understanding",
    ],
    currentStep: 1,
    totalSteps: 5,
  };

  return (
    <div className="h-screen bg-gradient-to-br from-sky-950 to-blue-900 flex items-center justify-center">
      <div className="w-11/12 max-w-3xl bg-white/10 backdrop-blur-lg shadow-xl rounded-3xl border border-white/20 p-8">
        <div className="text-center mb-6">
          <p className="text-sm text-yellow-300 tracking-wide">
            Step {questions.currentStep} / {questions.totalSteps}
          </p>
          <h1 className="text-3xl font-extrabold text-white drop-shadow-lg mt-2">
            {questions.question}
          </h1>
          <p className="text-gray-300 mt-2">Select one answer</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {questions.options.map((option, index) => (
            <button
              key={index}
              className="bg-white/10 border border-white/20 text-white font-medium py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 focus:ring-2 focus:ring-yellow-400"
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            Previous
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-300 to-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:brightness-110 transition-all duration-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
