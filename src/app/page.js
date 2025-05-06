'use client';
import { useState } from 'react';

export default function Home() {
  const [numbers, setNumbers] = useState([]);

  const generateLottoNumbers = () => {
    const newNumbers = [];
    while (newNumbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!newNumbers.includes(num)) {
        newNumbers.push(num);
      }
    }
    setNumbers(newNumbers.sort((a, b) => a - b));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">로또 번호 생성기</h1>
        
        <div className="flex gap-2 mb-8">
          {numbers.map((num, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold"
            >
              {num}
            </div>
          ))}
        </div>

        <button
          onClick={generateLottoNumbers}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          번호 생성하기
        </button>
      </div>
    </main>
  );
} 