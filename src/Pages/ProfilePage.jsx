import React from "react";
import { LogOut, Mail, MapPin, Phone, User } from "lucide-react";

const user = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 234 567 890",
  address: "123 Main St, Springfield, USA",
  avatar: "https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lAhttps://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bio: "Fashion-forward & always in style. Exploring trends & setting them.",
};

const orders = [
  {
    id: 101,
    productTitle: "Rose Gold Watch",
    productImage: "/product-7.jpg",
    price: 499.99,
    status: "Delivered",
    orderDate: "2025-05-10",
  },
  {
    id: 102,
    productTitle: "Platinum Band",
    productImage: "/product-10.jpg",
    price: 1099.99,
    status: "Shipped",
    orderDate: "2025-05-22",
  },
  {
    id: 103,
    productTitle: "Silver Bracelet",
    productImage: "/product-3.jpg",
    price: 149.99,
    status: "Processing",
    orderDate: "2025-05-27",
  },
];

const ProfilePage = () => {
  const handleSignOut = () => {
    alert("Signed out");
  };

  return (
    <section className="bg-white min-h-screen py-14 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Italiana', serif" }}>
            My Profile
          </h1>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-[#f9f9f9] border border-black/10 rounded-xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-md">
          <img
            // src={user.avatar}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className="w-32 h-32 rounded-full border-2 border-black object-cover"
          />
          <div className="flex-1 space-y-3 text-gray-800">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <User size={20} />
              {user.name}
            </h2>
            <p className="italic text-gray-600">{user.bio}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} /> {user.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {user.phone}
              </p>
              <p className="col-span-2 flex items-center gap-2">
                <MapPin size={16} /> {user.address}
              </p>
            </div>
          </div>
        </div>

        {/* Order Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Italiana', serif" }}>My Orders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-black/10 rounded-lg p-4 flex gap-4 items-center bg-[#fafafa] hover:shadow-lg transition"
              >
                <img
                  src={order.productImage}
                  alt={order.productTitle}
                  className="w-20 h-20 object-cover rounded border border-black"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{order.productTitle}</h4>
                  <p className="text-sm text-gray-600">${order.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">Ordered on {order.orderDate}</p>
                </div>
                <div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      order.status === "Delivered"
                        ? "bg-green-100 border-green-400 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-yellow-100 border-yellow-400 text-yellow-800"
                        : "bg-red-100 border-red-400 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
