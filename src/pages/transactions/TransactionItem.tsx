// src/pages/transactions/TransactionItem.tsx
import React from "react";
import { Clock, CheckCircle, CurrencyIcon } from "lucide-react";

export interface Transaction {
  id: string;
  date: string;         // e.g. "Jun 1, 2025"
  title: string;        // e.g. "Seed Round Investment"
  amount: number;       // e.g. 50000
  status: "Completed" | "In Progress" | "Pending";
}

interface Props {
  transaction: Transaction;
}

export const TransactionItem: React.FC<Props> = ({ transaction }) => {
  const { date, title, amount, status } = transaction;

  // Pick a badge color/icon based on status
  let statusStyles = "";
  let StatusIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> = Clock;

  if (status === "Completed") {
    statusStyles = "bg-green-100 text-green-800";
    StatusIcon = CheckCircle;
  } else if (status === "In Progress") {
    statusStyles = "bg-blue-100 text-blue-800";
    StatusIcon = Clock;
  } else if (status === "Pending") {
    statusStyles = "bg-yellow-100 text-yellow-800";
    StatusIcon = Clock;
  }

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-3">
      {/* Left side: transaction info */}
      <div className="flex items-center space-x-3">
        <CurrencyIcon className="w-6 h-6 text-gray-400" />
        <div>
          <h3 className="text-gray-900 font-medium">{title}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>

      {/* Right side: amount and status */}
      <div className="flex items-center space-x-6">
        <span className="text-gray-900 font-semibold">${amount.toLocaleString()}</span>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles}`}
        >
          <StatusIcon className="w-4 h-4 mr-1" />
          {status}
        </span>
        {/* Dropdown arrow or details button */}
        <button className="text-gray-400 hover:text-gray-600">
          {/* down‐arrow icon (e.g. Lucide ChevronDown) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
