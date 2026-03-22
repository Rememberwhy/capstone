import { leadershipProfiles } from "@/lib/content";

export default function LeadershipSection() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Team credibility
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] md:text-5xl">
              Strategy, design, and technical delivery working as one team.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
              Capstone is built to give clients one clear partner across positioning, digital experience, and launch execution instead of splitting critical decisions across disconnected specialists.
            </p>
          </div>

          <div className="grid gap-4">
            {leadershipProfiles.map((profile) => (
              <article
                key={profile.name}
                className="rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                      {profile.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                      {profile.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.expertise.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[color:var(--color-text-muted)] md:text-base">
                  {profile.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
