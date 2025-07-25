import { APP_CONFIG } from 'src/core/config.ts';

export const Footer = () => (
  <footer className=" w-full h-8 gap-4 px-4 md:px-6 z-1 self-center flex items-center justify-center">
    <p className="text-black text-sm">{`${APP_CONFIG.shortAppName} @ ${new Date().getFullYear()}`}</p>
  </footer>
);
