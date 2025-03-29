import { Header111 } from "@/components/relume/header111"
import Layout405 from "@/components/relume/layout405"
import { Layout458 } from "@/components/relume/layout458"
import React from "react"
import NavLanding from "@/components/nav-landing"
import Layout482 from "@/components/relume/layout.482"
import Footer from "@/components/relume/footer3"
import CursorFollower from "@/components/Cursor"

export default function Home() {
  return (
    <>
      <CursorFollower />
      <main className="h-min-screen bg-slate-950 scroll-smooth font-[Amulya-Variable]">
        <NavLanding />
        <Header111 />
        <Layout405 />
        <Layout458 />
        <Layout482 />
      </main>
      <Footer />
    </>
  )
}