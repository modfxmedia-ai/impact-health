import { UtilityBar } from "./UtilityBar";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { AppointmentButton } from "./AppointmentButton";

export function SiteHeader() {
  return (
    <header className="site-header-enter relative z-50">
      <UtilityBar />
      <div className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Logo />
          <DesktopNav />
          <div className="hidden lg:block">
            <AppointmentButton />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
