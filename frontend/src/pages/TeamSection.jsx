// TeamSection.jsx
import React from "react";

/**
 * Colors used:
 *  primary:   #00BFA5   (for accent lines)
 *  secondary: #1E3A8A   (for headings/text)
 *  dark:      #1F2937   (for general text)
 */

const team = [
  { name: "Mrs. Madhu Singh", role: "Managing Director" },
  { name: "Ajith Dinakar", role: "Director" },
  { name: "Devaraj V", role: "Director" },
  { name: "Subrata Nag", role: "General Manager Sales" },
  { name: "Mahesh Rao", role: "Service Delivery Manager" },
  { name: "Arul Kumar T", role: "Senior Manager - Sales" }
];

const TeamCard = ({ name, role }) => (
  <div className="border border-gray-300 rounded-sm p-8 flex flex-col items-center justify-center h-full bg-white hover:shadow-md transition-shadow duration-300">
    <h3
      className="text-xl md:text-2xl font-semibold text-center"
      style={{ color: '#1E3A8A' }} // secondary
    >
      {name}
    </h3>

    {/* Accent divider */}
    <div
      className="w-10 h-0.5 my-3 rounded"
      style={{ backgroundColor: '#00BFA5' }} // primary
    />

    <p
      className="text-sm text-center"
      style={{ color: '#1F2937' }} // dark
    >
      {role}
    </p>
  </div>
);

const TeamSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: '#1E3A8A' }} // secondary
        >
          Team
        </h2>

        {/* Divider line under heading */}
        <div
          className="w-full border-t mb-8"
          style={{ borderColor: '#00BFA5' }} // primary line accent
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="min-h-[120px]">
              <TeamCard name={member.name} role={member.role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
