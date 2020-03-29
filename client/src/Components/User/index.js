import React from "react";
import UserLayout from "../../Hoc/User";
import MyButton from "../../utils/Mybutton";

export default function UserDashboard() {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
            <span>Name</span>
            <span>Surname</span>
            <span>Email</span>
          </div>
          <MyButton
            type="default"
            title="Edit Account info"
            linkTo="/user/user_profile"
          ></MyButton>
        </div>
        <div className="user_nfo_panel">
          <h1>History Purchases</h1>
          <div className="user_product_block_wrapper">History</div>
        </div>
      </div>
    </UserLayout>
  );
}
