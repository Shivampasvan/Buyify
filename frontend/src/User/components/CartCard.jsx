import { Box, Divider, Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Cart/cart.actions";

const CartCard = ({ title, price, image, rating, description }) => {
  

  const handledelete = (el) => {
    // const filterdata = data.filter((t) => t.id != el.id);

    // dispatch(addToCart(data.id, filterdata));
    console.log("data deleted !!");
  };

  return (
    <Flex
      borderTop={"1px solid gray"}
      mb={"15px"}
      pt={"15px"}
      wrap="wrap"
      direction={{ base: "column", md: "row" }}
      gap={"8px"}
      justifyContent={"space-around"}
    >
      <Box width={{ base: "100%", md: "18%" }}>
        {/* Product Image */}
        <Image width={"100%"} src={image} />
      </Box>
      <Box width={{ base: "100%", md: "70%" }}>
        {/* Product Name or title or description */}
        <Text fontSize="xl" fontWeight={"medium"} mb={"8px"}>
          {description}
        </Text>

        <Text fontSize="xs" color={"green"} mb={"5px"}>
          In Stock
        </Text>
        <Text fontSize={{ base: "sm", md: "xs" }} mb={"2px"}>
          Eligible for FREE Shipping
        </Text>
        <Image
          mb={"15px"}
          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
        />

        <Flex
          h={"25px"}
          w={"100%"}
          justify={{ base: "space-between", md: "flex-start" }}
          gap={{ base: "8px", md: "15px" }}
          mb={{ base: "8px", md: "0" }}
        >
          {/* Product Quantity */}
          <Box width={{ base: "100%", md: "auto" }}>
            <Select placeholder="Qty: 1" boxShadow="xl" h={"100%"}>
              <option value="1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </Select>
          </Box>
          <Divider orientation="vertical" colorScheme={"black"} />
          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "red",
              }}
              onClick={handledelete}
            >
              Delete
            </Text>
          </Box>
          <Divider orientation="vertical" />

          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Save for later
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              See more like this
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "red",
              }}
            >
              Share
            </Text>
          </Box>
          <Divider orientation="vertical" colorScheme="grey" />
        </Flex>
      </Box>
      <Box>
        {/* Product Price */}
        <Text textAlign={"end"} fontSize="19.5px" fontWeight={"extrabold"}>
          ₹ {price}
        </Text>
      </Box>
    </Flex>
  );
};

export default CartCard;
