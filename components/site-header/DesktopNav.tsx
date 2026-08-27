import Link from "next/link";
import { primaryNav } from "@/lib/nav-data";
import { ChevronDownIcon } from "./icons";

export function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center">
        {primaryNav.map((item) => (
          <li key={item.label} className="group relative">
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-navy transition-colors hover:text-brand-teal"
              >
                {item.label}
                {item.columns ? (
                  <ChevronDownIcon className="h-3.5 w-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                ) : null}
              </Link>
            ) : (
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-navy transition-colors hover:text-brand-teal"
              >
                {item.label}
                <ChevronDownIcon className="h-3.5 w-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
              </button>
            )}

            {item.columns ? (
              <div className="nav-dropdown absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="flex gap-6 rounded-2xl border border-black/5 bg-white/95 p-5 shadow-2xl shadow-brand-navy/15 ring-1 ring-black/5 backdrop-blur-xl">
                  {item.columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="min-w-[190px]">
                      {column.heading ? (
                        column.headingHref ? (
                          <Link
                            href={column.headingHref}
                            className="group/heading mb-3 flex items-center gap-1.5 border-b border-brand-teal/20 pb-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-teal"
                          >
                            <span className="h-3 w-1 rounded-full bg-brand-teal" />
                            {column.heading}
                          </Link>
                        ) : (
                          <p className="mb-3 flex items-center gap-1.5 border-b border-brand-teal/20 pb-2 text-sm font-bold text-brand-navy">
                            <span className="h-3 w-1 rounded-full bg-brand-teal" />
                            {column.heading}
                          </p>
                        )
                      ) : null}
                      <ul className="space-y-0.5">
                        {column.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-brand-teal/8 hover:text-brand-teal"
                            >
                              <span>{link.label}</span>
                              {link.external ? (
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  aria-hidden="true"
                                  className="shrink-0 opacity-50"
                                >
                                  <path
                                    d="M7 17L17 7M17 7H8M17 7V16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
