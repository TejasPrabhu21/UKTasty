import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-4">Last updated: 25-09-2024</p>

        <p className="mb-6">
          Welcome to the Kinara app, where we create and sell a variety of
          fish-based products such as Fish Tawa Masala, Fish Green Masala Fry,
          Tuna Fish Slice, and more. By using our app, you agree to the
          following terms and conditions. Please read these carefully before
          making any purchases or using our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using the Kinara app, you agree to comply with and be
          bound by these terms and conditions. If you do not agree with any part
          of the terms, you must not use the app.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Account Creation</h2>
        <p className="mb-6">
          To make purchases through the Kinara app, you may need to create an
          account. By creating an account, you agree to provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your login credentials and for all activities that
          occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
        <p className="mb-6">
          All products available on the Kinara app are described and priced as
          accurately as possible. We produce a variety of fish-based products
          including, but not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Fish Tawa Fry Masala</li>
          <li>Fish Green Masala Fry</li>
          <li>Tuna Fish Slice</li>
          <li>Fish Ghee Roat Masala</li>
          <li>Squid Slice and more</li>
        </ul>
        <p className="mb-6">
          Product weights, prices, and descriptions are displayed within the
          app, and we strive to ensure that this information is correct.
          However, in case of any discrepancies, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          4. Purchases and Payments
        </h2>
        <p className="mb-6">
          Purchases can be made directly through the Kinara app. Upon placing an
          order, you agree to pay the total price of the product(s) and any
          associated charges such as taxes or delivery fees. Payments will be
          processed via secure third-party providers like Razorpay, and you
          agree to their terms and conditions when completing a transaction.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          5. Order Fulfillment and Delivery
        </h2>
        <p className="mb-6">
          Once an order is placed and payment is confirmed, we will process and
          deliver your products in a timely manner. Delivery times may vary
          depending on your location and product availability. Any estimated
          delivery times provided are for guidance only.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          6. Refund and Cancellation Policy
        </h2>
        <p className="mb-6">
          All sales are final upon order placement, and we do not offer refunds
          unless:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>The product is damaged or defective upon delivery.</li>
          <li>
            The product does not match the description or is otherwise
            incorrect.
          </li>
        </ul>
        <p className="mb-6">
          If you encounter any issues with your order, please contact us within
          24 hours of delivery to address the issue.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          7. User Responsibilities
        </h2>
        <p className="mb-6">By using the Kinara app, you agree to:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            Use the app in compliance with all applicable laws and regulations.
          </li>
          <li>
            Refrain from using the app to engage in any fraudulent or unlawful
            activities.
          </li>
          <li>
            Provide accurate and up-to-date information in your account and
            order details.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">8. Privacy Policy</h2>
        <p className="mb-6">
          We take your privacy seriously. Any personal information you provide
          to us, including payment and order details, will be handled according
          to our Privacy Policy, which outlines how we collect, use, and protect
          your data. By using the app, you consent to the collection and use of
          information as described in the Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Google OAuth</h2>
        <p className="mb-6">
          If you choose to sign in using Google OAuth, your Google account
          information (such as name, email, and profile image) will be collected
          for authentication purposes and securely stored in our Supabase
          database. You agree to allow the Kinara app to access and use this
          information in accordance with our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          10. Limitation of Liability
        </h2>
        <p className="mb-6">
          While we strive to provide high-quality products and services, the
          Kinara app and its content are provided on an &quot;as is&quot; basis.
          We do not guarantee the accuracy, completeness, or availability of any
          information on the app, and we will not be held responsible for any
          losses or damages arising from the use of the app or products sold
          through the app.
        </p>

        <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify these terms and conditions at any time.
          Any changes will be posted on this page, and continued use of the app
          after such changes are made constitutes your acceptance of the new
          terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
        <p className="mb-6">
          If you have any questions or concerns about these terms and
          conditions, or if you need assistance with your order, you can reach
          us at:
        </p>
        <ul className="list-none space-y-2">
          <li>Phone: +91 9538505031</li>
          <li>
            Email:{" "}
            <a
              href="mailto:udupikinaraffpcltd@gmail.com"
              className="text-blue-600"
            >
              udupikinaraffpcltd@gmail.com
            </a>
          </li>
          <li>
            Address: Vanadurga Complex, First Floor, Kodi Fisheries Road,
            Sastana, Brahmavara Tq and Udupi Dist. PIN:576226.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
