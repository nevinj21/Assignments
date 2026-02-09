import { test, expect } from '@playwright/test';

test.describe(' ', async () => {
    test('Group 1 test 1', {tag:'@smoke'}, async ({ page }) => {
        console.log("Group 1 Test 1")
        

    });
    test('Group 1 test 2', {tag:'@smoke'},async ({ page }) => {
        test.skip();
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
    test('Group 2 test 2',{tag:'@sanity'}, async ({ page }) => {
        console.log("Group 2 Test 2")

    });
    test('Group 2 test 3',{tag:['@smoke','@sanity']}, async ({ page }) => {
        console.log("Group 2 Test 3 ")

    });
});


