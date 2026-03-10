import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">??</span>
          <span className="logo-text">Sweet Crumbs</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary nav-cta">Order Now</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">Baked Fresh Every Morning</p>
        <h1 className="hero-title">Where Every Bite<br />Feels Like Home</h1>
        <p className="hero-subtitle">
          Handcrafted breads, pastries, and cakes made with love using
          locally sourced ingredients.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">Explore Menu</a>
          <a href="#about" className="btn btn-outline">Our Story</a>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { icon: '??', title: 'Fresh Daily', desc: 'Everything is baked fresh each morning before the sun rises so you get the best quality every time.' },
    { icon: '??', title: 'Handmade', desc: 'Every loaf, cake, and pastry is crafted by hand with patience, skill, and a whole lot of heart.' },
    { icon: '??', title: 'Local Ingredients', desc: 'We partner with local farmers and suppliers to source the finest, seasonal ingredients.' },
  ]
  return (
    <section className="features">
      <div className="container">
        {items.map((item) => (
          <div className="feature-card" key={item.title}>
            <span className="feature-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Menu() {
  const products = [
    { emoji: '??', name: 'Butter Croissant', price: '$3.50', tag: 'Bestseller' },
    { emoji: '??', name: 'Sourdough Loaf', price: '$8.00', tag: 'Fresh' },
    { emoji: '??', name: 'Classic Layer Cake', price: '$32.00', tag: 'Custom' },
    { emoji: '??', name: 'Velvet Cupcake', price: '$4.25', tag: 'Popular' },
    { emoji: '??', name: 'Rustic Baguette', price: '$4.00', tag: 'Daily' },
    { emoji: '??', name: 'Glazed Doughnut', price: '$2.75', tag: 'New' },
  ]
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Our Menu</p>
          <h2>Freshly Baked Favorites</h2>
          <p className="section-sub">From classic breads to decadent cakes — there is something for everyone.</p>
        </div>
        <div className="menu-grid">
          {products.map((p) => (
            <div className="menu-card" key={p.name}>
              <div className="menu-card-img">
                <span className="menu-emoji">{p.emoji}</span>
                <span className="menu-tag">{p.tag}</span>
              </div>
              <div className="menu-card-body">
                <h4>{p.name}</h4>
                <div className="menu-card-footer">
                  <span className="menu-price">{p.price}</span>
                  <button className="btn btn-small">Add to Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-img-box">
            <span className="about-emoji">?????</span>
          </div>
          <div className="about-badge">Est. 2008</div>
        </div>
        <div className="about-text">
          <p className="section-tag">Our Story</p>
          <h2>Baking With Heart Since 2008</h2>
          <p>
            Sweet Crumbs started as a tiny home kitchen where our founder, Maria,
            spent her weekends experimenting with her grandmother's old recipes.
            What began as a passion quickly turned into a community bakery beloved
            by locals.
          </p>
          <p>
            Today we serve hundreds of happy customers daily, but our ethos
            remains unchanged — real ingredients, real care, and bread that
            actually tastes like bread.
          </p>
          <div className="about-stats">
            <div className="stat"><span className="stat-num">15+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Menu Items</span></div>
            <div className="stat"><span className="stat-num">10k+</span><span className="stat-label">Happy Customers</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: 'Sarah M.', text: 'The sourdough here is genuinely the best I have ever had. Crusty outside, perfectly chewy inside. I come every Saturday!', rating: 5 },
    { name: 'James T.', text: 'Ordered a custom birthday cake and it was absolutely stunning — beautiful and delicious. The whole family raved about it.', rating: 5 },
    { name: 'Priya K.', text: 'The croissants are buttery perfection. I grab one every morning on my way to work. Nothing beats a freshly baked pastry!', rating: 5 },
  ]
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Testimonials</p>
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div className="testimonial-card" key={r.name}>
              <div className="stars">{'?'.repeat(r.rating)}</div>
              <p className="testimonial-text">"{r.text}"</p>
              <p className="testimonial-name">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="section-tag">Get In Touch</p>
          <h2>Visit Us or Place an Order</h2>
          <div className="contact-details">
            <div className="contact-item"><span>??</span><div><strong>Address</strong><p>42 Maple Street, Willowbrook, NY 10001</p></div></div>
            <div className="contact-item"><span>?</span><div><strong>Hours</strong><p>Mon–Fri: 7 AM – 7 PM<br />Sat–Sun: 7 AM – 5 PM</p></div></div>
            <div className="contact-item"><span>??</span><div><strong>Phone</strong><p>(555) 123-4567</p></div></div>
            <div className="contact-item"><span>??</span><div><strong>Email</strong><p>hello@sweetcrumbs.com</p></div></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Place a Custom Order</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your order..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full">Send Message</button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-icon">??</span>
          <span className="logo-text">Sweet Crumbs</span>
          <p>Baked fresh. Made with love. Served with joy.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Sweet Crumbs Bakery. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
