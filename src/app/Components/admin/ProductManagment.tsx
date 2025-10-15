// // app/admin/dashboard/components/ProductManagement.tsx
// "use client";

// import Image from "next/image";
// import { useState } from "react";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   stock: number;
//   image: string;
//   status: "active" | "inactive";
//   createdAt: string;
// }

// export default function ProductManagement() {
//   const [products, setProducts] = useState<Product[]>([
//     {
//       id: "1",
//       name: "Wireless Headphones",
//       description: "High-quality wireless headphones with noise cancellation",
//       price: 199.99,
//       category: "Electronics",
//       stock: 50,
//       image: "/api/placeholder/80/80",
//       status: "active",
//       createdAt: "2024-01-15",
//     },
//     {
//       id: "2",
//       name: "Smart Watch",
//       description: "Feature-rich smartwatch with health monitoring",
//       price: 299.99,
//       category: "Electronics",
//       stock: 25,
//       image: "/api/placeholder/80/80",
//       status: "active",
//       createdAt: "2024-01-10",
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     stock: "",
//     status: "active" as "active" | "inactive",
//   });

//   const openAddModal = () => {
//     setEditingProduct(null);
//     setFormData({
//       name: "",
//       description: "",
//       price: "",
//       category: "",
//       stock: "",
//       status: "active",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (product: Product) => {
//     setEditingProduct(product);
//     setFormData({
//       name: product.name,
//       description: product.description,
//       price: product.price.toString(),
//       category: product.category,
//       stock: product.stock.toString(),
//       status: product.status,
//     });
//     setShowModal(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const productData = {
//       ...formData,
//       price: parseFloat(formData.price),
//       stock: parseInt(formData.stock),
//     };

//     if (editingProduct) {
//       // Update product
//       setProducts(
//         products.map((product) =>
//           product.id === editingProduct.id
//             ? { ...editingProduct, ...productData }
//             : product
//         )
//       );
//     } else {
//       // Add new product
//       const newProduct: Product = {
//         id: Date.now().toString(),
//         ...productData,
//         image: "/api/placeholder/80/80",
//         createdAt: new Date().toISOString().split("T")[0],
//       };
//       setProducts([...products, newProduct]);
//     }
//     setShowModal(false);
//   };

