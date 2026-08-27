const alignClasses = {
  center: "text-center items-center",
  left: "text-left items-start",
  responsive: "text-center items-center lg:text-left lg:items-start",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  variant = "light",
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  variant?: "light" | "dark";
  align?: "center" | "left" | "responsive";
  className?: string;
}) {
  const dark = variant === "dark";

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${className}`}>
      {eyebrow ? (
        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase shadow-sm backdrop-blur-md ${
            dark
              ? "border-white/20 bg-white/10 text-white/85 shadow-black/20"
              : "border-brand-navy/10 bg-white/60 text-brand-teal shadow-brand-navy/5"
          }`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl ${
          dark
            ? "bg-gradient-to-br from-white via-white to-brand-teal"
            : "bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
