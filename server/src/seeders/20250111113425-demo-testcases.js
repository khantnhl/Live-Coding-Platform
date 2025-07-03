'use strict';

const { v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('testcases', [
      // {
      //   test_id: uuidv4(),
      //   problem_id: "6257d43d-ef6d-4247-b57d-95a1c792a0e6",
      //   input_data: "[[2, 7, 11, 15], 9]",
      //   expected_output: "[ 0, 1 ]\n",
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "6257d43d-ef6d-4247-b57d-95a1c792a0e6",
      //   input_data: "[[3, 2, 4], 6]",
      //   expected_output: "[ 1, 2 ]\n",
      //   is_hidden: true,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "e69d849f-8173-44ab-9d03-4f8b05ef6276",
      //   input_data: "[[3,2,2,3], 3]",
      //   expected_output: "2\n",
      //   is_hidden: true,
      //   created_at: new Date(),
      // }, 
      // {
      //   test_id: uuidv4(),
      //   problem_id: "e69d849f-8173-44ab-9d03-4f8b05ef6276",
      //   input_data: "[[0, 1, 2, 2, 3, 0, 4, 2], 2]",
      //   expected_output: "5\n",
      //   is_hidden: true,
      //   created_at: new Date(),
      // }, 
      // {
      //   test_id: uuidv4(),
      //   problem_id: "ecb77c02-49f0-4a18-85e8-21dcf5dc3293",
      //   input_data: "[[1, 2, 3, 3]]",
      //   expected_output: "true\n",
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "ecb77c02-49f0-4a18-85e8-21dcf5dc3293",
      //   input_data: "[[1, 2, 3, 4]]",
      //   expected_output: "false\n",
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "086156c1-bb02-49c3-8098-f79e1f2be182",
      //   input_data: "[anagram, nagaram]",
      //   expected_output: "true\n",
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "086156c1-bb02-49c3-8098-f79e1f2be182",
      //   input_data: "[rat, car]",
      //   expected_output: "false\n",
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "12732950-7dea-483d-af29-7ff4774a75af",
      //   input_data: `[["eat","tea","tan","ate","nat","bat"]]`,
      //   expected_output: `[["bat"],["nat","tan"],["ate","eat","tea"]]\n`,
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "12732950-7dea-483d-af29-7ff4774a75af",
      //   input_data: `[[""]]`,
      //   expected_output: `[[""]]\n`,
      //   is_hidden: false,
      //   created_at: new Date(),
      // },
      // {
      //   test_id: uuidv4(),
      //   problem_id: "12732950-7dea-483d-af29-7ff4774a75af",
      //   input_data: `[["a"]]`,
      //   expected_output: `[["a"]]\n`,
      //   is_hidden: false,
      //   created_at: new Date(),
      // }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('testcases', null, {});
  }
};
