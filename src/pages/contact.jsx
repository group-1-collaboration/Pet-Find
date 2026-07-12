import React from 'react'
import loginBackground from "@/assets/loginbg.png"


function contact() {
  return (
    <section className="min-h-screen dark:bg-black/80 bg-black/20 text-white px-6 py-16" >
  <div className="max-w-5xl mx-auto">

    <h1 className="text-5xl font-bold text-orange-500">
      Contact Us
    </h1>

    <p className="mt-4 text-black dark:text-white ">
      We'd love to hear from you. Whether you have questions about adopting a pet,
      booking a visit, or partnering with Pet Find, our team is here to help.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-12">

      <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
        <h2 className="text-2xl font-semibold text-orange-400">
          Get in Touch
        </h2>

        <div className="space-y-5 mt-6">

          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-300">
              support@petfind.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-slate-300">
              +254 700 123 456
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-slate-300">
              Nairobi, Kenya
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-slate-300">
              Monday - Friday
              <br />
              8:00 AM - 5:00 PM
            </p>
          </div>

        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
        <h2 className="text-2xl font-semibold text-orange-400">
          Our Mission
        </h2>

        <p className="mt-5 text-slate-300 leading-8">
          Pet Find is committed to connecting loving families with pets in need of
          forever homes. Every adoption changes a life, and we're here to guide you
          throughout the journey.
        </p>

      </div>

    </div>

  </div>
</section>
  )
}

export default contact