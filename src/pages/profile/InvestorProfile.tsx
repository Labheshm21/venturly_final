import React from "react";
import { Linkedin, Globe, Mail } from "lucide-react";

const InvestorProfile: React.FC = () => {
  const investor = {
    name: "Aperture Capital",
    partner: "Labhesh Chhajed",
    focus: ["Fin-tech", "Marketplaces", "Web-3 Infrastructure"],
    ticket: "$100k – $500k",
    aum: "$50 M",
    location: "New York, NY",
    website: "https://aperturecap.com",
    thesis:
      "We invest in early-stage teams building bridges between traditional finance and decentralized rails.",
    portfolio: [
      { name: "On-Ramp", logo: "/logos/onramp.svg" },
      { name: "StableX", logo: "/logos/stablex.svg" },
      { name: "LoopPay", logo: "/logos/looppay.svg" },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
      {/* Header */}
      <section className="flex flex-col items-start gap-6 rounded-2xl bg-slate-800 p-8 text-white shadow-xl sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">{investor.name}</h1>
          <p className="mt-1 text-sm font-light">Partner: {investor.partner}</p>
          <p className="mt-4 text-sm">{investor.thesis}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={investor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded bg-white/10 px-4 py-2 text-xs font-medium hover:bg-white/20"
            >
              <Globe size={14} /> Website
            </a>
            <button className="inline-flex items-center gap-1 rounded bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow hover:bg-slate-100">
              <Mail size={14} /> Message
            </button>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-lg font-semibold">Snapshot</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-medium">Focus:</span>{" "}
            {investor.focus.join(", ")}
          </li>
          <li>
            <span className="font-medium">Ticket Size:</span>{" "}
            {investor.ticket}
          </li>
          <li>
            <span className="font-medium">Assets under Management:</span>{" "}
            {investor.aum}
          </li>
          <li>
            <span className="font-medium">Location:</span>{" "}
            {investor.location}
          </li>
        </ul>
      </section>

      {/* Portfolio */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-6 text-lg font-semibold">Select Portfolio</h2>
        <div className="flex flex-wrap gap-6">
          {investor.portfolio.map((p) => (
            <div
              key={p.name}
              className="flex w-32 flex-col items-center gap-2 text-center"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-12 w-12 object-contain"
              />
              <p className="text-xs font-medium">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social / CTA */}
      <section className="rounded-xl bg-gray-50 p-6 text-center">
        <h3 className="mb-4 text-xl font-semibold">
          Connect with {investor.partner}
        </h3>
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com"
            className="rounded-full bg-indigo-600 p-3 text-white shadow hover:bg-indigo-700"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:partner@aperturecap.com"
            className="rounded-full bg-indigo-600 p-3 text-white shadow hover:bg-indigo-700"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InvestorProfile;
