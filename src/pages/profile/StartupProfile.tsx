import React from "react";
import { CheckCircle, Mail } from "lucide-react";

const StartupProfile: React.FC = () => {
  const startup = {
    name: "Venturly Labs",
    tagline: "Bridging Web-3 capital with real-world startups",
    industry: "Fin-tech / Web-3",
    stage: "Seed",
    location: "Boston, MA",
    website: "https://venturly.io",
    fundraisingGoal: 1500000,
    raised: 600000,
    runway: "12 months",
    founders: [
      { name: "Labhesh Chhajed", role: "CEO", img: "/avatars/labhesh.jpg" },
      { name: "Jane Doe", role: "CTO", img: "/avatars/jane.jpg" },
    ],
  };

  const pctRaised = Math.round(
    (startup.raised / startup.fundraisingGoal) * 100
  );

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      {/* Header */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">{startup.name}</h1>
        <p className="mt-2 text-lg">{startup.tagline}</p>
        <div className="mt-4 flex gap-4">
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
          >
            Visit website
          </a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow hover:bg-indigo-50">
            <Mail size={16} />
            Contact founders
          </button>
        </div>
      </section>

      {/* Snapshot */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-lg font-semibold">Snapshot</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Industry:</span> {startup.industry}
            </li>
            <li>
              <span className="font-medium">Stage:</span> {startup.stage}
            </li>
            <li>
              <span className="font-medium">Location:</span>{" "}
              {startup.location}
            </li>
            <li>
              <span className="font-medium">Runway:</span> {startup.runway}
            </li>
          </ul>
        </div>

        {/* Fund-raising progress */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-lg font-semibold">Funding Round</h2>
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span>${startup.raised.toLocaleString()} raised</span>
            <span>${startup.fundraisingGoal.toLocaleString()} goal</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded bg-gray-200">
            <div
              className="h-full rounded bg-green-500"
              style={{ width: `${pctRaised}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">{pctRaised}% funded</p>
        </div>
      </section>

      {/* About */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-lg font-semibold">About</h2>
        <p className="text-sm leading-relaxed">
          Venturly Labs is building a decentralized investment platform that
          lets founders raise milestone-based funds in USDC or crypto without
          legal headaches. Our smart-contract vaults automate vesting and
          milestone checks, cutting admin time by 70 %.
        </p>
      </section>

      {/* Team */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-6 text-lg font-semibold">Founding Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {startup.founders.map((f) => (
            <div key={f.name} className="flex flex-col items-center text-center">
              <img
                src={f.img}
                alt={f.name}
                className="h-20 w-20 rounded-full object-cover shadow"
              />
              <p className="mt-3 text-sm font-medium">{f.name}</p>
              <p className="text-xs text-gray-500">{f.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-action */}
      <section className="rounded-xl bg-indigo-50 p-6 text-center">
        <h3 className="mb-4 text-xl font-semibold">
          Interested in this raise?
        </h3>
        <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
          <CheckCircle size={18} /> Join Deal Room
        </button>
      </section>
    </div>
  );
};

export default StartupProfile;
