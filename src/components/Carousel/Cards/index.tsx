import Image from "next/image";
import { ContainerCard, BackgroundRetangle } from "./style";
import happyWoman from "./public/assets/happy-woman.png"


export default function Card(){

  return (
    <ContainerCard>
      <Image width='384' height='499' style={{position:'absolute'}} src={happyWoman} alt="happy-woman-smiling"/>
      <BackgroundRetangle />
    </ContainerCard>
  )
}
