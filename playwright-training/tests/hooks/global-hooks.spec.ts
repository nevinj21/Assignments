import { test, expect } from '@playwright/test';

test.describe(' ', async () => {

    test('Group 1 test 1', async ({ page }) => {
        console.log("Group 1 Test 1")

    });
    test('Group 1 test 2', async ({ page }) => {
        
        console.log("Group 1 Test 2")

    });
    test('Group 1 test 3', async ({ page }) => {
        console.log("Group 1 Test 3")

    });
});
test.describe('Group 2 Tests', async () => {
    test('Group 2 test 1', async ({ page }) => {
        console.log("Group 2 Test 1")

    });
    test('Group 2 test 2', async ({ page }) => {
        console.log("Group 2 Test 2")

    });
    test('Group 2 test 3', async ({ page }) => {
        console.log("Group 2 Test 3")

    });
});
test.beforeAll(async() => {
    console.log("*************Before all test case***************")
})
test.afterAll(async()=> {
    console.log("*************After all test cases***************")
})
test.beforeEach(async()=>{
    console.log("-------------Before Each Test case--------------")
})
test.afterEach(async() => {
    console.log("-------------after each test case---------------")
})
