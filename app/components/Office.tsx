export default function Office() {
  return (
    <section
      id="office"
      className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--color-primary)] mb-6">
            A Calm Space for Healing
          </h2>

          <p className="text-gray-700 mb-4">
            Located in Chicago, our welcoming office provides a private, safe,
            and comfortable environment for in-person therapy sessions.
          </p>

          <p className="text-gray-700">
            Both in-person and virtual sessions are available.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/office1.jpg"
            alt="Office space 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/office2.jpg"
            alt="Office space 2"
            className="rounded-lg shadow-md"
          />
        </div>

      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto mt-12">
        <iframe
          src="https://www.google.com/maps?q=Chicago&output=embed"
          className="w-full h-64 rounded-lg shadow-md"
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}


