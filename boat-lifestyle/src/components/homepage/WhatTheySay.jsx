import { Box, Button, color, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const AboutUs = {
  fontSize: "30px",
  fontWeight: "700",
  paddingTop: "40px",
  textAlign: "center",
  color:"black",
};

const AboutUsBox = {
  width: "80%",
  marginTop: "250px",
  marginLeft: "150px",
  position:"absolute"

};

const AboutUsItem = {
  margin:"auto",
  textAlign:"center",
  position:"relative",
  top:"-150px",
  // left:"25px"
  borderLeft:   "1px solid red",
  borderRight: " 1px solid red",
  borderBottom:" 1px solid red",
  borderTop:" 1px solid #dcdcdc",
  borderRadius:"50%"


};



export const WhatTheySay = () => {
  return (
    <Box bg="#dcdcdc" w="100%" height="623px" p={4} color="white">
      <div>
        <p style={AboutUs}>What They Say About Us:</p>
      </div>
      <div  style={AboutUsBox}>
        <SimpleGrid columns={[1, null, 3]} spacing="20px">
          <Box
            bg="#ed1d24"
            borderBottomRadius="40px"
            height="200px"
            width="340px"
          >
            <div style={AboutUsItem}>
              <img style={{margin:"auto"}}
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testi-1200_284x.png?v=1649980899"
                alt="logo"
              />
              <p>"It is value for money, best sound especially bass"</p>
              <Button bg="white" color="#ed1d24" size="md" >
                SHOP NOW
              </Button>
            </div>
          </Box>
          <Box
            borderBottomRadius="40px"
            bg="#ed1d24"
            height="200px"
            width="340px"
          >
            <div style={AboutUsItem}>
              <img style={{margin:"auto"}}
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-2_284x.png?v=1649668053"
                alt="logo"
              />
              <p>""The battery backup is something unbelievable""</p>
              <Button bg="white" color="#ed1d24" size="md" >
                SHOP NOW
              </Button>
            </div>
          </Box>
          <Box
            borderBottomRadius="40px"
            bg="#ed1d24"
            height="200px"
            width="340px"
          >
            <div style={AboutUsItem}>
              <img style={{margin:"auto"}}
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-3_284x.png?v=1649668053"
                alt="logo"
              />
              <p>
                ""Amazing product great sound quality and the mic performance is
                also awesome""
              </p>
              <Button bg="white" color="#ed1d24" size="md" >
                SHOP NOW
              </Button>
            </div>
          </Box>Box
        </SimpleGrid>
      </div>
    </Box>
  );
};
