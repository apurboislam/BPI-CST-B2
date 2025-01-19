// components/ErrorFallback.tsx
"use client";

export default function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="text-center py-10 text-red-500">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
