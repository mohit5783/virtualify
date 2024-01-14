import Image from "next/image";
import Link from "next/link";
import privacy from "../../public/privacy.webp";

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={privacy}
          alt="Privacy Policy | VSC"
          width={1920}
          height={900}
          placeholder="blur"
        />
        <div className="absolute top-1/3 left-10 md:left-1/4 right-10 md:right-1/4 bg-black p-3 md:p-10 opacity-85">
          <div className="flex items-center justify-center ">
            <h1 className="text-4xl font-bold mb-4 font-raleway bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Privacy Notice
            </h1>
          </div>

          <p className="hidden md:block text-lg font-semibold text-white">
            This privacy notice outlines how we collect, use, and protect your
            personal data.
          </p>
        </div>
      </div>
      <div className="p-10 flex-col">
        <p className="mb-8">
          At Virtualify Software Consultancy Pvt. Ltd. (VSC), your privacy is
          paramount. This privacy notice outlines how we collect, use, and
          protect your personal data.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Introduction
          </h2>
        </div>

        <p className="mb-8">
          We are committed to transparency in our data practices. This notice
          explains the personal data we collect, why we collect it, how we use
          it, and your rights as a data subject or consumer.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Personal Data Usage
          </h2>
        </div>
        <p>We collect various types of personal data for specific purposes:</p>
        <ol className="list-decimal list-inside mb-8">
          <li>Website Access: </li>
          <ul className="list-disc list-inside mb-8">
            <li>IP addresses</li>
            <li>Operating system details</li>
            <li>Browsing details</li>
            <li>Device and connectivity details</li>
            <li>Language settings</li>
            This helps us measure site usage, enhance performance, and improve
            user experience. For authenticated areas, we collect your username
            and password.
          </ul>
          <li>Queries and Support:</li>
          <ul className="list-disc list-inside mb-8">
            <li>Personal and contact details</li>
            <li>Demographic data</li>
            <li>Qualifications and profession</li>
            <p>
              We process this data to answer your queries and provide support.
              You can manage your contact data through the contact us form on
              our websites.
            </p>
          </ul>
          <li>Promotional Communications:</li>
          <p className="mb-8">
            If you subscribe to our marketing communications, we may send
            emails, posts, or other communications. You can manage your contact
            data through the contact us form on our websites.
          </p>
          <li>Events and Initiatives:</li>
          <ul className="list-disc list-inside mb-8">
            <li>Full name</li>
            <li>Company details</li>
            <li>Job title and business email</li>
            <li>Telephone number</li>
            <li>Location</li>
            For events, we collect limited data to facilitate participation, and
            sometimes, hospitality services may involve more sensitive personal
            data.
          </ul>
          <li>Brand Promotion:</li>
          <p className="mb-8">
            We process data about our business contacts to promote our brand,
            products, and initiatives. This includes details like name, contact
            information, job title, and business details.
          </p>
        </ol>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Sharing Your Data
          </h2>
        </div>
        <p className="mb-8">
          We may share your data with third parties, including service
          providers, within the VSC group, or as required by law. Your privacy
          is our priority, and we do not sell your data to third parties.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Data Security
          </h2>
        </div>
        <p className="mb-8">
          We have implemented security measures to protect your data from
          unauthorized access, loss, or alteration. Access is limited to
          authorized personnel.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Data Retention
          </h2>
        </div>
        <p className="mb-8">
          We retain your data only as long as necessary for the purposes we
          collected it. Retention periods vary based on the nature of the data
          and legal requirements.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Contact Us
          </h2>
        </div>
        <p className="mb-8">
          If you have privacy concerns or questions, contact our Head of Global
          Privacy Office at{" "}
          <Link href="mailto:virtualifyme@gmail.com">
            virtualifyme@gmail.com
          </Link>
          . For data processing on our websites, the controller is Virtualify
          Software Consultancy Pvt. Ltd.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Right to Withdraw Consent
          </h2>
        </div>
        <p className="mb-8">
          If you've provided consent for specific processing, you can withdraw
          it at any time. Contact our Data Protection Officers for assistance.
        </p>
        <div className="flex">
          <h2 className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent text-lg font-semibold mb-4">
            Changes to this Privacy Notice
          </h2>
        </div>
        <p className="mb-8">
          We reserve the right to update this notice. Any substantial updates
          will be communicated, ensuring transparency in our data practices.
        </p>
      </div>
    </div>
  );
};

export default page;
