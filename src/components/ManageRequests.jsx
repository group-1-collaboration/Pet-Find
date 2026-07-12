import React, { useState } from "react";
import { Check, X, Mail, Phone } from "lucide-react";
import { StatusBadge } from "../pages/Dashboard";

function buildNotificationEmail(req, status) {
  if (status === "approved") {
    return {
      subject: `Your adoption request for ${req.petName} has been approved!`,
      body: `Hi ${req.adopterName},

Great news — your request to adopt ${req.petName} has been approved!

Our team will be in touch shortly with next steps to finalize the adoption. In the meantime, feel free to reach out to us with any questions.

Thank you for choosing to adopt,
Pet Find`,
    };
  }

  return {
    subject: `Update on your adoption request for ${req.petName}`,
    body: `Hi ${req.adopterName},

Thank you for your interest in adopting ${req.petName}, and for taking the time to submit an application.

After careful review, we're not able to move forward with this particular request at this time. We'd encourage you to check back with us, as we regularly welcome new pets looking for homes.

Thank you again for your interest in adoption,
Pet Find`,
  };
}

function buildMailtoLink(req, status) {
  const { subject, body } = buildNotificationEmail(req, status);
  return `mailto:${encodeURIComponent(req.adopterEmail)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ManageRequests({ requests, onApprove, onReject }) {
  const [filter, setFilter] = useState("pending");
  const [toast, setToast] = useState(null);

  const filtered = requests.filter((r) => filter === "all" || r.status === filter);

  function notifyAdopter(req, status) {
    const link = buildMailtoLink(req, status);
    // Opens the admin's default email client with the notification pre-filled.
    window.open(link, "_self");
    setToast(`Notification email opened for ${req.adopterName} (${req.adopterEmail})`);
    setTimeout(() => setToast(null), 4000);
  }

  function handleApprove(req) {
    onApprove(req.id);
    notifyAdopter(req, "approved");
  }

  function handleReject(req) {
    onReject(req.id);
    notifyAdopter(req, "rejected");
  }

  return (
    <div>
      <h1 className="text-4xl mb-1" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
        Adoption requests
      </h1>
      <p className="mb-6 text-sm">Review and respond to adoption applications.</p>

      {toast && (
        <div className="mb-4 rounded-lg border border-[#4FA88C] bg-[#4FA88C22] text-[#12201D] text-sm px-4 py-2.5 flex items-center gap-2">
          <Mail className="w-4 h-4 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex gap-3 mb-5">
        {["pending", "approved", "rejected", "all"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1.5 rounded-full capitalize border ${
              filter === f
                ? "bg-[#da760c] text-white border-[#E8A33D] font-medium"
                : "border-[#2B4038]  hover:text-[#4e4e4e]"
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
            className="bg-white border border-[#2B4038] rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 shadow-sm"
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
                  onClick={() => handleApprove(req)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-[#4FA88C] text-[#12201D] font-medium hover:opacity-90"
                >
                  <Check className="w-3.5 h-3.5" />
                  Approve
                </button>
                <button
                  onClick={() => handleReject(req)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border border-[#D9695F] text-[#D9695F] hover:bg-[#333333]"
                >
                  <X className="w-3.5 h-3.5" />
                  Reject
                </button>
              </div>
            )}

            {req.status !== "pending" && (
              <div className="shrink-0">
                <button
                  onClick={() => notifyAdopter(req, req.status)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border border-[#2B4038] hover:text-[#4e4e4e]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Resend notification
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