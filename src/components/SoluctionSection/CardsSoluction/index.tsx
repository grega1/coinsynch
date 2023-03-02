import Image from 'next/image';
import { CardSoluction, CardSubTitle, CardTitle } from './style';

interface ICardsSoluctionProps {
  title: string,
  subtitle: string,
  content: string,
  src: string,
  alt: string,
}

export const CardsSoluction = ({ title, subtitle, content, src, alt }: ICardsSoluctionProps) => {
  return (
    <CardSoluction>
      <Image width="51" height="51" src={src} alt={alt} />
      <CardSubTitle>{subtitle}</CardSubTitle>
      <CardTitle>{title}</CardTitle>
      <p>{content}</p>
    </CardSoluction>
  );
};

