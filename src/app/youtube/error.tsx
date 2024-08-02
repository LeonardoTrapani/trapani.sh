"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        youtube (it)
      </h1>

      <p className="prose prose-neutral dark:prose-invert">{error.message}</p>
    </section>
  );
}
