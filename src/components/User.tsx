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
  const {userName, fullName, age, fetchUser, setAddress} = useStore(
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
  }, [fetchUser]);

  /*  useEffect(() => {
      console.log(address)
    }, [address]);*/

  return (
    <div className={""}>
      <Popover>
        <PopoverTrigger asChild className={"mb-3"}>
          <div className={"bg-accent p-1.5 rounded-md"}>
            <UserIcon size={25} strokeWidth={2.5}/>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-80 flex flex-col gap-4">
          <div className={"w-full justify-between flex gap-8"}>
            <p>{userName}</p>
            <p>{fullName}</p>
            <p>{age}</p>
          </div>

          <p>Set your address</p>
          <Input onChange={(e) => setAddress(e.target.value)}/>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default User;
