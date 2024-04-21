import Container from "@/components/container/Container";

import data from "@/utils/blog";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="mt-1 z-[555555555555555555] lg:py-[70px]">
      <Container>
        <div className="space-y-1 lg:space-y-3 text-black">
          <h3 className="text-[16px] font-normal text-gray-700 py-3">
            GeekTeams.com / blog
          </h3>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#000000] pb-4">
            Blog
          </h3>
        </div>
        {/* card */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {data.map((blog, i) => (
            <div className="space-y-2" key={i}>
              <Image
                className="w-full h-[250px] rounded-lg"
                src={blog.image}
                height={70}
                width={350}
                alt="img"
              />
              <p className="text-gray-600 pt-1">{blog.date}</p>
              <h2 className="text-[#000000] font-semibold text-[17px] lg:text-2xl ">
                {blog.title}
              </h2>
              <p className="text-justify text-gray-600">
                {blog.short_description}
              </p>
            </div>
          ))}
        </div>

        {/* pagination */}

        <div>
          <div className="mt-16 flex justify-center items-center dark:bg-gray-800 w-full">
            <div className="flex items-center justify-center">
              <div className="py-3 border rounded-lg dark:border-gray-600">
                <ol className="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600">
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 transition text-[#1BA1E2]"
                      aria-label="Previous"
                      rel="prev"
                    >
                      <svg
                        className="w-5 h-5 rtl:scale-x-[-1]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none transition text-[#1BA1E2] focus:underline bg-yellow-500/10 ring-2 ring-[#1BA1E2]"
                    >
                      <span>1</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>2</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>3</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>4</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>5</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>6</span>
                    </button>
                  </li>
                  <li>
                    <button
                      disabled=""
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none filament-tables-pagination-item-disabled cursor-not-allowed pointer-events-none opacity-70"
                    >
                      <span>...</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>9</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
                    >
                      <span>10</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-[#1BA1E2] dark:hover:bg-gray-400/5 transition text-yellow-600"
                      aria-label="Next"
                      rel="next"
                    >
                      <svg
                        className="w-5 h-5 rtl:scale-x-[-1]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
