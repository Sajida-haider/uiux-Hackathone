import React from 'react';

const Blog = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
            Our Blogs
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Image Card 1 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col items-center">
              <img
                alt="blog image"
                className="w-[393px] h-[400px] rounded-2xl object-cover"
                src="/blog1.jpg"
              />
              <h1 className="tracking-widest text-xl title-font font-serif font-medium text-black mb-1 mt-4 py-4">
                Going all-in with millennial design
              </h1>
             
              <a href="#" className="border-b-2 text-xl border-black pb-2 py-8">
                Read More
              </a>
              <div className="flex justify-center gap-4 mt-4">
                  <span className="text-sm text-black">5 min</span>
                  <span className="text-sm text-black">12th Oct 2022</span>
                </div>
            </div>
          </div>

          {/* Image Card 2 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col items-center">
              <img
                alt="blog image"
                className="w-[393px] h-[400px] rounded-2xl object-cover"
                src="/blog2.jpg"
              />
              <h1 className="tracking-widest text-xl title-font font-serif font-medium text-black mb-1 mt-4 py-4">
                Going all-in with millennial design
              </h1>
              
              <a href="#" className="border-b-2 text-xl border-black pb-2 py-8">
                Read More
              </a>
              <div className="flex justify-center text-xl gap-4 mt-4">
                  <span className="text-sm text-black">5 min</span>
                  <span className="text-sm text-black">12th Oct 2022</span>
                </div>
            </div>
          </div>

          {/* Image Card 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col items-center">
              <img
                alt="blog image"
                className="w-[393px] h-[400px] rounded-2xl object-cover"
                src="/blog3.jpg"
              />
              <h1 className="tracking-widest text-xl title-font font-medium font-serif text-black mb-1 mt-4 py-4">
                Going all-in with millennial design
              </h1>
              
              
              <a href="#" className="border-b-2 text-xl border-black pb-2 py-8">
                Read More
              </a>
              <div className="flex justify-center gap-4 mt-4">
                  <span className="text-sm text-black">5 min</span>
                  <span className="text-sm text-black">12th Oct 2022</span>
                </div>
            </div>
          </div>
        </div>

        {/* View All Posts Section */}
        <div className="text-center mt-8 py-6">
          <h2 className="text-2xl font-medium text-gray-900">
            <a href="#" className="border-b-2 border-black pb-4 ">
              View All Posts
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Blog;
