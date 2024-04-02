import HeaderContainer from "./_clientSide";
import Navbar from "./navbar/navbar";

export default function Header({ locale }: { locale: string }) {
  return (
    <HeaderContainer>
      <Navbar locale={locale} />
    </HeaderContainer>
  );
}
