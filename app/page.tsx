import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";

async function getUserData() {
  const response = await axios.get("https:")
    return response.data;
  
}

export default async function Home() {
  const userDetails = await getUserData();

  return (
    <div>
      Hi there
      {userDetails.email}
      {userDetails.name}
    </div>
  )
}
