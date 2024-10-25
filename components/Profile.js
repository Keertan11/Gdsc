import { useAuth } from "@/context/Authcontext";
import { Fugaz_One } from "next/font/google";

const Fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const Profile = () => {
  const { currentUser } = useAuth()
  return (
    <div className='flex justify-center items-center flex-col space-y-10'>
      <div className='h-40 w-40 rounded-full border border-black grid place-items-center font-bold'>profile</div>
      <div className={'font-bold ' + Fugaz.className}>Logged In as <span className='text-indigo-400 cursor-pointer'>{currentUser.email}</span></div>
    </div>
  );
};

export default Profile;
