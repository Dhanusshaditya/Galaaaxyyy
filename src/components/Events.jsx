import React from 'react';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section className="bg-[#f4f4f4] py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-10">Event Highlights</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {["Project A", "Project B", "Project C"].map((title, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 w-72"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray-600">
              Short description about {title}.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}