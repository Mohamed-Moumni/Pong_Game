import React, { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import apiClient from '../services/requestProcessor';
import { GlobalContext , MembersContext, ChannelsContext, UsersContext} from '@/context/Contexts';
import { getUserRole } from '../../utils/helpers';

interface MembersProviderProps {
    children: React.ReactNode
}

const MembersProvider:React.FC<MembersProviderProps> = ({ children }) => {

    const { activeChannel, Channels } = useContext(ChannelsContext);
    const channelMembersClient = (channelId: string) => new apiClient(`/chat/channels/${channelId}/members`);
    const [channelMembers, setChannelMembers] = useState<Member[]>([]);
    const [loggedInUserRole, setLoggedInUserRole] = useState<string>("");
    const { loggedInUser } = useContext(UsersContext);

  useQuery({
    queryKey: ["channelMembers", activeChannel?.id],
    queryFn: async () =>
      channelMembersClient(activeChannel!.id!)
        .getData()
        .then((res) => res.data),
    onSuccess: (data: any) => {
      setChannelMembers(data);
      setLoggedInUserRole(getUserRole (loggedInUser!, data))
    },
    onError: (err) => {
      console.log(err);
    },
  });
    return (
        <MembersContext.Provider value={{members:channelMembers, loggedInUserRole}}>
            {children}
        </MembersContext.Provider>
    )
}

export default MembersProvider