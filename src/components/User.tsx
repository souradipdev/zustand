import React, {useEffect} from 'react';
import {useStore} from "@/store/store";
import {Input} from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {UserIcon} from 'lucide-react';
import {useShallow} from "zustand/react/shallow";

function User() {
  const {userName, fullName, age, address, fetchUser, setAddress} = useStore(
    useShallow(state => ({
      userName: state.userName,
      fullName: state.fullName,
      age: state.age,
      address: state.address,
      fetchUser: state.fetchUser,
      setAddress: state.setAddress
    }))
  )

  useEffect(() => {
    (async () => {
        await fetchUser()
      }
    )()
  }, []);

  useEffect(() => {
    console.log(address)
  }, [address]);

  return (
    <div className={""}>
      <Popover>
        <PopoverTrigger asChild className={""}>
          <div className={"bg-accent p-1.5 rounded"}>
            <UserIcon size={28} strokeWidth={2.5}/>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-80 flex flex-col gap-4">
          <div className={"w-full justify-between flex gap-8"}>
            <p>{userName}</p>
            <p>{fullName}</p>
          </div>

          <p>Set your address</p>
          <Input onChange={(e) => setAddress(e.target.value)}/>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default User;
