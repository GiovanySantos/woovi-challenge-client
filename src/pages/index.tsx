import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

export default function Home() {
  const { userData } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (!userData) router.push("/authentication");
  }, [userData]);

  console.log(userData);

  return (
    <div className=''>
      <div className=''>Welcome {userData?.name}</div>
    </div>
  );
}

