import { Button } from "styles/global-styles";
import { BoxCta, ContainerCta, ContentTagsCta, Tags, TitleCta } from "./style";

export default function CtaSection(){

  return (
    <ContainerCta>
      <BoxCta>
      <TitleCta>Lorem ipsum dolor sit amet, consectetur</TitleCta>
      <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magana fringilla urna, porttitor</p>
      <Button>SIGN UP NOW </Button>
      <ContentTagsCta>
        <Tags>Cryptos</Tags>
        <Tags>NFTs</Tags>
        <Tags>Games</Tags>
      </ContentTagsCta>
      </BoxCta>
    </ContainerCta>
  )

}
