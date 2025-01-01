import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 md:py-20">
      {/* Header/Logo */}
      <header className="mb-24">
        <Link href="/" className="inline-block">
          <Image
            src="./allstar_logo.png"
            alt="ALL STAR"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
            quality={100}
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl space-y-12">
        <h1 className="text-4xl font-semibold leading-tight text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            Reference to &quot;personal data&quot; means any information relating to a person, whether true or not, by which such person may be identified from that data or other information to which BEENEXT CAPITAL MANAGEMENT Pte. Ltd. (&quot;BEENEXT&quot;) has or is likely to have access to. Common examples include names, identification numbers, contact information, financial records, credit card information, and location data.
          </p>
          <p>
            BEENEXT is committed to protecting the privacy of our visitors. This Privacy Policy is designed to assist you in understanding the types of information that is collected and recorded by BEENEXT. Please read this Privacy Policy carefully as it also sets out the purposes for which BEENEXT collects, uses, discloses, shares, transfers and/or processes your personal data.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is only valid for visitors to our websites with regards to the information that they share and/or that BEENEXT collects via the website. For the avoidance of doubt, this Privacy Policy is not applicable to any information collected offline or via any other channel other than this website.
          </p>
          <p>
            As part of our efforts to ensure that we properly manage, protect and process your personal data, we will be reviewing our policies, procedures and processes from time to time.
          </p>
          <p>
            We reserve the right to amend the terms of this Privacy Policy at our absolute discretion. Any amendments will be posted on our website and can be viewed at https://global.allstarsaas.com/privacy-policy.
          </p>
          <p>
            You are encouraged to visit the above website from time to time to ensure that you are well informed of our latest policies in relation to personal data protection.
          </p>
          <p>
            By using our website, you hereby expressly provide your consent to our Privacy Policy and agree to its terms and the collection, use, disclosure, sharing, transfer and/or processing of your personal data in accordance with such terms.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            The personal data that you are asked to provide and the reasons why you are asked to provide it will be made clear to you at the point when we ask you to provide your personal data.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us and any other information you may choose to provide.
          </p>
          <p>
            When you register for an account with us, we may ask for your contact information, including your name, company name, address, email address and telephone number.
          </p>
          <p>
            The type of personal data that we may collect and the reasons for using it will depend on the nature of your relationship with us but may include the types of information and purposes set out below.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">How We Collect, Use and/or Disclose Your Information</h2>
        <div className="space-y-6 text-base leading-relaxed">
          <p>We may collect, use and/or disclose your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>providing, operating, and maintaining our website;</li>
            <li>improving, personalising, and expand our website;</li>
            <li>understanding and analysing how you use our website;</li>
            <li>developing new products for our community, services, features and functionality;</li>
            <li>communicating with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website;</li>
            <li>sending you emails;</li>
            <li>carrying out your instructions or responding to any enquiry given by (or purported to be given by) you or on your behalf;</li>
            <li>storing, hosting, backing up (whether for disaster recovery or otherwise) of your personal data;</li>
            <li>conducting research, analysis and development activities (including but not limited to data analytics, surveys and/or profiling) to improve our services in order to enhance your relationship with us or for your benefit;</li>
            <li>conducting customer due diligence or other screening and personal identification processes in accordance with all laws, regulations or risk management procedures that may be required by law or that may have been put in place by us;</li>
            <li>finding and preventing fraud;</li>
            <li>administering security matters and/or arrangements;</li>
            <li>complying with or as required by any applicable law, governmental or regulatory requirements of any relevant jurisdiction, including meeting the requirements to make disclosure under the requirements of any law binding on us and/or for the purposes of any guidelines issued by regulatory or other authorities with which we are expected to comply; and</li>
            <li>complying with or as required by any request or direction of any governmental authority, or responding to requests for information from public agencies, ministries, statutory boards, or other similar authorities. For the avoidance of doubt, this means that we may/will disclose your personal data to the aforementioned parties upon their request or direction.</li>
          </ul>
          <p>BEENEXT follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this, and it is a part of hosting services&apos; analytics. The information collected by log files include internet protocol (&quot;IP&quot;) addresses, browser type, Internet Service Provider (“ISP”), date and time stamps, referring/exit pages and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users&apos; movement on the website and gathering demographic information.</p>
        </div>


        {/* Add more sections as needed */}
  <h2 className="text-2xl font-semibold mb-4">Sharing Your Personal Data</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      We do not share your personal data with any third party other than for storage purposes on servers which may be located outside the European Union (&quot;EU&quot;). We may also share your personal data with competent authorities if required under applicable law.
    </p>
    <p>
      In this case, BEENEXT will ensure that any transfers of personal data are in accordance with applicable laws and will put in place contractual or other appropriate protections to ensure that the relevant third parties provide an adequate level of protection to your personal data as set out in this Privacy Policy and as required by applicable local law.
    </p>
  </div>

  <h2 className="text-2xl font-semibold mb-4">Data Retention Period</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      We will delete your personal data when (a) it is no longer reasonably required for the purposes for which you have given your consent; (b) you have withdrawn your consent (where applicable); or (c) when we are not legally required or otherwise permitted to continue to hold such data. We may, however, continue to store your personal data, if and for such duration and purpose as we may be required to do under applicable laws.
    </p>
  </div>

  <h2 className="text-2xl font-semibold mb-4">Cookies and Web Beacons</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      Like any other website, BEENEXT uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
    </p>
    <p>
      You can choose to disable cookies through your web browser options. We encourage you to consult your web browser&apos;s website to find out more information about cookie management with your web browser.
    </p>
  </div>

  <h2 className="text-2xl font-semibold mb-4">Third Party Privacy Policies</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      This website may contain links to third party websites. These links are provided solely for your convenience.
    </p>
    <p>
      BEENEXT&apos;s Privacy Policy does not apply to other advertisers or websites. Access to any other website through any links provided on this website is at your own risk and BEENEXT is not responsible for the content of any such website or the accuracy or reliability of any information, data, or other contents thereof. Thus, we encourage you to consult the respective Privacy Policies of these third party advertisement servers or websites for more information on personal data is collected, used, disclosed and/or processed on these third party platforms.
    </p>
  </div>

  <h2 className="text-2xl font-semibold mb-4">Information for Singapore Residents</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      For Singapore Residents, we may also collect your personal data outside of the purposes listed in this Privacy Policy if we have assessed that to do so would be in our legitimate interests and beneficial to the public. Such legitimate interests would include ensuring security, managing disputes, and/or preventing the misuse of BEENEXT&apos;s services. Before doing so, we will take steps to ensure that any adverse effects that might arise for you have already been identified and eliminated, reduced, or mitigated.
    </p>
  </div>

  <h2 className="text-2xl font-semibold mb-4">GDPR Data Protection Rights</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      EU residents may be entitled to certain rights under the General Data Protection Regulation. These include:
    </p>
    <div className="space-y-4 ml-6">
      <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
      <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
      <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
      <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
      <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
      <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
    </div>
    <p>
      If you make a request regarding any of the above, we reserve the right to take up to a maximum of one month to respond to you. If you would like to exercise any of these rights, please contact us at the details below.
    </p>
  </div>

  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
  <div className="space-y-6 text-base leading-relaxed">
    <p>
      If you, at any time, have any queries on this Privacy Policy or any other queries in relation to you rights with respect to your personal data, or how we may manage, protect and/or process your personal data, please do not hesitate to contact our Data Protection Officer at:
    </p>
    <p>
      privacy@beenext.com
    </p>
    <p className="text-sm text-gray-600 mt-8">
      Last Updated on 10 May 2022
    </p>
  </div>


        <div className="pt-12 border-t border-gray-200">
          <Link href="/" className="font-bold hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

