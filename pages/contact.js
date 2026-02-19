export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon. (This is a demo)');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 text-center">
            Contact Us
          </h1>
          
          <p className="text-gray-700 mb-8 text-center">
            Have a question or need assistance? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                placeholder="0770022281"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-brand-blue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Phone:</strong> <a href="tel:+94770022281" className="text-brand-blue hover:underline">0770022281</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@luofu.lk" className="text-brand-blue hover:underline">info@luofu.lk</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
