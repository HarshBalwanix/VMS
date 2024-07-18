import { Link } from "react-router-dom";

export default function Donation() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Donate to Food for Good
            </h1>
            <p className="text-lg text-muted-foreground">
              Food for Good is a non-profit organization dedicated to providing
              free, nutritious meals to children in need. Your donation can make
              a real difference in the lives of those who struggle with food
              insecurity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex-1">Donate Now</button>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Children eating a meal"
              className="mx-auto rounded-lg object-cover"
            />
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <HandPlatterIcon className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">
                    1 Million Meals Served
                  </h3>
                  <p className="text-muted-foreground">
                    We've provided over 1 million nutritious meals to children
                    in need.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <BabyIcon className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">
                    20,000 Children Served
                  </h3>
                  <p className="text-muted-foreground">
                    We've provided meals to over 20,000 children in need.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <VoteIcon className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">500+ Volunteers</h3>
                  <p className="text-muted-foreground">
                    Our work is supported by a dedicated team of over 500
                    volunteers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  "Food for Good has been a lifeline for my family. The meals\n
                  they provide have helped us get through some very difficult\n
                  times."
                </p>
                <cite className="text-sm font-medium">
                  - Sarah, Beneficiary
                </cite>
              </blockquote>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  "I'm so grateful for the work Food for Good does. Seeing the\n
                  joy on the children's faces when they receive a hot meal is\n
                  truly heartwarming."
                </p>
                <cite className="text-sm font-medium">
                  - Michael, Volunteer
                </cite>
              </blockquote>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  "Food for Good has been a game-changer for our community.\n
                  The impact they've had on the lives of children in need is\n
                  truly remarkable."
                </p>
                <cite className="text-sm font-medium">
                  - Samantha, Community Leader
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Work</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Children eating a meal"
              className="rounded-lg object-cover"
            />
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Volunteers serving food"
              className="rounded-lg object-cover"
            />
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Children smiling"
              className="rounded-lg object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function BabyIcon(props) {
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
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function HandPlatterIcon(props) {
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
      <path d="M12 3V2" />
      <path d="M5 10a7.1 7.1 0 0 1 14 0" />
      <path d="M4 10h16" />
      <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
      <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
      <path d="M5 14v7H2" />
    </svg>
  );
}

function VoteIcon(props) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
