import { faker } from "@faker-js/faker";

export const createUser = () => {
  return {
    id: faker.datatype.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
  };
};

export const createFakeApi = () => {
  try {
    const users = {
      page: 1,
      per_page: 6,
      total: 12,
      total_pages: 2,
      data: [],
    };

    for (let i = 1; i <= users.total; i++) {
      users.data.push(createUser());
    }

    return JSON.stringify(users);
  } catch (error) {
    console.log("error", error);
  }
};

export const usersFakeAPI = createFakeApi();
