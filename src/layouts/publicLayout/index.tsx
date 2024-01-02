import { Outlet } from "react-router-dom";
import { LayoutContentWrap, LayoutWrap } from "../layoutStyles";

const PublicLayout = () => {
  return (
    <LayoutWrap>
      <LayoutContentWrap>
        <Outlet />
      </LayoutContentWrap>
    </LayoutWrap>
  );
};

export default PublicLayout;

