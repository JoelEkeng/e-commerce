// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/(Admin)/card";
import { formatNumber } from "@/(hooks)/formatters";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BarCharts } from "@/components/BarChart";
import {Component} from '@/components/VisitorsChart'

// Fetch user data
async function getUserData() {
  try {
    const response = await axios.get("https://e-commerce-mbyo.onrender.com/user/");
    const userCount = response.data.length || 0; // Assuming the API returns an array of users
    return { userCount };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { userCount: 0 };
  }
}

export default function AdminDashboard() {
  const [userData, setUserData] = useState({ userCount: 0 });

  useEffect(() => {
    async function fetchData() {
      const data = await getUserData();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      {/* Product Management Actions */}
      <div className="mt-8 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Management</h2>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
              <Link href="/admin/products">Add New Product</Link>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center mx-auto">
          <DashboardCard
            title="Customers"
            subtitle={`${formatNumber(userData.userCount)} Registered Users`}
            body={`${formatNumber(userData.userCount)}`}
          />
          <Component />
        </div>
        <div className="mt-12 h-4">
        <BarCharts />
        </div>
      </div>
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}

// Handle navigation for product management actions
const handleNavigation = (path: string) => {
  const router = useRouter();
  router.push(path);
};
