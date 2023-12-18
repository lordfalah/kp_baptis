import Hero from "./Hero";
import { Fragment } from "react";
import StepByStep from "./Step";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <StepByStep />
    </Fragment>
  );
}
