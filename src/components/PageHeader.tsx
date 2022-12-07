import React from "react";

export default function PageHeader(props: { title: string }) {
  return (
    <header>
      <h1 className="font-bold leading-tight text-gray-900 text-3xl tracking-tight">
        {props.title}
      </h1>
    </header>
  );
}
