import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Snatchers.in</h1>
        <p className="mb-4">
          At <strong>Snatchers.in</strong>, we believe that jewelry transcends gender boundaries. Our mission is to craft pieces that empower individuals to express their unique identities, free from traditional norms.
        </p>
        <p className="mb-4">
          Founded in 2025, Snatchers.in emerged from a vision to redefine jewelry as a medium of self-expression. Our collections blend timeless elegance with contemporary flair, ensuring that every piece resonates with authenticity and style.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Inclusivity</strong>: Designs that cater to all, celebrating diversity and individuality.</li>
          <li><strong>Craftsmanship</strong>: Meticulous attention to detail, ensuring each piece is a masterpiece.</li>
          <li><strong>Sustainability</strong>: Ethically sourced materials and eco-friendly practices at the core of our operations.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Unisex Jewelry Collection" className="rounded-lg shadow-md" />
    <p className="mt-2 text-center text-sm">Elegant pieces that redefine modern jewelry.</p>
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Craftsmanship in Action" className="rounded-lg shadow-md" />
    <p className="mt-2 text-center text-sm">Artisans at work, bringing designs to life.</p>
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Empowering Self-Expression" className="rounded-lg shadow-md" />
    <p className="mt-2 text-center text-sm">Jewelry that tells your story.</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