//   const deleteProduct = (id: string) => {
//     if (confirm("Are you sure you want to delete this product?")) {
//       setProducts(products.filter((product) => product.id !== id));
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
//         <button
//           onClick={openAddModal}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
//         >
//           Add New Product
//         </button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <div className="h-48 bg-gray-200 flex items-center justify-center">
//               <Image
//                 fill
//                 src={product.image}
//                 alt={product.name}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-2">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {product.name}
//                 </h3>
//                 <span
//                   className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                     product.status === "active"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {product.status}
//                 </span>
//               </div>
//               <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-2xl font-bold text-gray-900">
//                   ${product.price}
//                 </span>
//                 <span className="text-sm text-gray-500">
//                   Stock: {product.stock}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => openEditModal(product)}
//                   className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteProduct(product.id)}
//                   className="text-red-600 hover:text-red-900 text-sm font-medium"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add/Edit Product Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
//             <h3 className="text-lg font-medium mb-4">
//               {editingProduct ? "Edit Product" : "Add New Product"}
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Product Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     required
//                     rows={3}
//                     value={formData.description}
//                     onChange={(e) =>
//                       setFormData({ ...formData, description: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Price
//                   </label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     required
//                     value={formData.price}
//                     onChange={(e) =>
//                       setFormData({ ...formData, price: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.category}
//                     onChange={(e) =>
//                       setFormData({ ...formData, category: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Stock
//                   </label>
//                   <input
//                     type="number"
//                     required
//                     value={formData.stock}
//                     onChange={(e) =>
//                       setFormData({ ...formData, stock: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Status
//                   </label>
//                   <select
//                     value={formData.status}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         status: e.target.value as "active" | "inactive",
//                       })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md"
//                 >
//                   {editingProduct ? "Update" : "Create"} Product
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// app/admin/dashboard/components/ProductManagement.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  status: "active" | "inactive";
  createdAt: string;
  sku?: string;
  weight?: number;
  dimensions?: string;
}

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 199.99,
      category: "Electronics",
      stock: 50,
      image: "/api/placeholder/80/80",
      status: "active",
      createdAt: "2024-01-15",
      sku: "WH-001",
      weight: 0.5,
      dimensions: "20x15x8 cm"
    },
    {
      id: "2",
      name: "Smart Watch",
      description: "Feature-rich smartwatch with health monitoring",
      price: 299.99,
      category: "Electronics",
      stock: 25,
      image: "/api/placeholder/80/80",
      status: "active",
      createdAt: "2024-01-10",
      sku: "SW-002",
      weight: 0.3,
      dimensions: "4x4x1 cm"
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    status: "active" as "active" | "inactive",
    sku: "",
    weight: "",
    dimensions: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Get unique categories for filter
  const categories = ["all", ...new Set(products.map(product => product.category))];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = "Product name is required";
    if (!formData.description.trim()) errors.description = "Description is required";
    if (!formData.price || parseFloat(formData.price) <= 0) errors.price = "Valid price is required";
    if (!formData.stock || parseInt(formData.stock) < 0) errors.stock = "Valid stock quantity is required";
    if (!formData.category.trim()) errors.category = "Category is required";
    if (!formData.sku.trim()) errors.sku = "SKU is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      status: "active",
      sku: "",
      weight: "",
      dimensions: ""
    });
    setFormErrors({});
    setShowModal(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      stock: product.stock.toString(),
      status: product.status,
      sku: product.sku || "",
      weight: product.weight?.toString() || "",
      dimensions: product.dimensions || ""
    });
    setFormErrors({});
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      weight: formData.weight ? parseFloat(formData.weight) : undefined,
    };

    try {
      if (editingProduct) {
        // Update product
        setProducts(
          products.map((product) =>
            product.id === editingProduct.id
              ? { 
                  ...editingProduct, 
                  ...productData,
                  image: product.image // Keep existing image
                }
              : product
          )
        );
      } else {
        // Add new product
        const newProduct: Product = {
          id: Date.now().toString(),
          ...productData,
          image: "/api/placeholder/80/80",
          createdAt: new Date().toISOString().split("T")[0],
        };
        setProducts([...products, newProduct]);
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error saving product:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const toggleProductStatus = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              status: product.status === "active" ? "inactive" : "active",
            }
          : product
      )
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <span className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => toggleProductStatus(product.id)}
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === "active"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    } transition-colors`}
                  >
                    {product.status}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className={`text-sm font-medium ${
                      product.stock > 10 ? "text-green-600" : 
                      product.stock > 0 ? "text-yellow-600" : "text-red-600"
                    }`}>
                      Stock: {product.stock}
                    </span>
                  </div>
                  {product.sku && (
                    <div className="text-xs text-gray-500">SKU: {product.sku}</div>
                  )}
                </div>
                <div className="flex justify-between space-x-2">
                  <button
                    onClick={() => openEditModal(product)}
                    className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700 text-sm font-medium py-2 px-3 rounded transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-sm font-medium py-2 px-3 rounded transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter product name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.description ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter product description"
                  />
                  {formErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.sku}
                    onChange={(e) => handleInputChange('sku', e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.sku ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., PROD-001"
                  />
                  {formErrors.sku && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.sku}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.category ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Electronics"
                  />
                  {formErrors.category && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.category}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.price ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="0.00"
                  />
                  {formErrors.price && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.price}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={formData.stock}
                    onChange={(e) => handleInputChange('stock', e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.stock ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="0"
                  />
                  {formErrors.stock && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.stock}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 20x15x8 cm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : (
                    editingProduct ? "Update Product" : "Create Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}