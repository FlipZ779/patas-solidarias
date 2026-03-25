import Image from "next/image";

type DonationReceivedCardProps = {
  donor?: string;
  description: string;
  image: string;
  date: string;
  quantity: number;
};

export default function DonationReceivedCard({
  donor,
  description,
  image,
  date,
  quantity,
}: DonationReceivedCardProps) {
  return (
    <div className="">
      <div className="flex justify-center">
        <Image
          src={image}
          alt="Doação Recebida"
          width={200}
          height={200}
          className="rounded-lg object-cover items-center flex"
        />
      </div>

      <div className="text-center item">
        <p className="text-sm text-gray-600">
          Doado por: <span className="font-medium">{donor}</span>
        </p>
        <p className="text-gray-800 font-semibold">{description} {quantity} Kg</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}
