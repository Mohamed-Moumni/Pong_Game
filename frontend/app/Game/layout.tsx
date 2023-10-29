'use client'
import Game from "@/components/GameComponents/Game"
import MainLayout from "@/components/Layouts/MainLayout"
import GlobalProvider from "@/providers/GlobalProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthUserProvider from "@/providers/AuthUserProvider";
import UsersProvider from "@/providers/UsersProvider";
import ChatProvider from "@/providers/ChatProvider";
import ChannelsProvider from "@/providers/ChannelsProvider";
import AppNavigationProvider from "@/providers/AppNavigationProvider";
import GameProvider from "@/providers/GameProvider";
import InvitesProvider from "@/providers/InvitesProvider";

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  return<GlobalProvider>
          <InvitesProvider>
            <UsersProvider>
              <AppNavigationProvider>
                <ChatProvider>
                  <ChannelsProvider>
                    {children}
                </ChannelsProvider>
              </ChatProvider>
            </AppNavigationProvider>
          </UsersProvider>
        </InvitesProvider>
    </GlobalProvider>
};

export default Layout;