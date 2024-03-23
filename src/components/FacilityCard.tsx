import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Button,
} from "@yamada-ui/react";
import React from "react";

interface FacilityCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function FacilityCard({
  imageUrl,
  title,
  description,
}: FacilityCardProps) {
  return (
    <Card maxW="md">
      <CardHeader justifyContent="center">
        <Image src={imageUrl} w="full" rounded="md" alt={title} />
      </CardHeader>
      <CardBody>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter justifyContent="flex-end">
        <Button colorScheme="primary">予約</Button>
      </CardFooter>
    </Card>
  );
}

export default FacilityCard;
