/*
 *
 * SmartNext
 * A web template project for Next.js
 * Copyright (c) 2020-22 Alessio Saltarin
 * MIT License
 *
 */

import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import styles from '../styles/Index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SmartNext</title>
        <meta name="description" content="Web template for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Center h='400px'>
              <VStack spacing='50px'>
                  <Heading as='h2' size='2xl'>I am <span className={styles.smartnext}>SmartNext</span></Heading>
                  <HStack spacing='24px'>
                      <Button width='150px' colorScheme='blue'>Ok</Button>
                      <Button width='150px' colorScheme='gray'>Tell me more...</Button>
                  </HStack>
              </VStack>
          </Center>
      </main>

    </div>
  )
}

export default Home
