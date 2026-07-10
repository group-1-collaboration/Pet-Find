import React, { useState } from "react";
import { Check, X, Mail, Phone } from "lucide-react";
import { StatusBadge } from "../pages/Dashboard";

export default function ManageRequests({ requests, onApprove, onReject }) {
  const [filter, setFilter] = useState("pending");

  const filtered = requests.filter((r) => filter === "all" || r.status === filter);

  return (
    <div>
      <h1 className="text-4xl mb-1 text-white" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
        Adoption requests
      </h1>
      <p className="text-white mb-6 text-sm">Review and respond to adoption applications.</p>

      <div className="flex gap-3 mb-5">
        {["pending", "approved", "rejected", "all"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1.5 rounded-full capitalize border ${
              filter === f
                ? "bg-[#da760c] text-white border-[#E8A33D] font-medium"
                : "border-[#2B4038] text-[#9FB3AC] hover:text-[#F2EFE9]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((req) => (
          <div
            key={req.id}
            className="bg-white border border-[#2B4038] rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
          >
            <div className="flex-1 p-2 gap-1">
              <div className="flex items-center gap-2 mb-1 ">
                <p className="font-extrabold ">{req.adopterName}</p>
                <span className="text-[#9FB3AC] text-xs">→</span>
                <p className="text-sm text-[#da760c]">{req.petName}</p>
                <StatusBadge status={req.status} />
              </div>
              <p className="text-sm text-[#2e2d2d] mb-2">{req.message}</p>
              <div className="flex items-center gap-4 text-xs text-[#2e2d2d]">
                <p className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  {req.adopterEmail}
                </p>
                <p className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {req.adopterPhone}
                </p>
                <p>Submitted {req.dateSubmitted}</p>
              </div>
            </div>

            {req.status === "pending" && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onApprove(req.id)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-[#4FA88C] text-[#12201D] font-medium hover:opacity-90"
                >
                  <Check className="w-3.5 h-3.5" />
                  Approve
                </button>
                <button
                  onClick={() => onReject(req.id)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border border-[#D9695F] text-[#D9695F] hover:bg-[#333333]"
                >
                  <X className="w-3.5 h-3.5" />
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-[#9FB3AC] text-sm">No {filter === "all" ? "" : filter} requests.</p>
        )}
      </div>
    </div>
  );
}