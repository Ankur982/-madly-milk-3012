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
  import { useState } from "react";

  import { useNavigate } from "react-router-dom";

  
  export function ModalComponent({ isOpen, setIsOpen, data }) {
 
  
  
    const onClose = () => {
      setIsOpen(false);
    };
  
    console.log(data);
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
                <BreadcrumbItem fontSize={"30px"} >
                  <BreadcrumbLink href="/"><Button  bg={"red"} size={"lg"} color={"white"}>Home</Button></BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb >
             <b style={{fontSize:"25px", color:"white"}}> {data.title} </b> 
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
                box-shadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
              />
              <Box>
              <Text mt={10} fontWeight={500} fontSize={30} color={"white"}>
                  <b>Product All Details</b>
                </Text>
                <Text fontSize={30} fontWeight={600} color={"white"}>
                  {data.title}
                </Text>
                <Text fontWeight={600} mt={3} fontSize={30} color={"white"}>
                MRP: ₹<del>{data.price}</del>
                </Text>
                <Text fontWeight={600} mt={3} fontSize={30} color={"red"}>
                Price: ₹{data.dic_price}
                </Text>
                <Text fontWeight={600} mt={3} fontSize={20} color={"white"}>
                ⭐{data.rating} | {data.reviews} reviews
                </Text>
                <Text fontWeight={600} mt={3} fontSize={20} color={"red"}>
                You Save: ₹ {data.saving} ({data.discount})
                </Text>
                <BreadcrumbLink href="/cart">
                <Button bg={"red"} color={"white"}>ADD TO CART</Button>
                </BreadcrumbLink>
              </Box>
            </ModalBody>
  
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }