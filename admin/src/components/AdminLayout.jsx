import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const AdminLayout = ({ setToken, token }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/products", label: "All Products", icon: "inventory_2" },
    { to: "/add", label: "Add Product", icon: "add_circle" },
    { to: "/orders", label: "Orders", icon: "shopping_cart" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        {/* Left: Menu button for mobile */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden flex items-center gap-2"
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Title */}
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="material-icons text-blue-400">dashboard</span>
          Admin Panel
        </h1>

        {/* Logout */}
        <button
          onClick={() => setToken("")}
          className="flex items-center gap-1 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <span className="material-icons">logout</span>
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-64 bg-white border-r p-4 space-y-4 shadow-lg
            transform transition-transform duration-300 ease-in-out z-40
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:static
          `}
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition ${
                  location.pathname === item.to
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="material-icons">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
            <Outlet context={{ token }} />
          </div>
        </main>
      </div>

      {/* Dark overlay on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
