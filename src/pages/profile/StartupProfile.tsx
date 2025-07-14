// src/pages/profile/StartupProfile.tsx

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Startup } from "../../types/Startup";  // import the new type
import { Mail, UploadCloud, FileText } from "lucide-react";
import { mockStartups } from "../directory/StartupDirectory";

const StartupProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // TypeScript now knows mockStartups is Startup[]
  const startup = mockStartups.find((s) => s.id === id) as Startup | undefined;

  if (!startup) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      {/* Header */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">{startup.name}</h1>
            <p className="mt-2 text-lg">{startup.tagline}</p>
          </div>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-md text-sm">
            Edit
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-2 rounded-lg text-sm font-medium"
          >
            Visit Website
          </a>
          <button className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-5 py-2 rounded-lg text-sm font-medium">
            <Mail size={16} /> Contact Founders
          </button>
        </div>
      </section>

      {/* Problem */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Problem</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <textarea
          readOnly
          value={startup.problem}
          className="w-full h-24 mt-2 p-4 bg-indigo-50 border rounded resize-none text-sm"
        />
      </section>

      {/* Solution */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Solution</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <textarea
          readOnly
          value={startup.solution}
          className="w-full h-24 mt-2 p-4 bg-indigo-50 border rounded resize-none text-sm"
        />
      </section>

      {/* Market Opportunity */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Market Opportunity</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <textarea
          readOnly
          value={startup.marketOpportunity}
          className="w-full h-24 mt-2 p-4 bg-indigo-50 border rounded resize-none text-sm"
        />
      </section>

      {/* Traction */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Traction</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <div className="mt-2">
          {startup.traction.type === "image" ? (
            <img src={startup.traction.src} alt={startup.traction.alt} className="w-full rounded" />
          ) : (
            <a
              href={startup.traction.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 text-sm"
            >
              <FileText size={20} />
              <span className="ml-2">View Traction PDF</span>
            </a>
          )}
        </div>
      </section>

      {/* Top Reasons */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Top Reasons to Invest</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <ul className="list-decimal list-inside mt-2 space-y-1 text-sm">
          {startup.reasonsToInvest.map((reason, idx) => (
            <li key={idx}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Business Details */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Business Details</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div><strong>Equity Offered:</strong> {startup.businessDetails.equityOffered}</div>
          <div><strong># Investors:</strong> {startup.businessDetails.investorsCount}</div>
          <div><strong>Total Raised:</strong> {startup.businessDetails.totalRaised}</div>
          <div><strong>Min Investment:</strong> {startup.businessDetails.minInvestment}</div>
          <div><strong>Valuation:</strong> {startup.businessDetails.valuation}</div>
        </div>
      </section>

      {/* Data Room */}
      <section className="rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Data Room</h2>
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
        </div>
        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-2 text-indigo-600 cursor-pointer hover:underline text-sm">
            <UploadCloud /> Upload Company Documents
            <input type="file" className="sr-only" multiple />
          </label>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><strong>Registration No.:</strong> {startup.dataRoom.registrationNumber}</div>
            <div><strong>Established:</strong> {startup.dataRoom.established}</div>
            <div><strong>Company Size:</strong> {startup.dataRoom.companySize}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupProfile;
