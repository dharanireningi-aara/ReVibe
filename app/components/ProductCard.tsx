"use client";

import { Heart, Share2, ShoppingCart } from "lucide-react";
import type { Product } from "../lib/types";

type Props = {
  product: Product;
  number: number;
  favourite: boolean;
  inCart: boolean;
  labels: { addFavourite: string; removeFavourite: string; addCart: string; inCart: string; share: string; sample: string };
  imageSource: (image: string) => string;
  onOpen: (product: Product) => void;
  onToggleFavourite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onShare: (product: Product) => void;
};

export function ProductCard({ product, number, favourite, inCart, labels, imageSource, onOpen, onToggleFavourite, onAddToCart, onShare }: Props) {
  return <article className="product-card">
    <button className="product-image-button" onClick={() => onOpen(product)} aria-label={`View ${product.title}`}><div className="product-image" style={{ backgroundColor: product.color }}><img src={imageSource(product.image)} alt={product.title} loading="lazy"/><span className="product-number">{String(number).padStart(2,"0")}</span>{product.badge&&<span className="product-badge">✳ {product.badge}</span>}{product.id<=8&&<span className="product-sample">{labels.sample}</span>}</div></button>
    <button className={favourite?"save-button saved":"save-button"} onClick={() => onToggleFavourite(product)} aria-label={favourite?labels.removeFavourite:labels.addFavourite} aria-pressed={favourite}><Heart size={16} fill={favourite?"currentColor":"none"}/></button>
    <div className="product-info"><div className="product-topline"><span>{product.category.toUpperCase()}</span><span className="condition"><i/> {product.condition}</span></div><button className="product-title" onClick={() => onOpen(product)}>{product.title}</button><div className="product-bottom"><b>₹{product.price.toLocaleString("en-IN")}</b><span>{product.location.split(",")[0]}</span></div>
      <div className="product-actions"><button type="button" onClick={() => onAddToCart(product)} aria-label={`${labels.addCart}: ${product.title}`}><ShoppingCart size={14}/>{inCart?labels.inCart:labels.addCart}</button><button type="button" onClick={() => onShare(product)} aria-label={`${labels.share}: ${product.title}`}><Share2 size={14}/></button></div>
    </div>
  </article>;
}
