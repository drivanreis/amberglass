import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          <Icon size={24} />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;