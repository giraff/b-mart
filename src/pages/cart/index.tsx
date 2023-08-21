import { CartHeader } from "@/components/CartHeader";
import { CartSection } from "@/components/CartSection";
import { CartTool } from "@/components/CartTool/CartTool";
import { MdKeyboardArrowLeft } from "react-icons/md";
import s from "@/styles/index.module.scss";
import { useRouter } from "next/router";
import { LayoutTemplate } from "@/components/Layout";

export default function Cart() {
  const router = useRouter();

  return (
    <LayoutTemplate>
      <div className={s.header_wrapper}>
        <div onClick={() => router.push("/")}>
          <MdKeyboardArrowLeft />
        </div>
        <div onClick={() => router.push("/")}>Logo</div>
        <div className={s.header_tool}>
          <div onClick={() => router.push("/search")}>search</div>
          <div onClick={() => router.push("/category")}>hamburger</div>
        </div>
      </div>
      <CartHeader />

      <CartTool />
      <CartSection />
    </LayoutTemplate>
  );
}
