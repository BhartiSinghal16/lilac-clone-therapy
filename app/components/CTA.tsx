"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-secondary)]"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl font-serif text-[var(--color-primary)] mb-6">
          Ready to Begin Your Healing Journey?
        </h2>

        <p className="mb-10 text-gray-700">
          Schedule a consultation and take the first step toward emotional wellness.
        </p>

        {/* Contact Form */}
        <form className="grid gap-6 text-left">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          />

          <textarea
            rows={4}
            placeholder="How can I help you?"
            className="w-full p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          />

          <button
            type="submit"
            className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-md 
            transition-all duration-300 ease-in-out
            hover:bg-[var(--color-accent)]
            hover:-translate-y-1
            hover:shadow-xl"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

