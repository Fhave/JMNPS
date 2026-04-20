import React, { useEffect } from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

const Toast = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    if (!message) return;

    // Set timer to clear the toast after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, [message, onClose]);

  if (!message) return null;

  const styles = {
    success: "bg-white border-green-200 text-green-800",
    error: "bg-white border-red-200 text-red-800",
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 fixed top-5 right-5 z-100 duration-300">
      <div
        className={`flex min-w-75 items-center gap-3 rounded-2xl border p-4 shadow-2xl ${styles[type]}`}
      >
        {type === "success" ? (
          <CheckCircle2 className="text-green-500" size={22} />
        ) : (
          <AlertCircle className="text-red-500" size={22} />
        )}

        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">
            {type === "success" ? "Success" : "Error"}
          </p>
          <p className="text-xs text-gray-600">{message}</p>
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
