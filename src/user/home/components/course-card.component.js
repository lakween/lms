import {Badge, Box, Image} from "@chakra-ui/react";
import {BsStarFill} from "react-icons/bs";

const CourseCardComponent = ({id,title,description,img,onClick}) => {

    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Ange/cccccles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box cursor={'pointer'} onClick={()=>onClick(id)} margin={5} maxW='15vw' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image sizes={'sm'} src={property.imageUrl} alt={property.imageAlt}/>
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    noOfLines={1}
                >
                    {title}
                </Box>
                <Box
                    mt='3'
                    as='p'
                    noOfLines={2}
                >
                    {description}
                </Box>
            </Box>
        </Box>

    )
}
export default CourseCardComponent