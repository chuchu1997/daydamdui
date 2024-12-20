import Button from "../components/button";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 text-accent">
      <strong className="text-[70px] text-[red]">404 Page Not Found</strong>

      <p className="text-[20px] font-bold italic">
        Trang này không tồn tại vui lòng quay lại trang chủ{" "}
      </p>
      <Button as={Link} to="/">
        Trang Chủ
      </Button>
    </div>
  );
};

export default ErrorPage;
