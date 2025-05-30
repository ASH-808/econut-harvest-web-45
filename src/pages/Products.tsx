import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Neera Sugar",
      description: "Natural sweetener extracted from fresh coconut palm nectar. Low glycemic index makes it perfect for health-conscious consumers and diabetics.",
      benefits: ["Low glycemic index", "Rich in minerals", "Unprocessed natural sweetener"],
      price: "₹250/kg",
      image: "/lovable-uploads/eba3f987-276d-4443-8831-72d6c8043626.jpg"
    },
    {
      id: 2,
      name: "Virgin Coconut Oil",
      description: "Cold-pressed from fresh coconut meat, retaining all natural nutrients and flavor. Perfect for cooking, skincare, and haircare.",
      benefits: ["Cold-pressed", "High in MCTs", "Multipurpose use"],
      price: "₹400/500ml",
      image: "/lovable-uploads/40a66529-6750-4393-af80-e85e5aed29d8.png"
    },
    {
      id: 3,
      name: "Coconut Milkshake",
      description: "Ready-to-drink natural coconut milkshake made from fresh coconuts. Refreshing and nutritious with no artificial additives.",
      benefits: ["No preservatives", "Natural electrolytes", "Instant energy"],
      price: "₹80/250ml",
      image: "/lovable-uploads/d370a513-6062-4ecb-8449-7881c7e6c0ba.jpg"
    },
    {
      id: 4,
      name: "Coconut Water",
      description: "Fresh coconut water directly from young green coconuts. Natural isotonic drink packed with electrolytes and minerals.",
      benefits: ["Natural electrolytes", "Zero calories", "Hydrating"],
      price: "₹50/300ml",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Coconut Flour",
      description: "Gluten-free flour made from dried coconut meat. High in fiber and protein, perfect for healthy baking and cooking.",
      benefits: ["Gluten-free", "High fiber", "Protein-rich"],
      price: "₹180/500g",
      image: "/lovable-uploads/65c2405b-e79f-4e73-9077-70cf07c73528.png"
    },
    {
      id: 6,
      name: "Desiccated Coconut",
      description: "Finely grated dried coconut meat. Ideal for baking, cooking, and as a healthy snack ingredient.",
      benefits: ["Long shelf life", "Versatile ingredient", "Natural flavor"],
      price: "₹120/250g",
      image: "/lovable-uploads/4f7cdc93-8dec-4929-8e2c-f3220877d8df.png"
    },
    {
      id: 7,
      name: "Coconut Chips",
      description: "Crispy toasted coconut slices, lightly sweetened. A healthy snack alternative packed with natural flavor.",
      benefits: ["Healthy snacking", "Natural sweetness", "Crunchy texture"],
      price: "₹150/200g",
      image: "/lovable-uploads/76fae9b7-a121-431b-99ae-463953be2d96.png"
    },
    {
      id: 8,
      name: "Coconut Vinegar",
      description: "Fermented coconut sap vinegar with probiotic benefits. Natural and organic with rich, complex flavor profile.",
      benefits: ["Probiotic benefits", "Natural fermentation", "Rich in amino acids"],
      price: "₹200/500ml",
      image: "/lovable-uploads/d9c9c81a-f280-4850-a25e-28a2ba126e7d.png"
    },
    {
      id: 9,
      name: "Coconut Honey",
      description: "Sweet syrup made from coconut palm nectar. Natural alternative to processed sugar with unique tropical flavor.",
      benefits: ["Mineral-rich", "Natural sweetener", "Tropical flavor"],
      price: "₹300/350ml",
      image: "/lovable-uploads/923f827e-32a3-46f8-aac9-bf574b032056.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
              Premium Organic Products
            </h1>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              Discover our complete range of authentic coconut products, sourced directly 
              from Karnataka's finest organic farms and processed with traditional methods.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="border-green-200 hover:shadow-xl transition-all group overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-amber-100 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-green-900 text-xl">{product.name}</CardTitle>
                    <div className="text-2xl font-bold text-amber-700">{product.price}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-800 text-sm">Key Benefits:</h4>
                      <ul className="text-sm text-gray-600">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold transform transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Our Quality Promise
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Every product is carefully crafted using traditional methods and modern quality standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-green-900 mb-2">100% Organic</h3>
                <p className="text-gray-600 text-sm">Certified organic farming without chemicals or pesticides</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-amber-800 mb-2">Direct from Farmers</h3>
                <p className="text-gray-600 text-sm">No middlemen, ensuring freshness and fair prices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-green-900 mb-2">Fresh Processing</h3>
                <p className="text-gray-600 text-sm">Processed within 24 hours of harvest for maximum nutrition</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-amber-800 mb-2">Quality Tested</h3>
                <p className="text-gray-600 text-sm">Rigorous quality checks and organic certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
