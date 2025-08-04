export type TRevenueData = {
  total: number;
  lastMonthTotal: number;
  percentageChange: number;
};

export type TOverYearData = {
  totalRevenue: number;
  totalOrders: number;
  month: string;
};

export type TOrdersData = {
  total: number;
  lastMonthTotal: number;
  percentageChange: number;
};

export type TUsersData = {
  total: number;
  lastMonthTotal: number;
  percentageChange: number;
};

// ✅ Updated final analytics type
export type SalesData = {
  revenueData: TRevenueData;
  ordersData: TOrdersData;
  usersData: TUsersData;
};

export type Last12MonthsAnalyticsData = {
  users: {
    users: number;
    month: string; // Format: YYYY-MM
  }[];
  orders: {
    orders: number;
    month: string; // Format: YYYY-MM
  }[];
  revenue: {
    totalRevenue: number;
    month: string; // Format: YYYY-MM
  }[];
};


export type ProductSalesSummary = {
  totalQuantitySold: number;
  totalRevenue: number;
  productId: string;
  name: string;
  images: string[];
  brand: string;
  price: number;
};

export type ProductSalesList = ProductSalesSummary[];