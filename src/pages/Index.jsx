import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" bg="white" color="gray.800">
        {/* Navigation Bar */}
        <Box as="nav" w="full" py={4} px={8} boxShadow="sm" bg="white">
          <Flex justify="space-between" align="center">
            <Heading size="lg" color="blue.600">
              PlumbPerfect
            </Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#services" fontWeight="bold">
                Services
              </Link>
              <Link href="#about" fontWeight="bold">
                About
              </Link>
              <Link href="#contact" fontWeight="bold">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" py={20} bg="gray.50">
          <VStack spacing={5}>
            <Heading size="2xl" textAlign="center">
              Professional Plumbing Services
            </Heading>
            <Text fontSize="xl" maxW="lg" textAlign="center">
              Reliable and affordable solutions for all your plumbing needs.
            </Text>
            <Button colorScheme="blue" size="lg">
              Get a Free Quote
            </Button>
          </VStack>
        </Flex>

        {/* Services Section */}
        <Box id="services" py={10}>
          <VStack spacing={8}>
            <Heading size="xl" color="blue.600">
              Our Services
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading size="md">Leak Detection</Heading>
                <Text mt={4}>Detect and repair leaks with precision and speed.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading size="md">Pipe Installation</Heading>
                <Text mt={4}>High-quality pipe installation services for new homes and renovations.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading size="md">Drain Cleaning</Heading>
                <Text mt={4}>Effective solutions for clogged drains and maintenance.</Text>
              </Box>
            </Stack>
          </VStack>
        </Box>

        {/* About Section */}
        <Box id="about" py={10} bg="gray.50">
          <VStack spacing={8}>
            <Heading size="xl" color="blue.600">
              About Us
            </Heading>
            <Text fontSize="lg" maxW="lg" textAlign="center">
              With over 20 years of experience, we provide top-notch plumbing services to our community.
            </Text>
            <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyfGVufDB8fHx8MTcxNTQ0MjEzM3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="full" />
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box id="contact" py={10}>
          <VStack spacing={8}>
            <Heading size="xl" color="blue.600">
              Contact Us
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
              <Button leftIcon={<FaPhone />} colorScheme="blue" variant="solid">
                Call Us
              </Button>
              <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="solid">
                Email Us
              </Button>
              <Button leftIcon={<FaMapMarkerAlt />} colorScheme="blue" variant="solid">
                Locate Us
              </Button>
            </Stack>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" py={5} bg="gray.200" w="full">
          <Flex justify="center" align="center">
            <Text fontSize="sm">© 2023 PlumbPerfect. All rights reserved.</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
