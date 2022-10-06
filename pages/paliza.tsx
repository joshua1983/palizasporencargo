import React from "react";
import { DarkLayout } from "../components/layout/DarkLayout";
import MainLayout from "../components/layout/MainLayout";

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
