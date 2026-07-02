"use client";

import Link from "next/link";

const footer = {
  solutions: [
    "Institutions",
    "Enterprises",
    "Recruitment",
  ],

  company: [
    "About",
    "Contact",
    "Careers",
  ],

  connect: [
    "LinkedIn",
    "Email Us",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Saadhana
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Building Future-Ready Talent for an AI-Driven World.
            </p>

            <p className="mt-8 font-semibold tracking-[0.25em] text-violet-700">
              LEARN · GROW · ACHIEVE · LEAD
            </p>
          </div>

          {/* Solutions */}

          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Solutions
            </h4>

            <ul className="mt-6 space-y-4">
              {footer.solutions.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-slate-600 transition hover:text-violet-700"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Company
            </h4>

            <ul className="mt-6 space-y-4">
              {footer.company.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-slate-600 transition hover:text-violet-700"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Connect
            </h4>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-violet-700"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@saadhana.com"
                  className="text-slate-600 transition hover:text-violet-700"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Saadhana Technology Solutions. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}