import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import Details from "./Details";

const getLocalItem = () =>{
  return JSON.parse(localStorage.getItem("mensData")) || [];

}
export function ModalComponent({ isOpen, setIsOpen, data }) {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState({});
  const [spraid, setSpraid] = useState(getLocalItem());

  const addtoCart = (item) => {
    setSpraid([...spraid, item]);
    alert("Item Added.!");

    // console.log("item: ", item);
  };
  useEffect(()=>{

    localStorage.setItem("mensData", JSON.stringify(spraid));
  },[spraid])
  // const Deatils = () => {
  //   navigate("/details");
  // };

  const onClose = () => {
    setIsOpen(false);
  };

  //console.log(data);
  return (
    <>
      <Modal
        size={["xs", "xl", "2x1", "6xl"]}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"black"}>
          <ModalHeader margin={"auto"}>
            <Breadcrumb>
              <BreadcrumbItem fontSize={"30px"}>
                <BreadcrumbLink href="/">
                  <Button bg={"red"} size={"lg"} color={"white"}>
                    Home
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <b style={{ fontSize: "25px", color: "white" }}> {data.title} </b>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} gap="20" color={"white"}>
            <Image
              border={"1px solid"}
              borderRadius={10}
              ml={10}
              h={400}
              w={"40%"}
              src={data.image}
              alt="image"
              box-shadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
            />
            <Box>
              <Text mt={10} fontWeight={500} fontSize={30} color={"white"}>
                <b>Product All Details</b>
              </Text>
              <Text fontSize={30} fontWeight={600} color={"white"}>
                {data.title}
              </Text>
              <Text fontWeight={600} mt={3} fontSize={30} color={"white"}>
                MRP: ???<del>{data.price}</del>
              </Text>
              <Text fontWeight={600} mt={3} fontSize={30} color={"red"}>
                Price: ???{data.dic_price}
              </Text>
              <Text fontWeight={600} mt={3} fontSize={20} color={"white"}>
                ???{data.rating} | {data.reviews} reviews
              </Text>
              <Text fontWeight={600} mt={3} fontSize={20} color={"red"}>
                You Save: ??? {data.saving} ({data.discount})
              </Text>
              <Button
                mt={3}
                colorScheme={"blue"}
                w={[100, 150, 300]}
                bg="red"
                fontSize={20}
                color="white"
                size="md"
                onClick={() => addtoCart(data)}
              >
                ADD TO CART
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
