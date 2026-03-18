const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        Contact Us
      </h1>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded"
        />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;