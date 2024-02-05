'use client';

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error occured!</h1>
      <p>Failed to create meal. Please try again later.</p>
    </main>
  );
}
