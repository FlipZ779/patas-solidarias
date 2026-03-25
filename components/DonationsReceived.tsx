"use client";

import DonationReceivedCard from "./DonationReceivedCard";
import CountUp from "react-countup";

export default function DonationReceived() {
  const donationsReceived = [
    {
      donor: "Josiane Fátima dos Santos Costa",
      description: "Ração",
      image: "/doacoes/6.JPEG",
      date: "16/03/2026",
      quantity: 1,
    },
    {
      donor: "Edilene Costa",
      description: "Ração",
      image: "/doacoes/5.JPEG",
      date: "12/03/2026",
      quantity: 0.9,
    },

    {
      donor: "Filipe Santos da Costa",
      description: "Ração",
      image: "/doacoes/4.JPEG",
      date: "12/03/2026",
      quantity: 10,
    },

    {
      donor: "Aline Alves",
      description: "Ração",
      image: "/doacoes/3.JPEG",
      date: "12/03/2026",
      quantity: 10,
    },

    {
      donor: "Josiane Fátima dos Santos Costa",
      description: "Ração",
      image: "/doacoes/2.JPEG",
      date: "06/03/2026",
      quantity: 1,
    },

    {
      donor: "Kaio Sassada",
      description: "Ração",
      image: "/doacoes/1.JPEG",
      date: "28/02/2026",
      quantity: 1,
    },
  ];

  const donationsTotal = donationsReceived.reduce(
    (total, donationsReceived) => total + donationsReceived.quantity,
    0,
  );

  const numberOfDonations = donationsReceived.length;

  return (
    <section>
      <div className="font-bold text-center p-6">
        <h1 className="text-4xl font-cherrybomb text-gray-900">
          Arrecadamos{" "}
          <CountUp
            delay={1}
            end={donationsTotal}
            
            duration={4}
            suffix=" Kg"
            className=" text-6xl"
          />{" "}
          até o momento!
        </h1>

        <br />

        <h2>
          Recebemos um total de <CountUp end={numberOfDonations} duration={4} />{" "}
          doações!
        </h2>
      </div>

      <div>
        
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donationsReceived.map((donationsReceived, index) => (
          <DonationReceivedCard
            key={index}
            donor={donationsReceived.donor}
            description={donationsReceived.description}
            image={donationsReceived.image}
            date={donationsReceived.date}
            quantity={donationsReceived.quantity}
          />
        ))}
      </div>
    </section>
  );
}
