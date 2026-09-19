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
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="border-b border-white/10 px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.22em] text-white/40">
              05 / CONTACT
            </p>

            <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-white/35">
                something useful.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
              I&apos;m open to software engineering opportunities,
              technical collaborations, research-driven projects, and
              challenging product problems.
            </p>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr]">
            {/* FORM */}
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-white/35">
                SEND A MESSAGE
              </p>

              <form
                className="mt-10 space-y-7"
                onSubmit={handleSubmit}
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-white/40"
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
                    className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-white/40"
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
                    className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="you@example.com"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="font-mono text-xs text-white/40"
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
                    className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs text-white/40"
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
                    className="mt-3 w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>

                {/* STATUS */}
                {status && (
                  <p
                    className={`text-sm ${
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
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && <ArrowUpRight size={16} />}
                </button>
              </form>
            </div>

            {/* CONTACT INFORMATION */}
            <aside>
              <p className="font-mono text-xs tracking-[0.2em] text-white/35">
                CONTACT INFORMATION
              </p>

              <div className="mt-10 space-y-8">
                {/* EMAIL */}
                <a
                  href="mailto:austinibe15@gmail.com"
                  className="group flex items-start gap-4"
                >
                  <Mail
                    size={18}
                    className="mt-1 text-white/30 transition group-hover:text-white"
                  />

                  <div>
                    <p className="text-sm text-white/40">Email</p>

                    <p className="mt-1 text-base text-white transition group-hover:text-white/70">
                      austinibe15@gmail.com
                    </p>
                  </div>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/austinibe15"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-white/30 transition group-hover:text-white"
                  />

                  <div>
                    <p className="text-sm text-white/40">GitHub</p>

                    <p className="mt-1 text-base text-white transition group-hover:text-white/70">
                      github.com/austinibe15
                    </p>
                  </div>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/ezenwa-augustine-ibe-9378359b"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-white/30 transition group-hover:text-white"
                  />

                  <div>
                    <p className="text-sm text-white/40">LinkedIn</p>

                    <p className="mt-1 text-base text-white transition group-hover:text-white/70">
                      LinkedIn profile
                    </p>
                  </div>
                </a>
              </div>

              {/* AVAILABILITY */}
              <div className="mt-16 border-t border-white/10 pt-8">
                <p className="font-mono text-xs tracking-[0.2em] text-white/35">
                  AVAILABILITY
                </p>

                <p className="mt-4 text-sm leading-7 text-white/45">
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
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/30 md:flex-row">
          <span>EZENWA AUGUSTINE IBE</span>
          <span>FULL-STACK SOFTWARE ENGINEER</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}