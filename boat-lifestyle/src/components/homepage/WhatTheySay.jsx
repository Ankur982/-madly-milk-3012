import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";


const AboutUs={
    fontSize: "30px",
    fontweight: "700",
    paddingTop: "40px",
    
}


export const WhatTheySay = () => {
  return (
    <Box bg='#dcdcdc' w='100%' height="650px"
    p={4} color='white'>
      <div >
        <p style={AboutUs}>What They Say About Us:</p>
      </div>
      <div>
        <SimpleGrid columns={[1, null, 4]} spacing="50px">
          <Box bg="#ed1d24" borderBottomRadius="40px" height="200px"></Box>
          <Box borderBottomRadius="40px"  bg="#ed1d24" height="200px"></Box>
          <Box borderBottomRadius="40px"  bg="#ed1d24" height="200px"></Box>
        </SimpleGrid>
      </div>
    </Box>
  );
};
