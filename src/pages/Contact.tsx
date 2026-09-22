
import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import Navbar from "../components/Navbar";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message."
        );
      }

      setStatus("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="border-b border-white/10 px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-40">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 sm:text-xs sm:tracking-[0.22em]">
              05 / CONTACT
            </p>

            <h1 className="mt-5 max-w-5xl break-words text-3xl font-medium leading-[1.02] tracking-[-0.035em] sm:mt-7 sm:text-5xl md:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-white/35">
                something useful.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl break-words text-[15px] leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              I&apos;m open to software engineering opportunities,
              technical collaborations, research-driven projects, and
              challenging product problems.
            </p>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] lg:gap-20">
            {/* FORM */}
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
                SEND A MESSAGE
              </p>

              <form
                className="mt-8 space-y-6 sm:mt-10 sm:space-y-7"
                onSubmit={handleSubmit}
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] text-white/40 sm:text-xs"
                  >
                    NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-2.5 w-full min-w-0 border-b border-white/15 bg-transparent px-0 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-3 sm:py-4 sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] text-white/40 sm:text-xs"
                  >
                    EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-2.5 w-full min-w-0 border-b border-white/15 bg-transparent px-0 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-3 sm:py-4 sm:text-base"
                    placeholder="you@example.com"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="font-mono text-[10px] text-white/40 sm:text-xs"
                  >
                    SUBJECT
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={255}
                    value={form.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-2.5 w-full min-w-0 border-b border-white/15 bg-transparent px-0 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-3 sm:py-4 sm:text-base"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] text-white/40 sm:text-xs"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-2.5 w-full min-w-0 resize-none border-b border-white/15 bg-transparent px-0 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-3 sm:py-4 sm:text-base"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>

                {/* STATUS */}
                {status && (
                  <p
                    className={`break-words text-sm ${
                      status === "Message sent successfully."
                        ? "text-white/70"
                        : "text-white/50"
                    }`}
                    role="status"
                  >
                    {status}
                  </p>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-50 sm:px-7"
                >
                  <span>
                    {isSubmitting ? "Sending..." : "Send message"}
                  </span>

                  {!isSubmitting && (
                    <ArrowUpRight size={16} className="shrink-0" />
                  )}
                </button>
              </form>
            </div>

            {/* CONTACT INFORMATION */}
            <aside className="min-w-0 lg:pt-0">
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
                CONTACT INFORMATION
              </p>

              <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
                {/* EMAIL */}
                <a
                  href="mailto:austinibe15@gmail.com"
                  className="group flex min-w-0 items-start gap-4"
                >
                  <Mail
                    size={18}
                    className="mt-1 shrink-0 text-white/30 transition group-hover:text-white"
                  />

                  <div className="min-w-0">
                    <p className="text-sm text-white/40">
                      Email
                    </p>

                    <p className="mt-1 break-all text-[15px] text-white transition group-hover:text-white/70 sm:text-base">
                      austinibe15@gmail.com
                    </p>
                  </div>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/austinibe15"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-w-0 items-start gap-4"
                >
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-white/30 transition group-hover:text-white"
                  />

                  <div className="min-w-0">
                    <p className="text-sm text-white/40">
                      GitHub
                    </p>

                    <p className="mt-1 break-all text-[15px] text-white transition group-hover:text-white/70 sm:text-base">
                      github.com/austinibe15
                    </p>
                  </div>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/ezenwa-augustine-ibe-9378359b"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-w-0 items-start gap-4"
                >
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-white/30 transition group-hover:text-white"
                  />

                  <div className="min-w-0">
                    <p className="text-sm text-white/40">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-[15px] text-white transition group-hover:text-white/70 sm:text-base">
                      LinkedIn profile
                    </p>
                  </div>
                </a>
              </div>

              {/* AVAILABILITY */}
              <div className="mt-12 border-t border-white/10 pt-7 sm:mt-16 sm:pt-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
                  AVAILABILITY
                </p>

                <p className="mt-4 break-words text-[13px] leading-6 text-white/45 sm:text-sm sm:leading-7">
                  Based in Nigeria. Open to remote software engineering
                  opportunities, technical collaborations, and selected
                  relocation opportunities.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-4 py-7 sm:px-6 sm:py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[9px] leading-5 text-white/30 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>EZENWA AUGUSTINE IBE</span>
          <span>FULL-STACK SOFTWARE ENGINEER</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

