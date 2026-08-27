import Link from "next/link";

export function AppointmentButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact-us/"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-navy-deep ${className}`}
    >
      Appointment
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
