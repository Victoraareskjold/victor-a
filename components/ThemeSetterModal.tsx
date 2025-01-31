"use client";

import { useEffect, useState } from "react";

export default function ThemeSetterModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenModal) {
      setShowModal(true);

      localStorage.setItem("hasSeenWelcomeModal", "true");

      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed bottom-2 right-2 bg-zinc-100 dark:bg-zinc-800 text-white px-5 py-4 gap-5 flex flex-col rounded-lg shadow-xl text-sm animate-fadeIn max-w-80">
      <p className="dark:text-[var(--color-lightWhite)]">
        Theme automatically set to your system settings.
      </p>
      <button
        className="absolute top-3 right-4 dark:text-zinc-300 text-zinc-500"
        onClick={closeModal}
      >
        ⨉
      </button>
      <div className="loading-bar"></div>
    </div>
  );
}
