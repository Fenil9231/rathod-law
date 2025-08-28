import React from 'react';

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Canadian Immigration Express Entry System",
      excerpt: "A comprehensive guide to the Express Entry system and how it can help you immigrate to Canada successfully.",
      date: "January 15, 2024",
      category: "Immigration Law",
      image: "/assets/img/blog/blog-1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Family Sponsorship: Bringing Your Loved Ones to Canada",
      excerpt: "Learn about the family sponsorship program and the requirements for sponsoring your family members.",
      date: "January 10, 2024",
      category: "Immigration Law",
      image: "/assets/img/blog/blog-2.jpg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Divorce Proceedings in British Columbia: What You Need to Know",
      excerpt: "Understanding the divorce process in BC, including property division, child custody, and support arrangements.",
      date: "January 5, 2024",
      category: "Family Law",
      image: "/assets/img/blog/blog-3.jpg",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Provincial Nominee Program (PNP) Updates for 2024",
      excerpt: "Latest updates and changes to the Provincial Nominee Program and how they affect your immigration plans.",
      date: "December 28, 2023",
      category: "Immigration Law",
      image: "/assets/img/blog/blog-4.jpg",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Child Custody and Support: Protecting Your Children's Interests",
      excerpt: "A guide to child custody arrangements and support calculations in family law proceedings.",
      date: "December 20, 2023",
      category: "Family Law",
      image: "/assets/img/blog/blog-5.jpg",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Refugee Protection Claims: Your Rights and Options",
      excerpt: "Understanding the refugee protection process in Canada and how to navigate the system effectively.",
      date: "December 15, 2023",
      category: "Immigration Law",
      image: "/assets/img/blog/blog-6.jpg",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <div className="blog-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title1 text-center mb-5">
                <h2>Legal Insights & News</h2>
                <p>Stay informed with the latest updates in immigration and family law, expert insights, and legal guidance from our experienced team.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="blog-card h-100">
                  <div className="blog-img">
                    <img src={post.image} alt={post.title} className="img-fluid" />
                    <div className="blog-category">
                      <span className="category-tag">{post.category}</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                    <h4 className="blog-title">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h4>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="read-more-btn">
                      Read More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <div className="blog-pagination text-center">
                <nav aria-label="Blog pagination">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                        <i className="bi bi-chevron-left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="bi bi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="newsletter-section text-center">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter to receive the latest legal insights and updates directly in your inbox.</p>
                <form className="newsletter-form">
                  <div className="input-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter your email address"
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .blog-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .blog-img {
          position: relative;
          overflow: hidden;
        }
        
        .blog-img img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .blog-card:hover .blog-img img {
          transform: scale(1.05);
        }
        
        .blog-category {
          position: absolute;
          top: 15px;
          left: 15px;
        }
        
        .category-tag {
          background: #1B365D;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .blog-content {
          padding: 25px;
        }
        
        .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          font-size: 14px;
          color: #666;
        }
        
        .blog-title {
          margin-bottom: 15px;
          font-size: 18px;
          line-height: 1.4;
        }
        
        .blog-title a {
          color: #1B365D;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .blog-title a:hover {
          color: #D4AF37;
        }
        
        .blog-excerpt {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .read-more-btn {
          color: #1B365D;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .read-more-btn:hover {
          color: #D4AF37;
        }
        
        .newsletter-section {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 10px;
        }
        
        .newsletter-form .input-group {
          max-width: 400px;
          margin: 0 auto;
        }
        
        .newsletter-form .form-control {
          border: 1px solid #ddd;
          padding: 12px 15px;
        }
        
        .newsletter-form .btn {
          background: #1B365D;
          border: none;
          padding: 12px 25px;
        }
        
        .newsletter-form .btn:hover {
          background: #D4AF37;
        }
        
        .pagination .page-link {
          color: #1B365D;
          border: 1px solid #ddd;
          padding: 10px 15px;
        }
        
        .pagination .page-item.active .page-link {
          background: #1B365D;
          border-color: #1B365D;
        }
        
        .pagination .page-link:hover {
          background: #D4AF37;
          border-color: #D4AF37;
          color: white;
        }
      `}</style>
    </>
  );
}

export default BlogSection;