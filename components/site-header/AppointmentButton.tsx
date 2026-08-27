import Link from "next/link";

export function AppointmentButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact-us/"
      className={`inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-navy-deep ${className}`}
    >
      Appointment
    </Link>
  );
}
