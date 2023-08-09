import Branding from "./Branding";
import Container from "./Container";
import Form from "./Form"
import type { AuthenticatorProps } from "@typings/index";

export function defaultProps(): AuthenticatorProps {
  return {
    title: "Dr. Kait Whitcomb, LLC",
    subTitle:"Welcome to Dr. Kait Whitcomb, LLC | Decentralized Web Manager",
    favicon: {
      image: {
        src: "",
      },
    },
  };
}

export default function Authenticator(props: AuthenticatorProps) {


  const { title, subTitle } = defaultProps() 


  return (
    <Container>
      <Branding  />
      <Form title={title} subTitle={subTitle} />
    </Container>
  );
}
