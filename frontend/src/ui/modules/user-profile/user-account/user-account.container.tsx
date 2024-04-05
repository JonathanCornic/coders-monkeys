import { useAuth } from "@/context/AuthUserContext";

export function UserAccountContainer() {
  const {authUser} = useAuth()
  console.log('authUser', authUser)
  return <div className="flex justify-center pt-20 pb-40"></div>;
}
