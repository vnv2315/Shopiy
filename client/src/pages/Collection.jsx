import { useState, useMemo, useContext, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import { Filter, SortAsc } from 'lucide-react';

const Collection = () => {
  const { products, getProducts } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(product => product.subCategory === selectedSubcategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'bestseller':
        filtered.sort((a, b) => b.bestSeller - a.bestSeller);
        break;
      default:
        break;
    }

    return filtered;
  }, [products, selectedCategory, selectedSubcategory, sortBy]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    const categoryProducts = products.filter(product => product.category === selectedCategory);
    const subcategories = [...new Set(categoryProducts.map(product => product.subCategory))];
    return subcategories;
  };

  const getCategories = () => {
    const categories = [...new Set(products.map(product => product.category))];
    return categories;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Our Collection</h1>
          <p className="text-muted-foreground">
            Discover our complete range of products ({filteredProducts.length} items)
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full btn-secondary flex items-center justify-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div className="bg-shop-card p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedSubcategory('all');
                      }}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">All Categories</span>
                  </label>
                  {getCategories().map((category) => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                          setSelectedSubcategory('all');
                        }}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-foreground capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              {getSubcategories().length > 0 && (
                <div className="bg-shop-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Subcategory</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="subcategory"
                        value="all"
                        checked={selectedSubcategory === 'all'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-foreground">All</span>
                    </label>
                    {getSubcategories().map((subcategory) => (
                      <label key={subcategory} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="subcategory"
                          value={subcategory}
                          checked={selectedSubcategory === subcategory}
                          onChange={(e) => setSelectedSubcategory(e.target.value)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-foreground capitalize">{subcategory}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </span>
              <div className="flex items-center space-x-2">
                <SortAsc className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-shop-card border border-border rounded-lg px-3 py-2 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="bestseller">Best Sellers</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                    setSortBy('featured');
                  }}
                  className="btn-primary mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
