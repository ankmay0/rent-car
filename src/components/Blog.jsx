import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Mirum est notare quam',
    date: '20/June/2018',
    description: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.',
    image: '/blog-thumb.jpg'
  },
  {
    id: 2,
    title: 'Mirum est notare quam',
    date: '20/June/2018',
    description: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.',
    image: '/blog-thumb-2.jpg'
  },
  {
    id: 3,
    title: 'Mirum est notare quam',
    date: '20/June/2018',
    description: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.',
    image: '/blog-thumb-3.jpg'
  }
];

const Blog = () => {
  return (
    <section id="blog-area" className="py-[90px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10 px-2 sm:px-0">
          <h2
            style={{ 
              fontFamily: "'Italiana', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', // clamps between 40px and 72px with viewport scaling
              lineHeight: 1.1,
              fontWeight: 'bold',
            }}
          >
            From Our Blog
          </h2>
          <p
            className="text-gray-600 mt-3"
            style={{
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', // clamps between 14px and 18px
            }}
          >
            Share your latest posts or best articles will post here.
          </p>
        </div>

        <div className="flex flex-wrap -mt-[33px]">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`w-full sm:w-1/2 md:w-1/3 ${
                index === 1 ? 'lg:w-1/2' : 'lg:w-1/4'
              } px-4 mt-[33px]`}
            >
              <div className="text-center">
                <div className="relative overflow-hidden max-h-[300px] group rounded-md">
                  <a href="single-blog.html" tabIndex={0}>
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-full h-auto object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </a>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-200">
                    <a href="single-blog.html" className="text-white text-3xl" tabIndex={0}>
                      <i className="fa fa-file-image-o" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div className="mt-6 px-1 sm:px-0">
                  <h3
                    style={{
                      fontFamily: "'Italiana', serif",
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', // 18px to 24px
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  >
                    <a
                      href="single-blog.html"
                      className="text-black hover:text-red-600 transition-colors duration-200"
                      tabIndex={0}
                    >
                      {blog.title}
                    </a>
                  </h3>
                  <span className="text-sm italic font-bold block mt-3 mb-7 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-10 after:h-0.5 after:bg-red-600 pb-4">
                    {blog.date}
                  </span>
                  <p
                    className="italic font-serif text-gray-700"
                    style={{
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', // 14px to 16px
                    }}
                  >
                    {blog.description}
                  </p>
                  <a
                    href="single-blog.html"
                    className="inline-block mt-4 text-red-600 hover:underline"
                    tabIndex={0}
                    style={{
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', // match paragraph size
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
