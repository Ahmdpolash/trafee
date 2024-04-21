// pages/affiliate.js

import Head from "next/head";
import Image from "next/image";

export default function AffiliatePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">My Brand</div>
          <div>
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
              Login
            </a>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl text-[#1BA1E2] font-bold mb-4 text-center">
            Become an Affiliate
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Join our affiliate program and start earning commissions by
            promoting our products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white shadow-md rounded p-8">
              <h2 className="text-2xl font-bold mb-4">How it Works</h2>
              <ol className="list-decimal list-inside">
                <li className="mb-4">Sign up for our affiliate program.</li>
                <li className="mb-4">
                  Promote our products using your unique affiliate link.
                </li>
                <li className="mb-4">
                  Earn commissions on every sale you refer.
                </li>
              </ol>
            </div>
            <div className="bg-white shadow-md rounded p-8">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="list-disc list-inside">
                <li className="mb-2 text-justify">
                  Earn up to 30% commission on every sale
                </li>
                <li className="mb-2">
                  Access to exclusive promotions and discounts
                </li>
                <li className="mb-2">
                  Detailed performance tracking and reporting
                </li>
                <li className="mb-2">Dedicated affiliate manager support</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-md rounded p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Join Now</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded"
                >
                  Join Now
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white shadow-md rounded p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Top Affiliates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded text-center">
                <Image
                  src="https://i.ibb.co/rdqXSBP/images-q-tbn-ANd9-Gc-Qby-Tz-Nqpns-Fp-F-v-Xm-HMq1-SJgbsat-QBtd-HVU-8s-07-Pw-s.jpg"
                  height={60}
                  width={60}
                  alt="Avatar 2"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <p className="font-bold">John Doe</p>
                <p className="text-gray-600">$12,345 earned</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <Image
                  src="https://i.ibb.co/rdqXSBP/images-q-tbn-ANd9-Gc-Qby-Tz-Nqpns-Fp-F-v-Xm-HMq1-SJgbsat-QBtd-HVU-8s-07-Pw-s.jpg"
                  height={60}
                  width={60}
                  alt="Avatar 2"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <p className="font-bold">Jane Smith</p>
                <p className="text-gray-600">$9,876 earned</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <Image
                  src="https://i.ibb.co/rdqXSBP/images-q-tbn-ANd9-Gc-Qby-Tz-Nqpns-Fp-F-v-Xm-HMq1-SJgbsat-QBtd-HVU-8s-07-Pw-s.jpg"
                  height={60}
                  width={60}
                  alt="Avatar 3"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <p className="font-bold">Bob Johnson</p>
                <p className="text-gray-600">$7,654 earned</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
