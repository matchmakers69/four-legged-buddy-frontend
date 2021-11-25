import { FC } from "react";
import { GetServerSideProps } from "next";
import HomeIntro from "src/components/HomeIntro";
import Layout from "src/components/Layout";
import Quiz from "src/components/Quiz";
import { H1, Paragraph } from "src/styles/typography";

const Home: FC = function () {
  return (
    <Layout pageTitle="Home page">
      <HomeIntro>
        <div data-testid="page-wrapper">
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">Welcome to</span> <span className="title-paragraph">4leggedbuddy</span>
          </H1>
          <Paragraph className="p m-15-top bold">
            We try to connect dog owners with trusted local people who would love to look after their dog. We make it
            easy to arrange walks, playtime, overnight stays or holidays. Our aim is to help dog owners when they need
            it, give dogs more exercise and playtime and to allow people without a dog to spend quality time with one.
            We call it a win-win (or a woof-­woof) situation for everyone involved.
          </Paragraph>
        </div>
      </HomeIntro>
      <Quiz />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Home;
