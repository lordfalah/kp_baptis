import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import Card from "./Card";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-2">Pilih Baptis</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Baptis Dewasa"
          subtitle=""
          href={{ query: { baptis: "dewasa" } }}
          Icon={FiUser}
        />
        <Card
          title="Baptis anak"
          subtitle=""
          href={{ query: { baptis: "anak" } }}
          Icon={FiMail}
        />
        {/* <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Manage cards"
          href="#"
          Icon={FiCreditCard}
        /> */}
      </div>
    </div>
  );
};

export default HoverDevCards;
