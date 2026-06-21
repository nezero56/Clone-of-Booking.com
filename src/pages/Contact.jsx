import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert(`Thank you ${data.name}! Your message has been received.`);
    event.target.reset();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              {[
                { icon: '📧', label: 'Email', value: 'hello@myportfolio.dev' },
                { icon: '📍', label: 'Location', value: 'Kigali, Rwanda' },
                { icon: '🌐', label: 'Website', value: 'myportfolio.dev' },
                { icon: '📞', label: 'Phone', value: '+250 780 000 000' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <p className="font-semibold text-gray-900 mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                    <a
                      key={s}
                      href="#"
                      className="bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              {submitted && (
                <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                  Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Uwase"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project collaboration, freelance work..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
