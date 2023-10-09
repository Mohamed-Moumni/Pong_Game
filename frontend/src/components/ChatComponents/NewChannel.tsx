import {
  Icon,
  Stack,
  Box,
  FormControl,
  Input,
  Button,
  Text,
  HStack,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Checkbox,
} from "@chakra-ui/react";
import { FaUserGroup } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { LockIcon, ViewOffIcon, SmallCloseIcon } from "@chakra-ui/icons";
import CostumCheckBox from "./CostumCheckBox";
import { useEffect } from "react";
import { z } from "zod";
import InputWrapper from "../Wrappers/InputWrapper";
import useChannelManager from "@/hooks/useChannelManager";
import { ModalWrapperContext } from "@/context/Contexts";
import { useContext } from "react";

interface NewChannelProps {}



const NewChannel: React.FC<NewChannelProps> = ({}) => {
  const [isProtected, setIsProtected] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelPassword, setChannelPassword] = useState("");
  const channelNameSchema = z.string().min(3).max(20).refine((val) => val !== "");
  const passwordSchema = z.string().min(7).max(20).refine((val) => val !== "");
  const channelManager = useChannelManager();
  const {onClose} = useContext (ModalWrapperContext)
  const [submitted, setSubmitted] = useState(false);


  const createChannel = (channelName:string, channelType:string, channelPassword?:string) => {
    if (channelPassword)
      channelManager.createChannel(channelName, channelType, channelPassword)
    else
      channelManager.createChannel(channelName, channelType)
    onClose!()
  }
  return (
    <Stack spacing={6} justify={"center"} alignItems={"center"}>
      <Box
        position="relative"
        bg="#1D222C"
        borderRadius={"full"}
        p={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{ bg: "#181D25" }}
      >
        <Icon as={FaUserGroup} w={16} h="auto" color={"#5B6171"} />
        <Icon
          as={SmallCloseIcon}
          position="absolute"
          bottom="12px"
          right="12px"
          fontStyle="bold"
          fontWeight="black"
          fontSize="6px"
          boxSize="20px"
          borderRadius="full"
          bg="#DC585B"
          color="#252932"
          _active={{ transform: "scale(1.1)" }}
          _hover={{ opacity: 0.8 }}
        />
      </Box>
      <FormControl
        w="100%"
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems="center"
      >
        <Stack w="100%" spacing={6} justify={"center"} alignItems="center">
          <InputWrapper
            scheme={channelNameSchema}
            state={channelName}
            setState={setChannelName}
            placeholder="channel's name"
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
          <HStack w="85%" justifyContent="center" spacing={8} alignItems="center">
            <HStack spacing={3}>
              <Text color="#5B6171" fontSize="sm" fontWeight="bold">
                Private
              </Text>
              <CostumCheckBox
                isChecked={isPrivate}
                action={() => {
                  setIsPrivate(!isPrivate);
                  setIsProtected(false);
                }}
                icon={ViewOffIcon}
              />
            </HStack>
            <HStack spacing={3}>
              <Text color="#5B6171" fontSize="sm" fontWeight="bold">
                Protected
              </Text>
              <CostumCheckBox
                isChecked={isProtected}
                action={() => {
                  setIsProtected(!isProtected);
                  setIsPrivate(false);
                }}
                icon={LockIcon}
              />
            </HStack>
          </HStack>
          {isProtected && (
            <InputWrapper
            state={channelPassword}
            setState={setChannelPassword}
            scheme={passwordSchema}
            submitted={submitted}
            setSubmitted={setSubmitted}
            placeholder="channel's password"
            />
          )}
        </Stack>
      </FormControl>

      <Button variant="secondary" px={6} borderRadius={"xl"} fontSize="sm" onClick={()=>{
        setSubmitted(true)
        if (channelNameSchema.safeParse(channelName).success)
        {
          if (isPrivate) {
            createChannel (channelName, "PRIVATE")
          }
          else if (isProtected) {
            if (passwordSchema.safeParse(channelPassword).success)
              createChannel (channelName, "PROTECTED", channelPassword)
          }
          else {
            createChannel (channelName, "PUBLIC")
          }
        }
      }}>
        done
      </Button>
    </Stack>
  );
};

export default NewChannel;
