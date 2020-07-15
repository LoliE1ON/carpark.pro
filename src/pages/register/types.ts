export type RegisterFields = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type ErrorFields = Partial<RegisterFields>;
