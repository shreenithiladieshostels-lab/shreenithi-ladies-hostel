import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import AnimatedNumber from "./AnimatedNumber";

/* Updated pricing for Mount Road location only */
const branchPricing = {
  "Mount Road": {
    registration: 1500,
    deposit: 2000,
    disclaimer:
      "EB bills are shared based on usage to tenants in the room | Deposit amount will be refunded within 30 days through a return form | All payments must be paid before 5th of every month. In case of late payment, ₹100/- will be charged for additional days | Hostel mess will be closed for Deepavalli and Pongal holidays for a week. There won't be any changes in tenants rent",
    facilityCols: ["Food", "Bath", "AC", "TV", "WiFi", "Parking"],
    rooms: [
      //                                              Food  Bath  AC    TV    WiFi  Park
      { type: "10 Sharing with Bathroom",        rent: 6800, fac: [true, true, false,true, true, true ] },
      { type: "10 Sharing Common Bathroom A/C",  rent: 7500, fac: [true, false,true, true, true, true ] },
      { type: "7 Sharing with Bathroom",         rent: 6800, fac: [true, true, false,true, true, true ] },
      { type: "5 Sharing Common Bathroom",       rent: 6800, fac: [true, false,false,true, true, true ] },
      { type: "4 Sharing Common Bathroom A/C",   rent: 8500, fac: [true, false,true, true, true, true ] },
      { type: "3 Sharing with Bathroom",         rent: 8800, fac: [true, true, false,true, true, true ] },
      { type: "3 Sharing without Bathroom",      rent: 7300, fac: [true, false,false,true, true, true ] },
      { type: "3 Sharing with Bathroom A/C",     rent: 10000, fac: [true, true, true, true, true, true ] },
      { type: "2 Sharing with Bathroom",         rent: 8800, fac: [true, true, false,true, true, false] },
      { type: "2 Sharing with Bathroom A/C",     rent: 14500, fac: [true, true, true, true, true, false] },
    ],
  },
};

function Badge({ yes }) {
  return yes ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
      <FaCheck className="text-xs" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-400">
      <FaTimes className="text-xs" />
    </span>
  );
}

export default function PricingTable() {
  const data = branchPricing["Mount Road"];

  return (
    <section className="py-16 sm:py-20 bg-gray-light">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
            Room Types & Pricing
          </h2>
          <p className="text-gray-medium mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Mount Road Location - Premium accommodation for working women & students
          </p>
        </motion.div>

        {/* Fees */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          <div className="bg-white rounded-xl px-5 py-3 shadow-sm text-center">
            <p className="text-xs text-gray-medium uppercase tracking-wider">Registration</p>
            <p className="text-lg font-bold text-accent">
              ₹<AnimatedNumber 
                value={data.registration} 
                duration={1.5} 
                separator={false}
              />
            </p>
          </div>
          <div className="bg-white rounded-xl px-5 py-3 shadow-sm text-center">
            <p className="text-xs text-gray-medium uppercase tracking-wider">Caution Deposit</p>
            <p className="text-lg font-bold text-accent">
              ₹<AnimatedNumber 
                value={data.deposit} 
                duration={1.5} 
                separator={true}
              />
            </p>
            <p className="text-[10px] text-gray-medium mt-1">Within 30 days</p>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="overflow-x-auto rounded-2xl shadow-sm"
        >
          <table className="w-full text-left bg-white" style={{ minWidth: `${460 + data.facilityCols.length * 52}px` }}>
            <thead>
              <tr className="bg-accent text-white">
                <th className="px-3 sm:px-4 py-4 font-semibold text-xs sm:text-sm">Room Type</th>
                <th className="px-3 sm:px-4 py-4 font-semibold text-xs sm:text-sm">Rent</th>
                <th className="px-3 sm:px-4 py-4 font-semibold text-xs sm:text-sm">Deposit</th>
                {data.facilityCols.map((col) => (
                  <th key={col} className="px-2 sm:px-3 py-4 font-semibold text-xs text-center">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rooms.map((r, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 hover:bg-primary/5 transition-colors ${
                    i === data.rooms.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="px-3 sm:px-4 py-4 font-semibold text-accent text-sm">{r.type}</td>
                  <td className="px-3 sm:px-4 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">
                      ₹<AnimatedNumber 
                        value={r.rent} 
                        duration={2} 
                        separator={true}
                      />
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-4 text-sm text-accent">
                    ₹<AnimatedNumber 
                      value={r.deposit || data.deposit} 
                      duration={1.8} 
                      separator={true}
                    />
                  </td>
                  {r.fac.map((val, j) => (
                    <td key={j} className="px-2 sm:px-3 py-4 text-center">
                      <Badge yes={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-medium text-center mt-4 leading-relaxed">
          * {data.disclaimer}
        </p>
      </div>
    </section>
  );
}
