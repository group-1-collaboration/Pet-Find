import React from 'react'

function Privacy() {
  return (
    <section className="min-h-screen dark:bg-black/80 bg-black/20 text-white px-6 py-16">

<div className="max-w-5xl mx-auto">

<h1 className="text-5xl font-bold text-orange-500">
Privacy Policy
</h1>

<p className="mt-6 text-black dark:text-white leading-8">

Pet Find values your privacy. When you create an account, we collect only the
information necessary to provide our adoption services, including your name,
email address and phone number.

</p>

<h2 className="mt-10 text-2xl font-semibold text-orange-400">
Information We Collect
</h2>

<ul className="list-disc ml-8 mt-4 space-y-2 text-black dark:text-white">

<li>Personal information provided during registration.</li>

<li>Adoption and booking requests.</li>

<li>Your favourite pets.</li>

<li>Basic website usage information.</li>

</ul>

<h2 className="mt-10 text-2xl font-semibold text-orange-400">
How We Use Your Information
</h2>

<p className="mt-4 text-black dark:text-white leading-8">

Your information is used to process adoption requests, schedule visits,
improve user experience and communicate important updates regarding your account.

</p>

<h2 className="mt-10 text-2xl font-semibold text-orange-400">
Data Protection
</h2>

<p className="mt-4 text-black dark:text-white leading-8">

We do not sell or share your personal information with third parties except
where required by law or to complete the adoption process.

</p>

</div>

</section>
  )
}

export default Privacy