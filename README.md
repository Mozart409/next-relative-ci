This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project has been configured to send webpack statistics to [relative-ci](https://relative-ci.com/)

> Warning

You need to generate your RELATIVE_CI_KEY

#### Step 1

Visit the [Dashboard](https://app.relative-ci.com/)

#### Step 2

Click on the left icon "Settings"

#### Step 3

In the tab bar "Keys"

#### Step 4

Copy the "default" key

## Add the Key to your Github Repo :key:

#### Step 1

Visit the your Repo

#### Step 2

Click on the "Settings" Icon in the secondary tab bar

#### Step 3

Navigate down to "Secrets"

#### Step 4

Add a secret with the name "RELATIVE_CI_KEY" and add your secret

> When you push your chages the next time the Github Action will run and send the statistics to relative ci. You can see your action by pressing the "Action" Icon in the secondary tab bar in your Github repo

Have fun. :rocket:
