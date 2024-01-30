'use client';
import ProductPage from "@/pages/ProductPage";
import {Header} from "@/components/Header";
import React from "react";

const ProductPageWrapper = ({ params }: {params: { id: string | undefined }}) => {
    return (
        <ProductPage id={params.id}/>
    )
}

export default ProductPageWrapper;