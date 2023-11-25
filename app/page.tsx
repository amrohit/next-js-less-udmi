'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // window.alert("Welcome to Indie Gamer!");
  }, []);
  console.log('[HomePage] rendering', 'test');
  return (
    <>
      <h1>Indie Gamer</h1>
      <p>Only the best game reviewed for you.</p>
    </>
  );
}
