import React from "react";
import { Linkedin, Globe, Mail } from "lucide-react";

const InvestorProfile: React.FC = () => {
  const investor = {
    image: "/profiles/aperture.jpg", // update with actual path
    name: "Aperture Capital",
    email: "info@aperturecap.com",
    linkedin: "https://linkedin.com/company/aperture-capital",
    location: "New York, NY",
    thesis:
      "We invest in early-stage teams building bridges between traditional finance and decentralized rails.",
    interests: [
      "EdTech",
      "Insurance",
      "Blockchain",
      "FinTech",
      "Sustainability",
    ],
    investmentRange: "$250k – $1M",
    portfolio: [
      { name: "On-Ramp", logo: "/logos/onramp.svg" },
      { name: "StableX", logo: "/logos/stablex.svg" },
      { name: "LoopPay", logo: "/logos/looppay.svg" },
    ],
    joiningDate: "January 15, 2021",
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
      {/* Header with Image */}
      <section className="flex flex-col items-start gap-6 rounded-2xl bg-slate-800 p-8 text-white shadow-xl sm:flex-row sm:items-center">
        <img
          src={investor.image}
          alt={investor.name}
          className="h-24 w-24 rounded-full object-cover sm:mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold">{investor.name}</h1>
          <div className="mt-2 flex items-center space-x-4 text-sm font-light">
            <Mail size={14} />
            <span>{investor.email}</span>
          </div>
          <div className="mt-1 flex items-center space-x-4 text-sm font-light">
            <Linkedin size={14} />
            <a
              href={investor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="mt-1 flex items-center space-x-1 text-sm font-light">
            <Globe size={14} />
            <span>{investor.location}</span>
          </div>
          <p className="mt-4 text-sm">{investor.thesis}</p>
        </div>
      </section>

      {/* Interests */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-lg font-semibold">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {investor.interests.map((sector) => (
            <span
              key={sector}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
            >
              {sector}
            </span>
          ))}
        </div>
      </section>

      {/* Static Investment Range */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-lg font-semibold">Investment Range</h2>
        <p className="text-sm font-medium">{investor.investmentRange}</p>
      </section>

      {/* Portfolio */}
      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-lg font-semibold">Portfolio Companies</h2>
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

      {/* Joining Date */}
      <section className="rounded-xl border p-6 text-sm">
        <h2 className="mb-1 font-semibold">Platform Joining Date</h2>
        <p>{investor.joiningDate}</p>
      </section>
    </div>
  );
};

export default InvestorProfile;
