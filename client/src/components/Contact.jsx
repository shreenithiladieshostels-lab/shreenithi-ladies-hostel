import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone />,
    title: "Phone",
    items: [
      { text: "+91 98844 46317", href: "tel:+919884446317" },
      { text: "+91 98416 20753", href: "tel:+919841620753" },
      { text: "+91 94448 71115", href: "tel:+919444871115" },
    ],
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    items: [{ text: "shreenithihostels@gmail.com", href: "mailto:shreenithihostels@gmail.com" }],
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    items: [{ text: "Mount Road, Chennai - Near Thousand Lights, Anna Salai & Teynampet" }],
  },
  {
    icon: <FaClock />,
    title: "Availability",
    items: [{ text: "Call or message us anytime" }],
  },
];

export default function Contact() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent mt-3 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-medium mb-10 text-lg leading-relaxed">
              Have questions? We'd love to hear from you. Call us directly or send a message via WhatsApp.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-1">{item.title}</h3>
                    {item.items.map((sub, si) =>
                      sub.href ? (
                        <a
                          key={si}
                          href={sub.href}
                          className="block text-gray-medium hover:text-primary transition-colors"
                        >
                          {sub.text}
                        </a>
                      ) : (
                        <p key={si} className="text-gray-medium">{sub.text}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get("name");
                const phone = formData.get("phone");
                const message = formData.get("message");
                const text = `Hi, I'm ${name}. ${message} Contact: ${phone}`;
                window.open(
                  `https://wa.me/919884446317?text=${encodeURIComponent(text)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="bg-gray-light rounded-2xl p-7 sm:p-9 space-y-5"
            >
              <h3 className="text-xl font-bold text-accent mb-1">Send us a message</h3>
              <p className="text-gray-medium text-sm mb-4">We'll respond within a few hours.</p>
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white resize-none text-sm"
                  placeholder="I'd like to inquire about room availability..."
                />
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.target.closest('form');
                  const formData = new FormData(form);
                  const name = formData.get('name') || 'Guest';
                  const phone = formData.get('phone') || '';
                  const message = formData.get('message') || 'Inquiry about hostel accommodation';
                  const whatsappText = `Hi, I'm ${name}${phone ? ` (${phone})` : ''}. ${message}`;
                  const whatsappUrl = `https://wa.me/919444871115?text=${encodeURIComponent(whatsappText)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-lg transition-all text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
