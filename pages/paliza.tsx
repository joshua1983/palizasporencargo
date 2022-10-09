import React from "react";
import { DarkLayout } from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function PalizaPage() {
  return (
    <>
      <h1 className={"title"}>Enviar nueva paliza</h1>

      <p className={"description"}>
        Comming soon...
      </p>
    </>
  );
}

PalizaPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
