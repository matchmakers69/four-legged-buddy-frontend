/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "src/theme/theme";
import Button from "..";

const children = <div /> || "";

describe("<Button />", () => {
  it("sholud create a snapshot", () => {
    expect(
      renderer
        .create(
          <StyledThemeProvider theme={theme}>
            <Button variant="filled" onClick={() => undefined} type="button">
              {children}
            </Button>
          </StyledThemeProvider>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("should render Button component", () => {
    const { getByTestId } = render(
      <StyledThemeProvider theme={theme}>
        <Button variant="filled" onClick={() => undefined} type="button">
          {children}
        </Button>
      </StyledThemeProvider>
    );
    const buttonComponent = getByTestId("button");
    expect(buttonComponent).toBeInTheDocument();
  });
});
