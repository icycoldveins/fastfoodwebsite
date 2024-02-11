/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XnYDj9pkjh0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <>
      <div className="bg-gray-900 py-6">
        <div className="container flex items-center justify-center px-4 text-center md:px-6">
          <nav className="flex items-center space-x-4">
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <BeefIcon className="w-4 h-4" />
              Menu
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <ShoppingCartIcon className="w-4 h-4" />
              Order
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <MapIcon className="w-4 h-4" />
              Locations
            </Link>
          </nav>
        </div>
      </div>
      <section className="grid items-center justify-center min-h-[300px] gap-4 px-4 text-center md:px-6">
        <img
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-t-lg object-bottom"
          height="400"
          src="https://images.unsplash.com/photo-1566217688581-b2191944c2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwyNHx8YnVyZ2VyfGVufDB8fHx8MTcwNzYyODkzM3ww&ixlib=rb-4.0.3&q=80&w=1080"
          width="800"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Welcome to the Burger Joint
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Serving up the best burgers in town. Made fresh to order.
          </p>
        </div>
      </section>
      <section className="grid items-center justify-center py-12 grid-cols-1 gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Try our Special
          </h2>
          <p className="text-2xl font-bold">$5.99</p>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            For a limited time, enjoy our classic cheeseburger with a side of
            crispy fries.
          </p>
        </div>
        <img
          alt="Special"
          className="mx-auto aspect-square overflow-hidden rounded-xl object"
          height="600"
          src="https://images.unsplash.com/photo-1619901282828-7cbde1c89884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwyfHxjaGVlc2VidXJnZXJ8ZW58MHx8fHwxNzA3NjI4OTgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
          width="600"
        />
      </section>
      <section className="py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Menu
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              All items come with a side of fries and a drink.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <img
                alt="Cheeseburger"
                className="mx-auto aspect-square overflow-hidden rounded-xl object"
                height="400"
                src="https://images.unsplash.com/photo-1568901839119-631418a3910d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw1fHxtaWxrc2hha2V8ZW58MHx8fHwxNzA3NjI5MDM0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">Cheeseburger</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  $4.99
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Fries"
                className="mx-auto aspect-square overflow-hidden rounded-xl object"
                height="400"
                src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxfHxmcmllc3xlbnwwfHx8fDE3MDc2MjkwNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">Fries</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  $1.99
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Shake"
                className="mx-auto aspect-square overflow-hidden rounded-xl object"
                height="400"
                src="https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxOXx8c29kYXxlbnwwfHx8fDE3MDc2MjkwODd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">Shake</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  $3.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <img
              alt="Logo"
              className="mx-auto"
              height="70"
              src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxMnx8ZmFzdGZvb2QlMjBsb2dvfGVufDB8fHx8MTcwNzYyOTE3OXww&ixlib=rb-4.0.3&q=80&w=1080"
              style={{
                aspectRatio: "140/70",
                objectFit: "cover",
              }}
              width="140"
            />
            <p className="mx-auto max-w-[400px] text-gray-500 md:text-base/relaxed dark:text-gray-400">
              The best burgers in town. Made fresh to order.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm gap-4">
            <div className="space-y-1">
              <h3 className="inline text-lg font-bold text-gray-50 dark:text-gray-900">
                Contact Us
              </h3>
              <p className="inline text-sm text-gray-300 dark:text-gray-600">
                - Open Times
              </p>
              <p className="inline text-sm text-gray-300 dark:text-gray-600">
                - Call Us
              </p>
            </div>
            <form className="space-y-4">
              <div className="flex flex-col gap-1">
                <label
                  className="sr-only text-gray-400 dark:text-gray-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  className="h-10 text-sm peer placeholder-gray-400 dark:placeholder-gray-600"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <Button className="h-10 w-full text-sm" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <FacebookIcon className="w-4 h-4" />
              Facebook
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <TwitterIcon className="w-4 h-4" />
              Twitter
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-50 hover:text-gray-100 dark:text-gray-900 dark:hover:text-gray-900"
              href="#"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

function BeefIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

