import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import sizeGuide from '../assets/size.png';

const Product = () => {
  const {addItems, products, getProducts} = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [clicked,setClicked]=useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(p => p._id === id);
      setProduct(foundProduct);
      if (foundProduct && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-4">Product not found</p>
          <Link to="/collection" className="btn-primary">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-primary">Collection</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src={product.image && product.image.length > 0 ? product.image[selectedImage] : '/placeholder.svg'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.image && product.image.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.image.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-secondary rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground capitalize">{product.category} • {product.subCategory}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-shop-price">₹{product.price}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="bg-shop-sale text-white text-sm px-2 py-1 rounded">
                    {discountPercentage}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-shop-card text-foreground hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <span 
                className="text-gray-600 cursor-pointer hover:text-red-800"
                onClick={()=>{setClicked(true)}}
              >
                size-guide
              </span>


            </div>
            


            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={()=>addItems(product,selectedSize,quantity)}
                className="flex-1 btn-primary flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
              {/* <button className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                <Heart className="w-5 h-5" />
              </button> */}
            </div>

            {/* Features */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p._id !== product._id && p.category === product.category).slice(0, 4).map((relatedProduct) => (
              <div key={relatedProduct._id} className="product-card">
                <Link to={`/product/${relatedProduct._id}`}>
                  <img
                    src={relatedProduct.image && relatedProduct.image.length > 0 ? relatedProduct.image[0] : '/placeholder.svg'}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-foreground">{relatedProduct.name}</h3>
                    <span className="price-tag">₹{relatedProduct.price}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {clicked &&
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50' onClick={()=>setClicked(false)}>
            <div className='bg-white  rounded-lg max-w-md w-full relative' onClick={(e)=>e.stopPropagation()}>
              <button className='absolute top-2 right-2 text-gray-600 hover:text-gray-800' onClick={()=>setClicked(false)}>X</button>
              <img src={sizeGuide} alt="Size Guide" className='w-full h-auto'/>
            </div>
          </div>
        }
      </div>
    </div>

  );
};

export default Product;