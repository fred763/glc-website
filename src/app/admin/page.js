// File: app\admin\page.js
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getUser } from "../../utils/firebase/getUser";
import { signOutUser } from '../../utils/firebase/logout';
import { toast } from "react-hot-toast";

const AdminDashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const onLogout = async () => {
    try {
      const res = await signOutUser();
      if (res.success) {
        toast.success(res.message);
        router.push("/admin/login");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during logout.");
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser();
      if (!user) {
        router.push('/admin/login');
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  if (loading) return <div className="flex justify-center items-center h-screen"><h2 className="text-xl">Loading...</h2></div>;

  return (
    <div className="container mx-auto px-6 py-8">
  <div className="container mx-auto px-6 py-8 mt-20"></div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <button 
          className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <Link href="/admin/enquiries" className="block">
          <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Manage Enquiries</h2>
            <p className="text-gray-600">View and respond to customer enquiries</p>
          </div>
        </Link>
        
        <Link href="/admin/blog" className="block">
          <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Manage Blog Articles</h2>
            <p className="text-gray-600">Create, edit, and delete blog posts</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;