import React from "react";
import { Heart, ShieldCheck, PawPrint, Users } from "lucide-react";

function About() {
  return (
    <section className="dark:bg-black/90 bg-black/20 py-20 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-orange-500">
            About Pet Find
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black dark:text-white">
            Pet Find is dedicated to connecting loving families with pets in
            need of safe, permanent homes. We believe every animal deserves
            compassion, care, and the opportunity to become part of a family.
            Our platform simplifies the adoption journey by allowing users to
            browse available pets, save favourites, book visits, and submit
            adoption requests in one convenient place.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-orange-500/20 bg-black/80 p-8 shadow-lg transition hover:border-orange-500">
            <Heart className="mb-5 h-10 w-10 text-orange-500" />

            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Our Mission
            </h3>

            <p className="leading-8 text-slate-300">
              Our mission is to help every adoptable pet find a loving forever
              home while encouraging responsible pet ownership. We strive to
              make adoption simple, transparent, and accessible for everyone.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-black/80 p-8 shadow-lg transition hover:border-orange-500">
            <ShieldCheck className="mb-5 h-10 w-10 text-orange-500" />

            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Our Vision
            </h3>

            <p className="leading-8 text-slate-300">
              We envision a future where every pet has the opportunity to live
              in a safe, caring home and where adoption becomes the first choice
              for anyone looking to welcome a new companion.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-20">

          <h3 className="mb-10 text-center text-3xl font-bold text-orange-500">
            What We Offer
          </h3>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-orange-500/20 bg-black/80 p-8 text-center transition hover:-translate-y-2 hover:border-orange-500">
              <PawPrint className="mx-auto mb-5 h-12 w-12 text-orange-500" />

              <h4 className="mb-3 text-xl font-semibold">
                Easy Pet Discovery
              </h4>

              <p className="text-slate-300">
                Browse pets by category, learn about their personalities, and
                find the perfect companion that matches your lifestyle.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-black/80 p-8 text-center transition hover:-translate-y-2 hover:border-orange-500">
              <Users className="mx-auto mb-5 h-12 w-12 text-orange-500" />

              <h4 className="mb-3 text-xl font-semibold">
                Simple Adoption Process
              </h4>

              <p className="text-slate-300">
                Register an account, save favourite pets, schedule visits, and
                submit adoption requests with ease.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-black/80 p-8 text-center transition hover:-translate-y-2 hover:border-orange-500">
              <ShieldCheck className="mx-auto mb-5 h-12 w-12 text-orange-500" />

              <h4 className="mb-3 text-xl font-semibold">
                Trusted Platform
              </h4>

              <p className="text-slate-300">
                We promote responsible pet ownership while ensuring every
                adoption is handled with care and transparency.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-20 rounded-3xl border border-orange-500/20 bg-black/80 p-10">

          <h3 className="mb-6 text-center text-3xl font-bold text-orange-500">
            Our Commitment
          </h3>

          <p className="mx-auto max-w-5xl text-center text-lg text-orange-400">
            Every successful adoption represents a new beginning for both a pet
            and its family. Pet Find is committed to creating meaningful
            connections, supporting responsible adoption practices, and helping
            every pet find the safe, loving home they deserve. Together, we can
            make a lasting difference—one adoption at a time.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;