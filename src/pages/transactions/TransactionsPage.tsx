// src/pages/transactions/TransactionsPage.tsx
import React, { useState, useEffect } from "react";
import { TransactionItem, Transaction } from "./TransactionItem";
import { X, Calendar, DollarSign, FileText, CheckCircle, Clock } from "lucide-react";

const sampleTransactions: Transaction[] = [
  {
    id: "1",
    date: "May 30, 2025",
    title: "MVP Seed Funding",
    amount: 50000,
    status: "Completed",
  },
  {
    id: "2",
    date: "Jun 01, 2025",
    title: "Beta Testing Grant",
    amount: 30000,
    status: "In Progress",
  },
  {
    id: "3",
    date: "Jun 15, 2025",
    title: "Marketing Campaign Payout",
    amount: 25000,
    status: "Pending",
  },
  {
    id: "4",
    date: "Jul 01, 2025",
    title: "Market Expansion Round",
    amount: 40000,
    status: "Pending",
  },
];

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [status, setStatus] = useState<"Completed" | "In Progress" | "Pending">("Pending");

  useEffect(() => {
    setTransactions(sampleTransactions);
  }, []);

  // Summary counts
  const totalCount = transactions.length;
  const completedCount = transactions.filter((t) => t.status === "Completed").length;
  const inProgressCount = transactions.filter((t) => t.status === "In Progress").length;
  const pendingCount = transactions.filter((t) => t.status === "Pending").length;

  // Handler for saving a new transaction (for now, just logs and closes modal)
  const handleSave = () => {
    // Normally you'd send this to a server or update your context/state
    const newTx: Transaction = {
      id: Math.random().toString(36).substring(2, 9),
      title: title.trim() || "Untitled",
      date,
      amount: typeof amount === "number" ? amount : 0,
      status,
    };
    setTransactions((prev) => [...prev, newTx]);
    // Reset form and close
    setTitle("");
    setDate("");
    setAmount("");
    setStatus("Pending");
    setShowModal(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar/Header come from layout; this component is just the page content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none"
          >
            {/* Plus icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Transaction
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{totalCount}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            {/* Completed */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{completedCount}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            {/* In Progress */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">In Progress</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{inProgressCount}</p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            {/* Pending */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{pendingCount}</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Transaction List */}
          <div>
            {transactions.map((t) => (
              <TransactionItem key={t.id} transaction={t} />
            ))}
            {transactions.length === 0 && (
              <p className="text-gray-500 text-center py-10">No transactions found.</p>
            )}
          </div>
        </main>
      </div>

      {/* ◆ Add Transaction Modal ◆ */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-md mx-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Add New Transaction</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-4 space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="tx-title" className="block text-sm font-medium text-gray-700">
                  Transaction Title
                </label>
                <input
                  type="text"
                  id="tx-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Seed Round Wire"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="tx-date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="tx-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Amount */}
              <div>
                <label htmlFor="tx-amount" className="block text-sm font-medium text-gray-700">
                  Amount ($)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    id="tx-amount"
                    value={amount}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAmount(val === "" ? "" : parseFloat(val));
                    }}
                    placeholder="e.g. 25000"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Status */}
              <div>
                <label htmlFor="tx-status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="tx-status"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as "Completed" | "In Progress" | "Pending")
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none sm:text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none sm:text-sm"
              >
                Save Transaction
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ◆ End of Modal ◆ */}
    </div>
  );
};

export default TransactionsPage;
