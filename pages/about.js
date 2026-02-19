export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 text-center">
            About luofu.lk
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Welcome to luofu.lk, your trusted destination for premium quality slippers. 
              We are passionate about providing comfortable, stylish, and durable footwear 
              that enhances your everyday life.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-blue mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At luofu.lk, our mission is to deliver exceptional comfort and quality through 
              our carefully curated collection of slippers. We believe that everyone deserves 
              to experience the perfect blend of style and comfort in their daily footwear.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-blue mt-8 mb-4">
              Quality First
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We source only the finest materials and work with skilled craftsmen to ensure 
              that every pair of slippers meets our high standards. Quality is not just a 
              promise—it's our commitment to you.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-blue mt-8 mb-4">
              Customer Satisfaction
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your satisfaction is our top priority. We strive to provide excellent customer 
              service and ensure that your shopping experience with us is smooth and enjoyable. 
              If you have any questions or concerns, we're here to help.
            </p>
            
            <div className="mt-12 p-6 bg-brand-blue text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Get in Touch</h3>
              <p className="mb-2">
                <strong>Phone:</strong> <a href="tel:+94770022281" className="text-brand-gold hover:underline">0770022281</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@luofu.lk" className="text-brand-gold hover:underline">info@luofu.lk</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
