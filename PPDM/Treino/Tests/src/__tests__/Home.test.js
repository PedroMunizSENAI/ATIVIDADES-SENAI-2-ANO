import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import Home from "../pages/Home";

import { removeItem } from "../components/AsyncStorage";

const mockNavigate = jest.fn();
const mockPush = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
    push: mockPush,
  }),
}));

jest.mock("../components/AsyncStorage.js", () => ({
  removeItem: jest.fn(),
}));

describe("Testando a Página Home", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockPush.mockClear();
    removeItem.mockClear();
  });

  it("Renderiza o título corretamente!", () => {
    const { getByText } = render(<Home />);
    expect(getByText("BEM-VINDO")).toBeTruthy();
  });

  it("Navega para Login ao clicar no botão", () => {
    const { getByText } = render(<Home />);
    const btn = getByText("Login");

    fireEvent.press(btn);

    expect(mockNavigate).toHaveBeenCalledWith("Login");
  });
});
