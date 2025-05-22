import { Phone } from "lucide-react";


const ContactUsSection = () => {
  return (
    // Contact Us Section
    <div id="contact" className=" bg-white ">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Phone size={28} className="text-research-green" />
          <h2 className="section-title"> Contact Us</h2>
        </div>
        <p className="section-subtitle">Get in Touch</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form
              action="mailto:ayurbofacialcare@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-research-darkBlue mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-research-green"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-research-darkBlue mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-research-green"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-research-darkBlue mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-research-green"
                  required
                />
              </div>

              <button
                type="submit"
                className="hover:bg-research-green bg-research-darkBlue text-white px-6 py-2 rounded transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-research-gray space-y-4">
            <p className="text-lg font-semibold text-research-darkBlue">
              Contact Details
            </p>
            <p>
              For further queries, please reach us at{" "}
              <a
                href="mailto:agrisync.info@gmail.com"
                className="text-research-blue hover:underline"
              >
                agrisync.info@gmail.com
              </a>
            </p>
            <p>Hope this project helped you in some manner. Thank you!</p>
            <p>- Team AgriSync-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
