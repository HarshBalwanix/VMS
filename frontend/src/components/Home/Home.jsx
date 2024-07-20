import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleVolunteerClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to become a volunteer?"
    );
    if (isConfirmed) {
      // User confirmed, make the request
      axios
        .patch("http://localhost:8000/api/v1/users/becomeVolunteer")
        .then(() => {
          // Handle success
          toast.success("You are now a volunteer!");
        })
        .catch((error) => {
          // Handle error
          console.error("Error becoming a volunteer:", error.message);

          const errorMessage = "There was an error. Please try again.";
          toast.error(errorMessage);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the feedback submission logic here
    if (!name || !email || !phone || !title || !description) {
      toast.error("All fields are required");
      return;
    }
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneregex = /^\d{10}$/;
    if (!emailregex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!phoneregex.test(phone)) {
      toast.error("Invalid phone number");
      return;
    }

    const feedbackData = new FormData();
    feedbackData.append("name", name);
    feedbackData.append("email", email);
    feedbackData.append("phone", phone);
    feedbackData.append("title", title);
    feedbackData.append("description", description);

    fetch(
      "https://script.google.com/macros/s/AKfycby6MR446p5w2GZkMNq8aHx2IrMAHZiVTLK35VImNzooQCN3frjpmIfByee4cWFcf6Bj-A/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: feedbackData,
      }
    ).then(
      () => {
        ``;

        toast.success("Feedback submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setTitle("");
        setDescription("");
      },
      (error) => {
        console.error("Error submitting feedback:", error);
        toast.error("Error submitting feedback");
      }
    );
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Nourishing Futures, One Meal at a Time
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Food for Good is a non-profit organization dedicated to
                  providing free, nutritious meals to underprivileged children
                  across the country. Our mission is to ensure no child goes
                  hungry and to give them the fuel they need to thrive.
                </p>
              </div>
              <Link
                to={"/donate"}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                // prefetch={false}
              >
                Donate Now
              </Link>
            </div>
            <img
              src="/main_image.jpg"
              width="550"
              height="550"
              alt="Children eating a meal"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="impact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Food for Good has been making a significant impact in the
                  lives of underprivileged children across the country. Here are
                  some of our key achievements:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 text-center">
                <h3 className="text-3xl font-bold text-primary">100,000+</h3>
                <p className="text-muted-foreground">Meals Served</p>
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-3xl font-bold text-primary">5,000+</h3>
                <p className="text-muted-foreground">Children Fed</p>
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-3xl font-bold text-primary">95%</h3>
                <p className="text-muted-foreground">Positive Feedback</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/food_eat.jpg"
                width="550"
                height="310"
                alt="Children eating a meal"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Nourishing Young Minds</h3>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our free meal program ensures that underprivileged children
                    receive the nutrition they need to grow, learn, and thrive.
                    By providing them with healthy, balanced meals, we're giving
                    them the fuel to pursue their dreams and reach their full
                    potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          id="donate"
        >
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Share Your Feedback
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We value your feedback and suggestions. Please take a moment to
                share your thoughts and help us improve our services.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="max-w-lg flex-1 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="max-w-lg flex-1 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="max-w-lg flex-1 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="max-w-lg flex-1 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="max-w-lg flex-1 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md"
                  onClick={handleSubmit}
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="volunteer">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Involved
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Volunteering with Food for Good is a rewarding way to make a
                  difference in the lives of underprivileged children. Join our
                  team and help us continue to provide free, nutritious meals to
                  those in need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/volunteer_image.jpg"
                width="550"
                height="310"
                alt="Volunteers serving meals"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Join Our Volunteer Team
                  </h3>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Whether you can spare a few hours a week or a few days a
                    month, your time and effort can make a big difference. From
                    serving meals to organizing food drives, there are many ways
                    you can get involved and support our mission.
                  </p>
                  <button
                    onClick={handleVolunteerClick}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Volunteer Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
