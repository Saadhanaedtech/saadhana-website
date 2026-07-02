import Container from "@/components/common/Container";
import NavCTA from "./NavCTA";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between">

          <div className="flex-shrink-0">
            <NavLogo />
          </div>

          <div className="flex flex-1 justify-center">
            <NavMenu />
          </div>

          <div className="flex-shrink-0">
            <NavCTA />
          </div>

        </div>
      </Container>
    </header>
  );
}