const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#151B23] text-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="text-xl font-bold text-white">Cooperative Miniere Rising Star</div>
          <div className="text-sm text-gray-300 mt-2">Ethical Mineral Supply from the Heart of Africa</div>
          <div className="mt-6 text-sm text-gray-400">© {currentYear} Rising Star . All rights reserved.</div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="block font-medium text-white">Email</span>
              <a href="mailto:info@risingstarminerals.com" className="hover:text-white">info@risingstarminerals.com</a>
            </li>
           {/*<li>
              <span className="block font-medium text-white">Phone</span>
              <a href="tel:+243894881422" className="hover:text-white">+243 894 881 422 </a>
            </li> */}
            <li>
              <span className="block font-medium text-white">Address</span>
              <span>C.IBANDA, Bukavu, Democratic Republic of Congo</span>
            </li>
          </ul>
        </div>

        {/* Quick Action */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
          <ul className="text-gray-300 space-y-1">
            <li>Mon–Fri: 9:00–18:00 (CAT)</li>
            <li>Sat–Sun: Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
