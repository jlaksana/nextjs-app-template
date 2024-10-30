"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <h1>Aiden Tung Test Mock Project</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>Total clicks: {count}</h1>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </main>
  );
}
