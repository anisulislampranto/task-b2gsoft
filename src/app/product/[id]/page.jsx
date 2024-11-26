import ProductDetailsClient from "../../../components/ProductDetails/ProductDetailsClient";
import mockData from "../../../assets/products.json";

export async function generateStaticParams() {
  return mockData.products.map((product) => ({
    id: product.id,
  }));
}

export async function getProductDetails(id) {
  try {
    const product = mockData.products.find((product) => product.id === id);

    if (!product) {
      throw new Error("Product not found");
    }

    return { product };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const productDetails = await getProductDetails(params.id);

  return {
    title: productDetails ? productDetails.product.name : "Product Details",
    description: `Details about ${productDetails?.product?.name}`,
  };
}

export default async function Page({ params }) {
  const productDetails = await getProductDetails(params.id);

  if (!productDetails) {
    return <div className="h-screen text-center flex items-center justify-center">No details found for this Product.</div>;
  }

  return <ProductDetailsClient productDetails={productDetails.product} />;
}
