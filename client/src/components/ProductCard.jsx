import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const {addItems}=useContext(CartContext);
  const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Link to={`/product/${product._id}`} className="product-card group">
      <div className="relative overflow-hidden">
        <img
          src={product.image && product.image.length > 0 ? product.image[0] : '/placeholder.svg'}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.bestSeller && (
          <span className="absolute top-2 left-2 bg-success text-success-foreground text-xs px-2 py-1 rounded">
            Bestseller
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="absolute top-2 right-2 bg-shop-sale text-white text-xs px-2 py-1 rounded">
            -{discountPercentage}%
          </span>
        )}
        
        {/* Hover actions */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItems(product, product.sizes[0], 1);
            }}
            className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary-hover transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground mt-1 capitalize">
          {product.category} • {product.subCategory}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="price-tag text-lg">₹{product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {product.sizes.slice(0, 4).map((size) => (
            <span
              key={size}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
            >
              {size}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
              +{product.sizes.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;