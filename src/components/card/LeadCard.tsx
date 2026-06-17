type LeadCardProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
};

export function LeadCard({ icon, title, value }: LeadCardProps) {
  return (
    <div className="flex flex-col gap-2 p-4 border-r">
      {icon}

      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-2xl font-semibold">{value}</h3>
    </div>
  );
}

export default LeadCard;
