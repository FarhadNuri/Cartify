import { GithubIcon, FacebookIcon, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="footer bg-base-300 py-6">
      <div className="max-w-5xl mx-auto w-full px-4 flex justify-between items-center">
        <p className="text-sm text-base-content/70">
          © 2026 Cartify. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/FarhadNuri/Cartify"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.facebook.com/farhad.hosen.7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle"
          >
            <FacebookIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/farhad-nuri-ba99a62a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
