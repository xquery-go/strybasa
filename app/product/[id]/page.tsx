'use client';
import ProductPage from "@/pages/ProductPage";
import {Header} from "@/components/Header";
import React from "react";

const ProductPageWrapper = ({ params }: {params: { id: string }}) => {
    return (
        <ProductPage params={params}/>
    )
}

export default ProductPageWrapper;