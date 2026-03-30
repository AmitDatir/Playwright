/*
---

What you are testing: Two separate tests — one booking with 1 ticket should show "Eligible for refund", a booking with 3 tickets should show "Not eligible for refund".

Both tests verify the spinner appears and disappears before showing the result.

---

Setup

- BASE_URL = https://eventhub.rahulshettyacademy.com

- Credentials: Use your own credentials

- Write a reusable loginAndGoToBooking(page) helper that logs in and confirms the Browse Events → link is visible

Test 1 — Single ticket booking is eligible for refund

Step 1 — Login

- Call your login helper



Step 2 — Book first event with 1 ticket (default)

- Navigate to /events

- Click Book Now on the very first event card (locate data-testid="event-card" → first → data-testid="book-now-btn")

- Fill Full Name, Email (your email), Phone

- Click confirm button (.confirm-booking-btn)



Step 3 — Navigate to booking detail

- Click View My Bookings link

- Assert URL is /bookings

- Click the first View Details link

- Assert: text Booking Information is visible on the page



Step 4 — Validate booking ref

- Read booking ref from page

- Read event title from h1

- Assert validation : "first character of booking ref equals first character of event title"



Step 5 — Check refund eligibility

- Click the Check Refund Eligibility button

- Assert: spinner element (#refund-spinner) is immediately visible

- Assert: spinner is no longer visible within 6 seconds



Step 6 — Validate result

- Locate result element by id #refund-result

- Assert it is visible

- Assert it contains text Eligible for refund

- Assert it contains text Single-ticket bookings qualify for a full refund



---

Test 2 — Group ticket booking is NOT eligible for refund



Steps 1–2 — Same as Test 1, except after navigating to the event detail page, click the + button twice to increase quantity to 3 before filling the form



- Locate the increment button with button:has-text("+") and click it twice



Steps 3–5 — Identical to Test 1



Step 6 — Validate result (different assertions)

- Assert result contains Not eligible for refund

- Assert result contains Group bookings (3 tickets) are non-refundable

Questions for this assignment
Complete Playwright code for given assignment instructions
*/



import { test, expect } from '@playwright/test';

const BASE_URL   = 'https://eventhub.rahulshettyacademy.com';

// Change these to match a registered account in your local sandbox
const GMAIL_USER = { email: 'rahulshetty1@gmail.com', password: 'Magiclife1!' };

async function loginAndGoToBooking(page) {
  await page.goto(`${BASE_URL}/login`);
  await page.getByLabel('Email').fill(GMAIL_USER.email);
  await page.getByPlaceholder('••••••').fill(GMAIL_USER.password);
  await page.locator('#login-btn').click();
  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}

// ── Test 1: 1 ticket → eligible ───────────────────────────────────────────────
test('refund eligible for single ticket booking', async ({ page }) => {
  await loginAndGoToBooking(page);

  // Book event with 1 ticket via UI
  await page.goto(`${BASE_URL}/events`);
  await page.getByTestId('event-card').first().getByTestId('book-now-btn').click();


  await page.getByLabel('Full Name').fill('Test User');
  await page.locator('#customer-email').fill(GMAIL_USER.email);
  await page.getByPlaceholder('+91 98765 43210').fill('9999999999');
  await page.locator('.confirm-booking-btn').click();

  // Navigate to booking detail
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  await page.getByRole('link', { name: 'View Details' }).first().click();
  await expect(page.getByText('Booking Information')).toBeVisible();

  // Validate booking ref first letter matches event name first letter
  const bookingRef = await page.locator('span.font-mono.font-bold').innerText();
  const eventTitle = await page.locator('h1').innerText();
  expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));

  await page.locator('#check-refund-btn').click();

  // Spinner must appear immediately
  await expect(page.locator('#refund-spinner')).toBeVisible();

  // Wait for spinner to disappear after 4s
  await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });

  // Validate eligible message
  const result = page.locator('#refund-result');
  await expect(result).toBeVisible();
  await expect(result).toContainText('Eligible for refund');
  await expect(result).toContainText('Single-ticket bookings qualify for a full refund');
});

// ── Test 2: 3 tickets → not eligible ─────────────────────────────────────────
test('refund not eligible for group ticket booking', async ({ page }) => {
  await loginAndGoToBooking(page);

  // Book event with 3 tickets via UI
  await page.goto(`${BASE_URL}/events`);
  await page.getByTestId('event-card').first().getByTestId('book-now-btn').click();


  // Increase quantity to 3
  await page.locator('button:has-text("+")').click();
  await page.locator('button:has-text("+")').click();

  await page.getByLabel('Full Name').fill('Test User');
  await page.locator('#customer-email').fill(GMAIL_USER.email);
  await page.getByPlaceholder('+91 98765 43210').fill('9999999999');
  await page.locator('.confirm-booking-btn').click();

  // Navigate to booking detail
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  await page.getByRole('link', { name: 'View Details' }).first().click();
  await expect(page.getByText('Booking Information')).toBeVisible();

  // Validate booking ref first letter matches event name first letter
  const bookingRef = await page.locator('span.font-mono.font-bold').innerText();
  const eventTitle = await page.locator('h1').innerText();
  expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));

  await page.locator('#check-refund-btn').click();

  // Spinner must appear immediately
  await expect(page.locator('#refund-spinner')).toBeVisible();

  // Wait for spinner to disappear after 4s
  await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });

  // Validate ineligible message
  const result = page.locator('#refund-result');
  await expect(result).toBeVisible();
  await expect(result).toContainText('Not eligible for refund');
  await expect(result).toContainText('Group bookings (3 tickets) are non-refundable');
});
