import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-100 p-10 border-solid border-t-2 border-primary">
      <div className="flex flex-wrap flex-row">
        <div className="mb-5 basis-full md:basis-1/5">
          <div className="font-bold uppercase pb-1 text-primary">Explore</div>
          <Link className="text-base-30" href="/events">
            Events
          </Link>
          <br />
          <Link className="text-base-30" href="/events">
            Services
          </Link>
        </div>
        <div className="mb-5 basis-full md:basis-1/5">
          <div className="font-bold uppercase pb-1 text-primary">Company</div>
          <Link className="text-base-30" href="/about">
            About Us
          </Link>
          <br />
          <Link className="text-base-30" href="/about">
            Contact Us
          </Link>
        </div>
        <div className="mb-5 basis-full md:basis-1/5">
          <div className="font-bold uppercase pb-1 text-primary">Legal</div>
          <Link className="text-base-30" href="/events">
            Policies and Procedures
          </Link>
          <br />
          <Link className="text-base-30" href="/events">
            Terms of Service
          </Link>
          <br />
          <Link className="text-base-30" href="/events">
            Waiver and Release of Liability
          </Link>
        </div>
        <div className="mb-5 basis-full md:basis-2/5">
          <div className="font-bold uppercase pb-1 text-primary">
            Newsletter
          </div>
          <p className="text-base-30 mb-2">Subscribe to our newsletter.</p>
          <form className="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4"
            />
            <button
              type="submit"
              className="font-semibold py-3 px-6 rounded-r-lg bg-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-base-30">
        © 2024 KCGameOn - All rights reserved.
      </div>
    </div>
  );
};
