import { CartHeader } from "@/components/CartHeader";
import { CartSection } from "@/components/CartSection";
import { CartTool } from "@/components/CartTool";

export default function Cart() {
  return (
    <div>
      <CartHeader />
      <CartTool />
      <CartSection />
    </div>
  );
}
