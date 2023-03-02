import { Button } from 'styles/global-styles';
import {
  ContainerSoluction,
  RowCardsSoluction,
  ContentSoluction,
} from './style';
import {CardsSoluction} from './CardsSoluction';


export default function SoluctionSection() {
  const card= {
    src: '/images/bitcoin.png',
    alt: 'bitcoin',
    title: 'Teste1',
    subtitle: 'teste1',
    content: 'teste1',
  };

  return (
    <ContainerSoluction>
      <ContentSoluction>
        <RowCardsSoluction>
          <CardsSoluction src={card.src} alt={card.alt} title={card.title} subtitle={card.subtitle} content={card.content}/>
          <CardsSoluction src={card.src} alt={card.alt} title={card.title} subtitle={card.subtitle} content={card.content} />
        </RowCardsSoluction>
        <RowCardsSoluction>
          <CardsSoluction src={card.src} alt={card.alt} title={card.title} subtitle={card.subtitle} content={card.content} />
          <CardsSoluction  src={card.src} alt={card.alt} title={card.title} subtitle={card.subtitle} content={card.content}/>
        </RowCardsSoluction>
      </ContentSoluction>
      <ContentSoluction>
        <h5>Lorem ipsum</h5>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <Button width="176px" fontSize="16px">
          {' '}
          Sign up now
        </Button>
      </ContentSoluction>
    </ContainerSoluction>
  );
}
