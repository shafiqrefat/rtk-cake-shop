import React, { useEffect } from "react";
import { fetchUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserView = () => {
  const { isLoading, users, isError } = useSelector((state) => state.user);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className="text-start">
      <h1 className="text-3xl font-semibold">List of Customers:</h1>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && isError ? <div>Error: {isError}</div> : null}
      {!isLoading && users.length && (
        <ol className="list-decimal text-start">
          {users.map((user) => (
            <li key={user.id} className="border border-green-400 rounded-md p-2 m-2">{user.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default UserView;
