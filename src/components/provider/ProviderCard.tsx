import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Building2, Mail, Phone } from "lucide-react";
import Image from "next/image";


interface ProviderCardProps {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  image?: string;
}

export const ProviderCard = ({
  name,
  description,
  email,
  phone,
  image
}: ProviderCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          {image ? (
            <Image
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Building2 className="w-6 h-6 text-muted-foreground" />
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="w-full flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="w-4 h-4" />
          <span className="truncate">{email}</span>
        </div>
        <div className="w-full flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>
        <Button className="w-full mt-2">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};