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
import Link from "next/link";
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
        <Link href="/calendar">
          <Button colorScheme="primary">予約状況</Button>
        </Link>
        <Link href="/form">
          <Button colorScheme="primary">問い合わせ</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default FacilityCard;
