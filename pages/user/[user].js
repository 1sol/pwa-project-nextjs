import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();

  const { user } = router.query;
  return <h2>이름: {user}</h2>;
};

export default User;
