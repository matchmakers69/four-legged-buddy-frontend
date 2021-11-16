/* eslint-disable global-require */
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "src/theme/theme";
import Home from "..";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/components/Layout/Header", () => {
  return function () {
    return <header data-testid="header" />;
  };
});

describe("<Home />", () => {
  it("sholud create a snapshot", () => {
    expect(
      renderer
        .create(
          <StyledThemeProvider theme={theme}>
            <Home />
          </StyledThemeProvider>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <StyledThemeProvider theme={theme}>
        <Home />
      </StyledThemeProvider>
    );

    const pageWrapper = getByTestId("page-wrapper");
    expect(pageWrapper).toBeInTheDocument();
  });
});
