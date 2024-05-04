import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="mx-auto max-w-5xl pb-8 text-center text-xs tablet:px-10">
        <div>
          <Link
            className="hover:border-b"
            href="https://linkedin.com/in/timferrari"
          >
            Built by Tim Ferrari
          </Link>
        </div>
        <div>
          <Link className="hover:border-b" href="https://brittanychiang.com/">
            Inspired by Brittany Chiang
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
