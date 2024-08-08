import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../pages/index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const projects = [
  {
    id: 1,
    name: "Project 1",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-02",
  },
  {
    id: 2,
    name: "Project 2",
    createdAt: "2023-02-01",
    updatedAt: "2023-02-02",
  },
];

describe("Home", () => {
  it("renders a list of projects", () => {
    render(<Home projects={projects} />);

    expect(screen.getByText("Projects")).toBeInTheDocument();

    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });
  });
});
