const SectionA = () => {
  return (
    <div className=" shadow-lg mt-3 mb-16">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Lab Management at{" "}
              <span className="font-extrabold">Your Organization</span>
            </h2>
            <p className="mb-4 font-light">
              Track work in your laboratories through an open, collaborative
              platform. Link issues across systems and ingest data from various
              tools, so your teams have richer contextual information to manage
              and optimize lab processes.
            </p>
            <p className="mb-4 font-medium">
              Streamline lab operations, accelerate critical tasks, and ensure
              efficient management of resources.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionA;
