import { Button, Span } from '../../styles/global-styles';
import { NavContainer, NavLetter, NavLogoBox } from './style';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
export default function Navbar(){
  return (
    <>
      <NavContainer style={{ fontFamily: 'Roboto' }}>
          <NavLogoBox>
            <Image src={logo} width="120" height="24" alt="" />
          </NavLogoBox>{' '}
          <NavLetter>
            <Span>BIT</Span>
            <Span>R$ 23,62</Span>
            <Span>+7,082</Span>
            <div>
              <Span>DOG</Span>
              <Span>R$ 23,62</Span>
              <Span>- 5,230</Span>
            </div>
            <Span>ETH</Span>
          </NavLetter>
          <div style={{display: 'flex', gap:'24px', justifyContent: 'center', alignItems: 'center'}}>
            <Span>Sign In</Span>
            <Button width="100px">Sign Up</Button>
          </div>
        </NavContainer>
    </>
  )

}
