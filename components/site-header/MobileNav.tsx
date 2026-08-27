"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav, contactInfo, socialLinks } from "@/lib/nav-data";
import {
  ChevronDownIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
} from "./icons";
import { AppointmentButton } from "./AppointmentButton";

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-navy/5"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={close}
            className="absolute inset-0 bg-black/40"
          />
          <div className="relative flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
              <span className="text-sm font-semibold text-brand-navy">Menu</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-navy/5"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Primary" className="flex-1 px-2 py-2">
              <ul>
                {primaryNav.map((item) => {
                  const isExpanded = expanded === item.label;
                  return (
                    <li
                      key={item.label}
                      className="border-b border-black/5 last:border-0"
                    >
                      <div className="flex items-center justify-between">
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={close}
                            className="flex-1 px-2 py-3 text-sm font-medium text-brand-navy"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="flex-1 px-2 py-3 text-sm font-medium text-brand-navy">
                            {item.label}
                          </span>
                        )}
                        {item.columns ? (
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded(isExpanded ? null : item.label)
                            }
                            aria-expanded={isExpanded}
                            aria-label={`Toggle ${item.label} submenu`}
                            className="flex h-9 w-9 shrink-0 items-center justify-center text-brand-navy"
                          >
                            <ChevronDownIcon
                              className={`h-4 w-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        ) : null}
                      </div>

                      {item.columns && isExpanded ? (
                        <div className="space-y-3 px-4 pb-3">
                          {item.columns.map((column, columnIndex) => (
                            <div key={columnIndex}>
                              {column.heading ? (
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-teal">
                                  {column.heading}
                                </p>
                              ) : null}
                              <ul className="space-y-1">
                                {column.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      onClick={close}
                                      target={link.external ? "_blank" : undefined}
                                      rel={
                                        link.external
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                      className="block py-1 text-sm text-zinc-600"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-black/5 px-4 py-4">
              <AppointmentButton className="mb-4 w-full" />
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-2 py-1.5 text-sm text-brand-navy"
              >
                <PhoneIcon className="h-4 w-4" />
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={contactInfo.emailHref}
                className="flex items-center gap-2 py-1.5 text-sm text-brand-navy"
              >
                <MailIcon className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon =
                    socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
