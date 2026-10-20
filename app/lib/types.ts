export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  condition: string;
  location: string;
  image: string;
  photos?: string[];
  seller: string;
  description: string;
  badge?: string;
  color: string;
};

export type Profile = { fullName: string; mobile: string; address: string; city: string; state: string; pinCode: string };
export type Language = "en" | "te" | "hi";
export type Order = { id: string; items: Product[]; date: string; total: number; status: string; checkoutCompleted: true };
