import React from 'react';
import { MainLayout } from "@layouts/MainLayout";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";


export const getStaticProps: GetStaticProps = async (context) => {
}

export const getStaticPaths: GetStaticPaths = async () => {
}

export const getServerSideProps: GetServerSideProps = async (context) => {
}

const {{pascalCase}}Page:NextPage = () => {
  return (
    <MainLayout.Content>

    </MainLayout.Content>
  )
}



export default {{pascalCase}}Page