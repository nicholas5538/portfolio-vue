import type { gitUserSchema } from "~/constants/typeInference";
import { vi } from "vitest";

const mockUserResponse: Readonly<Partial<gitUserSchema>> = {
  // eslint-disable-next-line camelcase
  avatar_url: "",
  bio: "just a random bio",
  email: "123@gmail.com",
  following: 0,
  followers: 0,
  location: "Singapore",
  login: "Nick",
  name: "Nick Young",
};

export const mockReturnValues = {
  data: mockUserResponse,
  pending: false,
  error: null,
  execute: vi.fn(),
  clear: vi.fn(),
  refresh: vi.fn(),
  status: "success",
};
