"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Meeting } from "@/lib/meeting";
import Card from "@/components/card";
import ItemCheckout from "@/components/meeting/tickets/item-checkout";

export function BuyTicketComponent({ meeting }: { meeting: Meeting }) {
  const ticketTypes = new Array<TicketType>();
  ticketTypes.push({
    name: "General Admission",
    cost: 10,
    quantity: 0,
  });
  ticketTypes.push({
    name: "General Admission with Food",
    cost: 10,
    quantity: 0,
  });
  ticketTypes.push({
    name: "BYOC",
    cost: 10,
    quantity: 0,
  });
  ticketTypes.push({
    name: "VIP",
    cost: 10,
    quantity: 0,
  });
  ticketTypes.push({
    name: "Computer Rental",
    cost: 10,
    quantity: 0,
  });
  ticketTypes.push({
    name: "VIP Computer Rental",
    cost: 10,
    quantity: 0,
  });

  const [items, setState] = useState(ticketTypes);

  return (
    <div className="m-5">
      <p className="text-6xl text-primary font-bold">
        Get Tickets for {meeting.name}
      </p>
      <div className="border-solid border-2 border-primary mb-8 mt-2" />
      <div className=" grid grid-cols-2 gap-5">
        <div className="bg-base-70 p-3 border-solid border-2 border-base-60 rounded-xl">
          <p className="mb-5 text-5xl text-base-10 font-bold">
            Choose Your Ticket:
          </p>
          {ticketTypes.map((ticketType, i) => {
            return (
              <ItemCheckout
                key={i}
                index={i}
                name={ticketType.name}
                items={items}
                setState={setState}
              />
            );
          })}
        </div>
        <div className="bg-base-70 p-3 border-solid border-2 border-base-60 rounded-xl">
          <p className="mb-5 text-5xl text-base-10 font-bold">Checkout</p>
          {ticketTypes.map((ticketType, i) => {
            return (
              <div key={i}>
                {items[i].quantity !== 0 && (
                  <p className="text-base-10">
                    {ticketType.name} (x{items[i].quantity}) = $
                    {ticketType.cost * items[i].quantity}
                  </p>
                )}
              </div>
            );
          })}
          <p className="text-base-10">
            Total $
            {items.reduce(
              (partialSum, item) => partialSum + item.quantity * item.cost,
              0
            )}
          </p>
          <div className="mt-5">
            <button className="bg-primary text-base-10 rounded-lg p-3 w-min">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface TicketType {
  name: string;
  cost: number;
  quantity: number;
}
