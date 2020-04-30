import React from "react";
import UserLayout from "../../Hoc/User";
import MyButton from "../../utils/Mybutton";
import UserHistoryBlock from "../../utils/User/history_block";

export default function UserDashboard({ user }) {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
            <span>{user.userData.firstName}</span>
            <span>{user.userData.lastName}</span>
            <span>{user.userData.email}</span>
          </div>
          <MyButton
            type="default"
            title="Edit Account info"
            linkTo="/user/user_profile"
          ></MyButton>
        </div>
        {user.userData.history ? (
          <div className="user_nfo_panel">
            <h1>History Purchases</h1>
            <div className="user_product_block_wrapper">
              <UserHistoryBlock products={user.userData.history} />
            </div>
          </div>
        ) : null}
      </div>
    </UserLayout>
  );
}
