function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We would love to hear from you! Whether you have a question about our
          services, need to schedule an appointment, or just want to say hello,
          we are here to help. Please reach out using the details below.
        </p>

        {/* Contact Info */}
        <div className="mb-6">
          <p className="text-lg">
            📍 <strong>Location:</strong> Bukasa – Kirinya
          </p>
          <p className="text-lg">
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+256781327161" className="text-blue-600 hover:underline">
              0781 327161
            </a>{" "}
            /{" "}
            <a href="tel:+256703879723" className="text-blue-600 hover:underline">
              0703 879723
            </a>
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Bukasa%20Kirinya%20Uganda&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
