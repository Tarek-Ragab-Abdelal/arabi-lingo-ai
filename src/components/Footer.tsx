const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 text-center text-sm text-muted-foreground border-t border-border bg-background">
      <span>صُنع بـ ❤️ بواسطة </span>
      <a
        href="https://tarekragab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-violet-600 hover:text-violet-800 transition-colors duration-200 underline underline-offset-2"
      >
        Tarek Ragab
      </a>
    </footer>
  );
};

export default Footer;
