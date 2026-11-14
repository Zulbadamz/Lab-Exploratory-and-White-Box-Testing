# Exploratory and White Box Testing Lab

## Step 1: Exploratory Testing

### Testing Charter

Investigate whether the counter application correctly increases, decreases, and resets the displayed count when users perform individual actions and combinations of actions.

### Exploratory Testing Results

| Action | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|
| Increment once from 0 | Count: 1 | Count: 1 | Passed |
| Decrement once from 0 | Count: -1 | Count: -1 | Passed |
| Increment three times from 0 | Count: 3 | Count: 3 | Passed |
| Increment twice, then Decrement once | Count: 1 | Count: 1 | Passed |
| Increment twice, then Reset | Count: 0 | Count: 0 | Passed |

### Summary

All five exploratory tests passed. The Increment, Decrement, and Reset buttons worked as expected. No defects were observed during these tests.


## Step 2: Examine the Source Code

### Starting Value

The initial value of count is 0, as defined by:

`const [count, setCount] = useState(0);`

### Statements That Change Count

1. Increment: `setCount(count + 1)` increases the count by one when the Increment button is clicked.

2. Decrement: `setCount(count - 1)` decreases the count by one when the Decrement button is clicked.

3. Reset: `setCount(0)` changes the count back to zero when the Reset button is clicked.

### Branches and Loops

The component does not contain any explicit branches or loops.

Branch coverage is not directly applicable to the component's own logic because there are no conditional branches.

Loop coverage is not applicable because the component does not contain any loops.

## Step 3: Automated Test Setup

I created a test file named `src/App.test.tsx` to test the counter application using Jest and React Testing Library.

The tests use `render` to display the component, `screen` to find elements, `fireEvent` to simulate button clicks, and Jest assertions to verify the results.

I also configured Jest using `jest.config.cjs` and `jest.setup.cjs`.

The automated tests check the initial counter value, the Increment button, the Decrement button, the Reset button, and multiple button actions in sequence.

## Step 4: Testing the Initial State and Buttons

I created automated tests using Jest and React Testing Library to verify the initial state of the counter application.

The tests check that:

1. The counter initially displays `Count: 0`.
2. The Increment button is displayed.
3. The Decrement button is displayed.
4. The Reset button is displayed.

I used `render()` to render the App component, `screen` to find elements, and Jest assertions to verify that the expected elements were present.

**Result:** All tests passed successfully.

## Step 5: Testing Counter Operations

I created automated tests to verify that the counter updates correctly when users click the buttons.

The tests verify the following operations:

1. **Increment:** Starting from `Count: 0`, clicking Increment changes the counter to `Count: 1`.
2. **Decrement:** Starting from `Count: 0`, clicking Decrement changes the counter to `Count: -1`.
3. **Reset:** After increasing the counter, clicking Reset changes the counter back to `Count: 0`.

I used React Testing Library's `fireEvent.click()` to simulate button clicks and Jest assertions to check the displayed count.

**Result:** All three counter operations passed their automated tests. 

## Step 6: Testing Multiple Actions in Sequence

I created an automated test to verify that the counter works correctly when multiple buttons are clicked in sequence.

The test performs the following actions:

1. Start with `Count: 0`.
2. Click Increment and verify that the count becomes `1`.
3. Click Increment again and verify that the count becomes `2`.
4. Click Decrement and verify that the count becomes `1`.
5. Click Reset and verify that the count returns to `0`.

I used `fireEvent.click()` to simulate each button click and Jest assertions to check the counter value after each action.

**Result:** The sequential-actions test passed successfully.

This test demonstrates that the counter maintains and updates its state correctly across multiple user interactions. 

## Step 7: Running the Automated Tests

I ran the automated tests using the following command:

`npm test`

Jest executed the tests in `src/App.test.tsx`.

**Test Results:**

| Test Case | Result |
|---|---|
| Displays the initial count and buttons | PASS |
| Increments count from 0 to 1 | PASS |
| Decrements count from 0 to -1 | PASS |
| Resets count to 0 | PASS |
| Handles multiple actions in sequence | PASS |

**Summary:**
- Test Suites: 1 passed, 1 total
- Tests: 5 passed, 5 total
- Failed Tests: 0

All five automated tests passed successfully.

### Step 7 Screenshot

![Jest automated test results](screenshots/Step%207.png) 

## Step 8: Code Coverage Results

I ran the following command in the VS Code terminal:

`npm test -- --coverage`

Jest generated a code coverage report for `App.tsx`.

**Coverage Results:**

| Coverage Type | Percentage |
|---|---|
| Statement Coverage | 100% |
| Branch Coverage | 100% |
| Function Coverage | 100% |
| Line Coverage | 100% |

**Explanation:**

- **Statement Coverage:** 100% of executable statements in `App.tsx` were tested.
- **Branch Coverage:** Jest reported 100%. The counter application does not contain explicit conditional branches, so this result does not indicate that complex branching logic was tested.
- **Function Coverage:** All measured functions were executed during testing.
- **Line Coverage:** All executable lines in `App.tsx` were executed during testing.

All five automated tests passed, and no uncovered lines were reported for `App.tsx`.

Although the application achieved 100% code coverage, this does not guarantee that it is completely free of bugs.

### Step 8 Screenshot

![Jest code coverage results](screenshots/Step%208.png)