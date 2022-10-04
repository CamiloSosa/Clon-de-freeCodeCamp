import React from 'react';
import {Box, Image, Text} from '@chakra-ui/react';
import '../stylesheets/Testimony.css';
import {TestimonyType} from "../types/testimony.type";

function testimony (props: TestimonyType)  {
  return (
    <Box
      className={'testimony-container'}
    >
      <Image
        className={'testimony-image'}
        src={require(`../images/testimony-${props.image}.png`)}
        alt={`${props.name} testimony`}
      />
      <Box
        className={'text-testimony-container'}
      >
        <Text
          className={'testimony-name'}
          fontSize='3xl'
        >
          <strong>{props.name}</strong> in {props.country}
        </Text>

        <Text
          className={'testimony-job-title'}
          fontSize='3xl'
        >
          {props.job} in <strong>{props.company}</strong>
        </Text>

        <Text
          className={'testimony-text'}
          fontSize='3xl'
          dangerouslySetInnerHTML={{__html: props.testimony}}
        >
        </Text>
      </Box>
    </Box>
  );
}

export default testimony;