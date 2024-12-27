import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/(Admin)/card";
import { formatNumber } from "@/(hooks)/formatters";
import axios from "axios";

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

async function getProductData() {
  try {
    const [activeCount, inactiveCount] = await Promise.all([
      axios
        .get("https://e-commerce-mbyo.onrender.com/product/active")
        .then((res) => res.data.count),
      axios
        .get("https://e-commerce-mbyo.onrender.com/product/inactive")
        .then((res) => res.data.count),
    ]);

    return { activeCount, inactiveCount };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { activeCount: 0, inactiveCount: 0 };
  }
}

export default async function AdminDashboard() {
  const [userData, productData] = await Promise.all([getUserData(), getProductData()]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Customers"
        subtitle={`${formatNumber(userData.userCount)} Registered Users`}
        body={`${formatNumber(userData.userCount)}`}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
        body={formatNumber(productData.activeCount)}
      />
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
