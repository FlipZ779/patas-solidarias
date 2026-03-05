type DonationCardProps = {
  icon: string
  title: string
  description: string
}

export default function DonationCard({
  icon,
  title,
  description
}: DonationCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl h-60 w-42 flex items-center justify-center flex-col shadow-md hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
      <p className="text-dark/70">{description}</p>
    </div>
  )
}