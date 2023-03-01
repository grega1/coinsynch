import Image from "next/image";
import { FooterContainer, SpanCopyright } from "./style";
import logo from '/public/assets/logo.png';


export default function Footer(){
  return (
    <FooterContainer>
     <SpanCopyright> Copyright © 2022 - All rights reserved </SpanCopyright>
     <Image src={logo} width="120" height="24" alt="logo-footer" />
    </FooterContainer>
  )
}
