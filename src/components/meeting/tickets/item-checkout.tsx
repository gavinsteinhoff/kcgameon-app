import Card from "@/components/card";
import { SetStateAction } from "react";
import { TicketType } from "../ticket";

export default function ItemCheckoutComponent({
  index,
  name,
  items,
  setState,
}: {
  index: number;
  name: string;
  items: TicketType[];
  setState: React.Dispatch<SetStateAction<TicketType[]>>;
}) {
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setState(
      items.map((c, i) => {
        if (i === index) {
          c.quantity = Number.parseInt(e.currentTarget.value);
          return c;
        } else {
          return c;
        }
      })
    );
  }

  return (
    <Card title={name}>
      <select
        className="w-16 h-8 rounded-lg text-center"
        onChange={handleSelect}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </Card>
  );
}
