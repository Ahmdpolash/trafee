export default function AdvertiserPage() {
  return (
    <div className="bg-gray-100 lg:py-[80px]">
      <header className="bg-white shadow"></header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl lg:text-4xl text-[#1BA1E2] font-bold mb-4 text-center">
            Advertise with Us
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Reach your target audience and boost your brand visibility through
            our advertising platform.
          </p>
          <div className="bg-white shadow-md  rounded p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1BA1E2]">
              About Our Advertising Platform
            </h2>
            <p className="text-gray-700 mb-4">
              Our advertising platform is designed to help businesses of all
              sizes reach their target audience and achieve their marketing
              goals. With a wide range of ad formats and advanced targeting
              options, you can create highly effective campaigns that drive
              results.
            </p>
            <p className="text-gray-700 mb-4">
              Our platform leverages cutting-edge technology and data-driven
              insights to ensure your ads are delivered to the right people at
              the right time. Additionally, our team of advertising experts is
              available to provide guidance and support throughout the entire
              process, from campaign planning to optimization and analysis.
            </p>
          </div>

          <div className="bg-white shadow-md rounded p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1BA1E2]">
              Why Advertise with Us?
            </h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Highly targeted ad campaigns</li>
              <li className="mb-2">
                Diverse range of ad formats and placements
              </li>
              <li className="mb-2">Advanced targeting options</li>
              <li className="mb-2">Detailed performance analytics</li>
              <li className="mb-2">Increased ROI and sales</li>
              <li className="mb-2">Extensive global reach & quality traffic</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white shadow-md rounded p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#1BA1E2]">
                Ad Formats
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">Banner Ads</li>
                <li className="mb-2">Video Ads</li>
                <li className="mb-2">Native Ads</li>
                <li className="mb-2">Sponsored Content</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#1BA1E2]">
                Targeting Options
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">Geographic</li>
                <li className="mb-2">Demographic</li>
                <li className="mb-2">Interests</li>
                <li className="mb-2">Behavioral</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-md rounded p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Get Started Today
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Ready to reach your target audience and boost your brand
              visibility? Get started with our advertising platform today.
            </p>
           
            <div className="text-center">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded"
              >
                Get Started
              </button>
            </div> 
          </div>
        </div>
      </main>
    </div>
  );
}
