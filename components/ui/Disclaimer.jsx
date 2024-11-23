/** @format */

// components/Disclaimer.js

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center p-4 bg-gray-100 border-l-4 border-blue-500 rounded-lg shadow-sm">
        <div className="w-2 h-10 bg-blue-500 mr-4 rounded-lg"></div>
        <p className="text-sm text-gray-700">
          <strong>Disclaimer:</strong> This ebook is for{" "}
          <strong>educational purposes only</strong> and is not intended to
          provide specific financial or investment advice. The strategies and
          tips included are meant to help you understand the fundamentals of
          Forex trading, but do not guarantee financial gains. Always do your
          own research and consult with a licensed financial advisor before
          making any investment decisions.
        </p>
      </div>
    </div>
  );
}
