# Godwin's Personal Portfolio

This is a personal portfolio website built with Next.js to showcase my projects and skills as a software engineer.

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Project Showcase:** A dedicated page to display my projects with descriptions, technologies used, and links to the code and live demos.
*   **Contact Form:** A functional contact form that sends a WhatsApp message to me upon submission.
*   **About Page:** A page with my personal introduction, background, skills, and tech stack.

## Technologies Used

*   **Frontend:** Next.js, React, TypeScript, Tailwind CSS
*   **Backend:** Supabase Edge Functions (Deno), Twilio
*   **Styling:** `shadcn/ui`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`

## Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, or pnpm
*   Deno (for running the Supabase function locally)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/profile_me.git
    cd profile_me
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Set up your environment variables. Create a `.env` file in the root of the project and add the following variables:

    ```
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    TO_WHATSAPP_PHONE_NUMBER=your_whatsapp_phone_number
    ```

### Running the Application

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AI Assistant Usage

An AI assistant was used in the development of this project for the following tasks:

*   **Bug Fixes:** Assisted in fixing bugs in the `send-whatsapp` Supabase function.
*   **Image Handling:** Helped to resolve issues with missing images on the about page by finding and adding the correct logos.
*   **Testing:** Wrote tests for the `send-whatsapp` function and added a `test` script to `package.json`.
*   **Documentation:** Generated docstrings for all the functions in the codebase and refactored this README file.
