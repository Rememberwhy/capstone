export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</p>
      <h1 className="mt-4 text-5xl font-semibold">Start a project</h1>
      <p className="mt-6 text-white/70">
        Tell us about your brand, website, or digital project.
      </p>

      <form className="mt-10 space-y-6">
        <div>
          <label className="mb-2 block text-sm text-white/70">Name</label>
          <input
            type="text"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-white/30"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-white/30"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">Project details</label>
          <textarea
            rows={6}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-white/30"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          Send Inquiry
        </button>
      </form>
    </main>
  );
}